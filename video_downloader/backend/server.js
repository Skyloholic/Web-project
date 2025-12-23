const express = require("express");
const { exec } = require("child_process");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const PYTHON = process.env.YT_DLP_PYTHON || "python";

app.get("/health", (_req, res) => res.json({ status: "ok" }));

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Ensure downloads directory exists and serve it
const downloadsDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir, { recursive: true });
app.use('/downloads', express.static(downloadsDir));

app.post("/api/analyze", (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "No URL provided" });

  // yt-dlp JSON output
  exec(`${PYTHON} -m yt_dlp -j "${url}"`, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });
    try {
      const info = JSON.parse(stdout);
      const formats = info.formats.map(f => {
        let resolution = 'Unknown';
        
        // Check if it's audio only
        if (f.format_id && (f.format_id.includes('audio') || f.format_id === 'bestaudio' || f.format_id === 'worstaudio')) {
          resolution = 'Audio Only';
        }
        // Try height first (most reliable)
        else if (f.height && f.height > 0) {
          resolution = `${f.height}p`;
        }
        // Try to get resolution from format_note (Instagram, Pinterest)
        else if (f.format_note) {
          resolution = f.format_note;
        }
        
        return {
          format_id: f.format_id,
          ext: f.ext,
          resolution: resolution,
          filesize: f.filesize,
          height: f.height,
          width: f.width,
          format_note: f.format_note
        };
      });
      
      // Format duration in MM:SS format
      let duration = 'Unknown';
      if (info.duration) {
        const minutes = Math.floor(info.duration / 60);
        const seconds = Math.floor(info.duration % 60);
        duration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }
      
      // Get thumbnail - try multiple sources for Instagram/Pinterest compatibility
      let thumbnail = info.thumbnail || info.thumbnails?.[0]?.url;
      if (!thumbnail && info.thumbnails && Array.isArray(info.thumbnails)) {
        // Get the largest thumbnail
        thumbnail = info.thumbnails[info.thumbnails.length - 1]?.url;
      }
      
      // If no thumbnail, extract first frame from video
      if (!thumbnail) {
        const frameFile = path.join(downloadsDir, `frame_${Date.now()}.png`);
        // Use ffmpeg to extract first frame at 1 second or 10% of duration
        const seekTime = Math.min(1, (info.duration || 10) * 0.1);
        exec(`ffmpeg -i "${url}" -ss ${seekTime} -vframes 1 -y "${frameFile}" 2>&1`, (ffErr, ffOut) => {
          if (!ffErr && fs.existsSync(frameFile)) {
            thumbnail = `/downloads/${path.basename(frameFile)}`;
          }
          res.json({ 
            title: info.title || 'Video',
            thumbnail: thumbnail,
            duration: duration,
            formats 
          });
        });
      } else {
        res.json({ 
          title: info.title || 'Video',
          thumbnail: thumbnail,
          duration: duration,
          formats 
        });
      }
    } catch (e) {
      res.status(500).json({ error: "Failed parsing yt-dlp output" });
    }
  });
});

app.post("/api/download", (req, res) => {
  const { url, format_id } = req.body;
  if (!url || !format_id) return res.status(400).json({ error: "Missing params" });

  // Save to downloads with a timestamp prefix then return public URL
  const filenameBase = Date.now().toString();
  const outTemplate = path.join(downloadsDir, `${filenameBase}.%(ext)s`);

  // Merge best audio with selected format to ensure audio is included
  const formatSpec = `${format_id}+bestaudio/best`;

  exec(`${PYTHON} -m yt_dlp -f "${formatSpec}" -o "${outTemplate}" "${url}"`, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });

    // Find the file that starts with the timestamp base
    try {
      const files = fs.readdirSync(downloadsDir);
      const match = files.find(n => n.startsWith(filenameBase));
      if (!match) return res.status(500).json({ error: 'File not found after download' });
      const publicUrl = `/downloads/${encodeURIComponent(match)}`;
      res.json({ url: publicUrl, name: match });
    } catch (e) {
      res.status(500).json({ error: 'Failed to locate downloaded file' });
    }
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
