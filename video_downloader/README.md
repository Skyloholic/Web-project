# VideoSave - Video Downloader

A fast, secure, and user-friendly web application to download videos from multiple platforms including YouTube, Instagram, TikTok, Pinterest, X (Twitter), and YouTube Shorts.

## Features

✨ **Multi-Platform Support**
- YouTube videos and playlists
- Instagram Reels and Posts
- TikTok videos
- Pinterest pins and videos
- X (Twitter) videos
- YouTube Shorts

🎬 **Video Options**
- Multiple resolution options (144p - 4K)
- Audio-only MP3 extraction
- High-quality downloads
- Fast processing

🔒 **Security & Privacy**
- No registration required
- No data collection
- 100% secure downloads
- Files deleted after download

🌍 **Multi-Language Support**
- English
- Spanish
- French
- German
- Italian
- Portuguese
- Hindi
- Japanese
- Chinese

📱 **Responsive Design**
- Works on desktop, tablet, and mobile
- Beautiful gradient animations
- Interactive hover effects
- User-friendly interface

## Tech Stack

### Frontend
- HTML5
- CSS3 (with animations and gradients)
- JavaScript (ES6+)
- Responsive Design
- Multi-language support

### Backend
- Node.js
- Express.js
- yt-dlp (video extraction)
- FFmpeg (frame extraction)
- CORS enabled

## Installation

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- yt-dlp
- FFmpeg

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/video-downloader.git
cd video-downloader
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install yt-dlp and FFmpeg**
```bash
# On Windows (using pip)
pip install yt-dlp
# FFmpeg - download from https://ffmpeg.org/download.html
```

4. **Start the backend server**
```bash
npm start
```

Server runs on `http://localhost:5000`

5. **Access the frontend**
Open your browser and navigate to `http://localhost:5000`

## Project Structure

```
video-downloader/
├── backend/
│   ├── server.js          # Express server
│   ├── package.json       # Node dependencies
│   └── downloads/         # Downloaded files
│
├── frontend/
│   ├── index.html         # Main page
│   ├── instagram.html     # Instagram downloader
│   ├── pinterest.html     # Pinterest downloader
│   ├── x.html             # X (Twitter) downloader
│   ├── youtube-shorts.html # YouTube Shorts downloader
│   ├── style.css          # Styles
│   ├── script.js          # JavaScript logic
│   └── favicon.svg        # Site favicon
│
├── .gitignore
├── README.md
└── LICENSE
```

## Usage

### Basic Download Flow

1. **Select a platform** - Choose from YouTube, Instagram, Pinterest, X, or YouTube Shorts
2. **Paste video URL** - Input the video link
3. **Analyze** - Click "Analyze" to fetch available formats
4. **Choose quality** - Select desired resolution/format
5. **Download** - Click "Download" to get your video

### Supported URLs
- YouTube: `https://www.youtube.com/watch?v=...`
- Instagram: `https://www.instagram.com/p/...` or `https://www.instagram.com/reel/...`
- Pinterest: `https://www.pinterest.com/pin/...`
- X (Twitter): `https://twitter.com/*/status/*`
- YouTube Shorts: `https://www.youtube.com/shorts/...`

## API Endpoints

### POST /api/analyze
Analyze a video URL and return available formats.

**Request:**
```json
{
  "url": "https://www.youtube.com/watch?v=..."
}
```

**Response:**
```json
{
  "title": "Video Title",
  "thumbnail": "...",
  "duration": "5:30",
  "formats": [
    {
      "format_id": "22",
      "ext": "mp4",
      "resolution": "720p",
      "filesize": 52428800,
      "height": 720
    }
  ]
}
```

### POST /api/download
Download a video in specified format.

**Request:**
```json
{
  "url": "https://www.youtube.com/watch?v=...",
  "format_id": "22"
}
```

**Response:**
```json
{
  "url": "/downloads/filename.mp4",
  "name": "filename.mp4"
}
```

## Features in Detail

### Resolution Smart Mapping
Unusual resolutions (1152p, 1280p) are automatically mapped to nearest common resolution:
- 1152p → 1080p
- 1280p → 1440p
- 1440p → 1440p
- 2160p (4K) → 2160p

### Translation System
Supports 9 languages with instant switching:
- Translations are stored in script.js
- Use `data-i18n` attribute on HTML elements
- Language preference saved to localStorage

### Responsive Design
- Mobile-first approach
- Hamburger menu on mobile devices
- Language selector in header
- Smooth animations and transitions

## SEO Optimization

- Meta descriptions for all pages
- Open Graph tags for social sharing
- Structured page titles
- Keyword-optimized content
- Mobile-friendly design

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Limitations

- Large file downloads may take time
- Some platforms may have rate limiting
- Respect copyright and terms of service
- Download only content you have rights to

## Future Enhancements

- [ ] Batch downloads
- [ ] Playlist support
- [ ] Chrome extension
- [ ] Custom download naming
- [ ] Format conversion (MP4, MKV, WebM)
- [ ] Subtitle extraction
- [ ] Advanced filtering options

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This tool is for personal use only. Respect copyright laws and platform terms of service. The creators are not responsible for misuse of this application.

## Contact

- GitHub: [your-github-profile](https://github.com/yourusername)
- Email: your.email@example.com

## Changelog

### Version 1.0.0 (December 2025)
- Initial release
- Multi-platform support (YouTube, Instagram, Pinterest, X, YouTube Shorts)
- 9-language support
- Responsive design with animations
- SEO optimization
- Resolution smart mapping
- Security and privacy features

---

Made with ❤️ by Your Name
