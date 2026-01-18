const input = document.getElementById('text-input');
const canvas = document.getElementById('canvas');
const downloadBtn = document.getElementById('download-btn');

function generateQR(text) {
  if (!text) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }
  
  QRCode.toCanvas(canvas, text, {
    width: 250,
    margin: 1,
    color: {
      dark: '#000000',
      light: '#ffffff'
    },
    errorCorrectionLevel: 'H'
  }, function (error) {
    if (error) console.error('QR Gen Error:', error);
  });
}

function downloadQR() {
  if (!canvas.width || !input.value) return;
  
  const link = document.createElement('a');
  link.download = 'qr-code.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs && tabs[0] && tabs[0].url) {
      const currentUrl = tabs[0].url;
      input.value = currentUrl;
      generateQR(currentUrl);
    }
  });
});

input.addEventListener('input', (e) => {
  generateQR(e.target.value);
});

downloadBtn.addEventListener('click', downloadQR);