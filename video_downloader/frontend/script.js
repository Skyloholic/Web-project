// Translation system
const translations = {
  en: {
    features: 'Features',
    howToUse: 'How to Use',
    faq: 'FAQ',
    home: 'Home',
    downloadFromMultiple: 'Download from Multiple Platforms',
    selectFavorite: 'Select your favorite platform to start downloading',
    whatCanDownload: 'What You Can Download',
    fullVideos: 'Full Videos',
    downloadVideosMultiple: 'Download videos in multiple resolutions from 144p up to 4K quality.',
    audioOnly: 'Audio Only',
    convertVideo: 'Convert any video into high-quality MP3 audio files for music and podcasts.',
    mobileFriendly: 'Mobile Friendly',
    worksSeamlessly: 'Works seamlessly on desktop, tablet, and mobile devices.',
    safe: '100% Safe',
    noRegistration: 'No registration required. Your files are secure and private.',
    lightningFast: 'Lightning Fast',
    downloadInstantly: 'Download videos instantly without waiting or annoying ads.',
    availableDownloads: 'Available Downloads',
    newDownload: 'New Download',
    downloadBtn: 'Download',
    analyze: 'Analyze',
    pasteLink: 'Paste your video link here...',
    processing: 'Processing your video...',
    error: 'Error',
    noUrl: 'Paste a video link first',
    copyrightNote: 'Download only content you have rights to. Respect copyright and terms of service.',
  },
  es: {
    features: 'Características',
    howToUse: 'Cómo Usar',
    faq: 'Preguntas Frecuentes',
    home: 'Inicio',
    downloadFromMultiple: 'Descarga desde Múltiples Plataformas',
    selectFavorite: 'Selecciona tu plataforma favorita para comenzar a descargar',
    whatCanDownload: 'Qué Puedes Descargar',
    fullVideos: 'Videos Completos',
    downloadVideosMultiple: 'Descarga videos en múltiples resoluciones de 144p hasta 4K.',
    audioOnly: 'Solo Audio',
    convertVideo: 'Convierte cualquier video en archivos MP3 de alta calidad.',
    mobileFriendly: 'Compatible Móvil',
    worksSeamlessly: 'Funciona perfectamente en escritorio, tablet y dispositivos móviles.',
    safe: '100% Seguro',
    noRegistration: 'No requiere registro. Tus archivos son seguros y privados.',
    lightningFast: 'Súper Rápido',
    downloadInstantly: 'Descarga videos al instante sin esperar ni anuncios molestos.',
    availableDownloads: 'Descargas Disponibles',
    newDownload: 'Nueva Descarga',
    downloadBtn: 'Descargar',
    analyze: 'Analizar',
    pasteLink: 'Pega tu enlace de video aquí...',
    processing: 'Procesando tu video...',
    error: 'Error',
    noUrl: 'Pega un enlace de video primero',
    copyrightNote: 'Descarga solo contenido que tengas derecho a descargar. Respeta los derechos de autor.',
  },
  fr: {
    features: 'Caractéristiques',
    howToUse: 'Comment Utiliser',
    faq: 'Questions Fréquemment Posées',
    home: 'Accueil',
    downloadFromMultiple: 'Téléchargez depuis Plusieurs Plateformes',
    selectFavorite: 'Sélectionnez votre plateforme préférée pour commencer',
    whatCanDownload: 'Ce que Vous Pouvez Télécharger',
    fullVideos: 'Vidéos Complètes',
    downloadVideosMultiple: 'Téléchargez des vidéos en plusieurs résolutions de 144p à 4K.',
    audioOnly: 'Audio Uniquement',
    convertVideo: 'Convertissez n\'importe quelle vidéo en fichiers MP3 de haute qualité.',
    mobileFriendly: 'Compatible Mobile',
    worksSeamlessly: 'Fonctionne parfaitement sur ordinateur, tablette et appareils mobiles.',
    safe: '100% Sûr',
    noRegistration: 'Aucune inscription requise. Vos fichiers sont sécurisés et privés.',
    lightningFast: 'Extrêmement Rapide',
    downloadInstantly: 'Téléchargez des vidéos instantanément sans attendre ni annonces gênantes.',
    availableDownloads: 'Téléchargements Disponibles',
    newDownload: 'Nouveau Téléchargement',
    downloadBtn: 'Télécharger',
    analyze: 'Analyser',
    pasteLink: 'Collez votre lien vidéo ici...',
    processing: 'Traitement de votre vidéo...',
    error: 'Erreur',
    noUrl: 'Collez d\'abord un lien vidéo',
    copyrightNote: 'Téléchargez uniquement du contenu que vous avez le droit de télécharger.',
  },
  de: {
    features: 'Funktionen',
    howToUse: 'Wie man verwendet',
    faq: 'Häufig gestellte Fragen',
    home: 'Startseite',
    downloadFromMultiple: 'Von mehreren Plattformen herunterladen',
    selectFavorite: 'Wählen Sie Ihre lieblings Plattform zum Herunterladen',
    whatCanDownload: 'Was Sie herunterladen können',
    fullVideos: 'Vollständige Videos',
    downloadVideosMultiple: 'Videos in mehreren Auflösungen von 144p bis 4K herunterladen.',
    audioOnly: 'Nur Audio',
    convertVideo: 'Konvertieren Sie beliebige Videos in hochwertige MP3-Dateien.',
    mobileFriendly: 'Mobile freundlich',
    worksSeamlessly: 'Funktioniert nahtlos auf Desktop-, Tablet- und Mobilgeräten.',
    safe: '100% Sicher',
    noRegistration: 'Keine Registrierung erforderlich. Ihre Dateien sind sicher und privat.',
    lightningFast: 'Blitzschnell',
    downloadInstantly: 'Videos sofort herunterladen ohne zu warten oder nervige Anzeigen.',
    availableDownloads: 'Verfügbare Downloads',
    newDownload: 'Neuer Download',
    downloadBtn: 'Herunterladen',
    analyze: 'Analysieren',
    pasteLink: 'Fügen Sie hier Ihren Videolink ein...',
    processing: 'Ihr Video wird verarbeitet...',
    error: 'Fehler',
    noUrl: 'Fügen Sie zuerst einen Videolink ein',
    copyrightNote: 'Laden Sie nur Inhalte herunter, zu deren Download Sie berechtigt sind.',
  },
  it: {
    features: 'Caratteristiche',
    howToUse: 'Come Usare',
    faq: 'Domande Frequenti',
    home: 'Home',
    downloadFromMultiple: 'Scarica da Più Piattaforme',
    selectFavorite: 'Seleziona la tua piattaforma preferita per iniziare',
    whatCanDownload: 'Cosa Puoi Scaricare',
    fullVideos: 'Video Completi',
    downloadVideosMultiple: 'Scarica video in più risoluzioni da 144p a 4K.',
    audioOnly: 'Solo Audio',
    convertVideo: 'Converti qualsiasi video in file MP3 di alta qualità.',
    mobileFriendly: 'Mobile Friendly',
    worksSeamlessly: 'Funziona perfettamente su desktop, tablet e dispositivi mobili.',
    safe: '100% Sicuro',
    noRegistration: 'Nessuna registrazione richiesta. I tuoi file sono sicuri e privati.',
    lightningFast: 'Velocissimo',
    downloadInstantly: 'Scarica video all\'istante senza aspettare o fastidiosi annunci.',
    availableDownloads: 'Download Disponibili',
    newDownload: 'Nuovo Download',
    downloadBtn: 'Scarica',
    analyze: 'Analizza',
    pasteLink: 'Incolla il tuo link video qui...',
    processing: 'Elaborazione del tuo video...',
    error: 'Errore',
    noUrl: 'Incolla prima un link video',
    copyrightNote: 'Scarica solo contenuti che hai il diritto di scaricare.',
  },
  pt: {
    features: 'Recursos',
    howToUse: 'Como Usar',
    faq: 'Perguntas Frequentes',
    home: 'Início',
    downloadFromMultiple: 'Baixar de Múltiplas Plataformas',
    selectFavorite: 'Selecione sua plataforma favorita para começar',
    whatCanDownload: 'O que Você Pode Baixar',
    fullVideos: 'Vídeos Completos',
    downloadVideosMultiple: 'Baixe vídeos em múltiplas resoluções de 144p até 4K.',
    audioOnly: 'Apenas Áudio',
    convertVideo: 'Converta qualquer vídeo em arquivos MP3 de alta qualidade.',
    mobileFriendly: 'Compatível com Celular',
    worksSeamlessly: 'Funciona perfeitamente em desktop, tablet e dispositivos móveis.',
    safe: '100% Seguro',
    noRegistration: 'Sem registro necessário. Seus arquivos são seguros e privados.',
    lightningFast: 'Muito Rápido',
    downloadInstantly: 'Baixe vídeos instantaneamente sem esperar ou anúncios incômodos.',
    availableDownloads: 'Downloads Disponíveis',
    newDownload: 'Novo Download',
    downloadBtn: 'Baixar',
    analyze: 'Analisar',
    pasteLink: 'Cole seu link de vídeo aqui...',
    processing: 'Processando seu vídeo...',
    error: 'Erro',
    noUrl: 'Cole um link de vídeo primeiro',
    copyrightNote: 'Baixe apenas conteúdo que você tenha direito de baixar.',
  },
  hi: {
    features: 'विशेषताएं',
    howToUse: 'कैसे उपयोग करें',
    faq: 'अक्सर पूछे जाने वाले प्रश्न',
    home: 'होम',
    downloadFromMultiple: 'कई प्लेटफॉर्म से डाउनलोड करें',
    selectFavorite: 'डाउनलोड शुरू करने के लिए अपना पसंदीदा प्लेटफॉर्म चुनें',
    whatCanDownload: 'आप क्या डाउनलोड कर सकते हैं',
    fullVideos: 'पूरी वीडियो',
    downloadVideosMultiple: '144p से 4K तक कई रिज़ॉल्यूशन में वीडियो डाउनलोड करें।',
    audioOnly: 'केवल ऑडियो',
    convertVideo: 'किसी भी वीडियो को उच्च गुणवत्ता वाली MP3 फाइलों में बदलें।',
    mobileFriendly: 'मोबाइल के अनुकूल',
    worksSeamlessly: 'डेस्कटॉप, टैबलेट और मोबाइल डिवाइस पर निर्बाध रूप से काम करता है।',
    safe: '100% सुरक्षित',
    noRegistration: 'कोई रजिस्ट्रेशन आवश्यक नहीं। आपकी फाइलें सुरक्षित और निजी हैं।',
    lightningFast: 'बिजली तेज',
    downloadInstantly: 'बिना प्रतीक्षा किए या कष्टप्रद विज्ञापनों के तुरंत वीडियो डाउनलोड करें।',
    availableDownloads: 'उपलब्ध डाउनलोड',
    newDownload: 'नया डाउनलोड',
    downloadBtn: 'डाउनलोड',
    analyze: 'विश्लेषण करें',
    pasteLink: 'अपनी वीडियो लिंक यहां चिपकाएं...',
    processing: 'आपकी वीडियो प्रसंस्करण...',
    error: 'त्रुटि',
    noUrl: 'पहले एक वीडियो लिंक चिपकाएं',
    copyrightNote: 'केवल उस सामग्री को डाउनलोड करें जिसे डाउनलोड करने का आपको अधिकार है।',
  },
  ja: {
    features: '機能',
    howToUse: '使い方',
    faq: 'よくある質問',
    home: 'ホーム',
    downloadFromMultiple: '複数のプラットフォームからダウンロード',
    selectFavorite: 'お気に入りのプラットフォームを選択してください',
    whatCanDownload: 'ダウンロードできるもの',
    fullVideos: 'フルビデオ',
    downloadVideosMultiple: '144pから4Kまでの複数の解像度でビデオをダウンロード',
    audioOnly: 'オーディオのみ',
    convertVideo: 'あらゆるビデオを高品質MP3ファイルに変換',
    mobileFriendly: 'モバイルフレンドリー',
    worksSeamlessly: 'デスクトップ、タブレット、モバイルデバイスでシームレスに動作',
    safe: '100%安全',
    noRegistration: '登録不要。ファイルは安全かつプライベート',
    lightningFast: '超高速',
    downloadInstantly: 'ビデオを瞬時にダウンロード、待機や邪魔な広告なし',
    availableDownloads: '利用可能なダウンロード',
    newDownload: '新しいダウンロード',
    downloadBtn: 'ダウンロード',
    analyze: '分析',
    pasteLink: 'ビデオリンクをここに貼り付けてください...',
    processing: 'ビデオを処理中...',
    error: 'エラー',
    noUrl: '最初にビデオリンクを貼り付けてください',
    copyrightNote: 'ダウンロード権を持つコンテンツのみをダウンロードしてください',
  },
  zh: {
    features: '功能',
    howToUse: '如何使用',
    faq: '常见问题',
    home: '首页',
    downloadFromMultiple: '从多个平台下载',
    selectFavorite: '选择您喜爱的平台开始下载',
    whatCanDownload: '您可以下载什么',
    fullVideos: '完整视频',
    downloadVideosMultiple: '以144p到4K的多种分辨率下载视频',
    audioOnly: '仅音频',
    convertVideo: '将任何视频转换为高质量MP3文件',
    mobileFriendly: '手机友好',
    worksSeamlessly: '在桌面、平板和移动设备上完美运行',
    safe: '100%安全',
    noRegistration: '无需注册。您的文件安全且私密',
    lightningFast: '闪电般快速',
    downloadInstantly: '瞬间下载视频，无需等待或烦人的广告',
    availableDownloads: '可用下载',
    newDownload: '新下载',
    downloadBtn: '下载',
    analyze: '分析',
    pasteLink: '在此粘贴您的视频链接...',
    processing: '正在处理您的视频...',
    error: '错误',
    noUrl: '请先粘贴视频链接',
    copyrightNote: '仅下载您有权下载的内容。尊重版权。',
  },
};

function getCurrentLanguage() {
  const saved = localStorage.getItem('selectedLanguage');
  return saved || 'en';
}

function translatePage() {
  const lang = getCurrentLanguage();
  const t = translations[lang] || translations['en'];
  
  // Get all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
  // Update input placeholders
  const urlInput = document.getElementById('videoUrl');
  if (urlInput) {
    urlInput.placeholder = t.pasteLink;
  }
}

function changeLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
  translatePage();
}

// Translate on page load
document.addEventListener('DOMContentLoaded', translatePage);

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

function analyze() {
  const url = document.getElementById("videoUrl").value;
  if (!url) return alert("Paste a video link first");

  document.getElementById("loader").classList.remove("hidden");
  document.getElementById("results").classList.add("hidden");

  fetch("http://localhost:5000/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  })
    .then(r => r.json())
    .then(data => {
      document.getElementById("loader").classList.add("hidden");

      if (data.error) {
        alert("Error: " + data.error);
        return;
      }

      const resultsDiv = document.getElementById("results");
      const formatsList = document.getElementById("formats-list");
      formatsList.innerHTML = "";

      resultsDiv.classList.remove("hidden");
      
      // Insert video info at the top of formats list
      if (data.thumbnail || data.title || data.duration) {
        const infoCard = document.createElement("div");
        infoCard.className = "video-info-card";
        infoCard.innerHTML = `
          ${data.thumbnail ? `<img src="${data.thumbnail}" alt="Thumbnail" class="video-thumbnail">` : ''}
          <div class="video-details">
            ${data.title ? `<h4 class="video-title">${escapeHtml(data.title)}</h4>` : ''}
            ${data.duration ? `<p class="video-duration"><i class="fas fa-clock"></i> Duration: ${data.duration}</p>` : ''}
          </div>
        `;
        formatsList.appendChild(infoCard);
      }

      // Group formats by quality - better filtering for different platforms
      // Common resolutions to show (filter out unusual ones)
      const commonResolutions = [144, 240, 360, 480, 720, 1080, 1440, 2160];
      
      // Function to map unusual resolutions to nearest common one
      function mapToCommonResolution(height) {
        if (!height || height === 0) return height;
        
        // If it's already a common resolution, return it
        if (commonResolutions.includes(height)) return height;
        
        // Find the closest common resolution
        let closest = commonResolutions[0];
        let minDiff = Math.abs(height - closest);
        
        for (let res of commonResolutions) {
          const diff = Math.abs(height - res);
          if (diff < minDiff) {
            minDiff = diff;
            closest = res;
          }
        }
        
        return closest;
      }
      
      const videoFormats = data.formats.filter(f => {
        // Exclude non-video formats
        if (f.ext === "mhtml" || f.ext === "m4a" || f.resolution === "Audio Only") return false;
        
        // Include common video formats
        if (["mp4", "mkv", "webm", "flv", "avi", "mov"].includes(f.ext)) return true;
        
        // Include formats with height (video indicators)
        if (f.height && f.height > 0) return true;
        
        return false;
      });

      // Map resolutions to common ones and deduplicate
      const seenResolutions = new Set();
      const uniqueVideoFormats = videoFormats.filter(f => {
        let displayHeight = f.height || 0;
        
        // Map unusual resolutions to closest common one
        if (displayHeight > 0) {
          displayHeight = mapToCommonResolution(displayHeight);
          f.displayHeight = displayHeight; // Store the mapped height
        }
        
        const key = displayHeight > 0 ? `${displayHeight}p` : f.resolution;
        if (seenResolutions.has(key)) return false;
        seenResolutions.add(key);
        return true;
      });

      // Sort by quality (highest first)
      uniqueVideoFormats.sort((a, b) => {
        const heightA = a.displayHeight || a.height || 0;
        const heightB = b.displayHeight || b.height || 0;
        return heightB - heightA;
      });

      const audioFormats = data.formats.filter(f => 
        f.resolution === "Audio Only" || f.ext === "m4a" || (f.format_id && f.format_id.match(/audio|bestaudio/))
      );


      // Render video formats (show up to 8 unique resolutions)
      uniqueVideoFormats.slice(0, 8).forEach(f => {
        const card = document.createElement("div");
        card.className = "format-card";
        const filesize = f.filesize ? `${(f.filesize / 1024 / 1024).toFixed(2)} MB` : "Unknown";
        
        // Use mapped height for display
        let resolutionText = "Unknown";
        if (f.displayHeight && f.displayHeight > 0) {
          resolutionText = `${f.displayHeight}p`;
        } else if (f.height && f.height > 0) {
          resolutionText = `${f.height}p`;
        } else if (f.resolution && f.resolution !== "Unknown") {
          resolutionText = f.resolution;
        }
        
        card.innerHTML = `
          <div class="format-info">
            <span class="format-type">${f.ext.toUpperCase()}</span>
            <span class="format-resolution">${resolutionText}</span>
            <span class="format-size">${filesize}</span>
          </div>
          <button class="btn-download" onclick="downloadVideo('${url}','${f.format_id}')">
            <i class="fas fa-download"></i> Download
          </button>
        `;
        formatsList.appendChild(card);
      });

      // Render audio format if available
      if (audioFormats.length > 0) {
        const f = audioFormats[0];
        const card = document.createElement("div");
        card.className = "format-card";
        const filesize = f.filesize ? `${(f.filesize / 1024 / 1024).toFixed(2)} MB` : "Unknown";
        card.innerHTML = `
          <div class="format-info">
            <span class="format-type">MP3</span>
            <span class="format-resolution">Audio Only</span>
            <span class="format-size">${filesize}</span>
          </div>
          <button class="btn-download" onclick="downloadVideo('${url}','${f.format_id}')">
            <i class="fas fa-download"></i> Download
          </button>
        `;
        formatsList.appendChild(card);
      }
    })
    .catch(() => {
      document.getElementById("loader").classList.add("hidden");
      alert("Error fetching formats");
    });
}

function downloadVideo(url, format_id) {
  const btn = event.target.closest(".btn-download");
  const card = btn.closest(".format-card");
  btn.classList.add("loading");
  btn.disabled = true;

  // Create and show progress bar
  let progressContainer = card.querySelector(".download-progress");
  if (!progressContainer) {
    progressContainer = document.createElement("div");
    progressContainer.className = "download-progress";
    progressContainer.innerHTML = '<div class="progress-bar"></div><span class="progress-text">0%</span>';
    card.appendChild(progressContainer);
  }
  progressContainer.classList.remove("hidden");

  // Animate percentage counter
  let currentPercent = 0;
  const progressText = progressContainer.querySelector(".progress-text");
  const progressBar = progressContainer.querySelector(".progress-bar");
  
  const percentInterval = setInterval(() => {
    if (currentPercent < 90) {
      currentPercent += Math.random() * 15;
      if (currentPercent > 90) currentPercent = 90;
    }
    progressText.textContent = Math.floor(currentPercent) + "%";
    progressBar.style.setProperty('--progress-width', currentPercent + "%");
  }, 300);

  fetch("http://localhost:5000/api/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, format_id })
  })
    .then(r => r.json())
    .then(data => {
      clearInterval(percentInterval);
      btn.classList.remove("loading");
      btn.disabled = false;
      
      if (data && data.url) {
        // Show 100% completion
        currentPercent = 100;
        progressText.textContent = "100%";
        progressBar.style.setProperty('--progress-width', "100%");
        progressContainer.classList.add("complete");
        
        // Wait a moment then open download
        setTimeout(() => {
          window.open(data.url, '_blank');
          progressContainer.classList.add("hidden");
        }, 800);
      } else {
        alert("Download failed: " + (data.error || "Unknown error"));
        progressContainer.classList.add("hidden");
      }
    })
    .catch(err => {
      clearInterval(percentInterval);
      btn.classList.remove("loading");
      btn.disabled = false;
      alert("Download request failed: " + err.message);
      progressContainer.classList.add("hidden");
    });
}

function toggleFaq(element) {
  const answer = element.nextElementSibling;
  answer.classList.toggle("show");
  element.classList.toggle("active");
}
