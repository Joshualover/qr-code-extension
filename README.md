# Quick QR Generator

A lightweight, privacy-focused browser extension for Chrome, Edge, and Brave that instantly generates QR codes for your current tab or custom text.

## 🚀 Features

- **Instant Generation**: Automatically generates a QR code for the current active tab's URL upon opening.
- **Live Updates**: Type any text or URL into the input field to update the QR code in real-time.
- **High-Quality Downloads**: One-click download of the generated QR code as a PNG image.
- **Offline Capable**: All logic runs locally on your machine. No data is sent to external servers.
- **Modern UI**: Clean, compact, and user-friendly interface.

## 📦 Installation

Since this extension is not yet in the Chrome Web Store, you can install it manually using "Developer Mode".

1.  **Download the Source Code**
    *   Clone this repository or download the ZIP file and extract it to a folder on your computer.

2.  **Open Extensions Management**
    *   **Chrome/Brave**: Type `chrome://extensions` in the address bar and press Enter.
    *   **Edge**: Type `edge://extensions` in the address bar and press Enter.

3.  **Enable Developer Mode**
    *   Look for a toggle switch named **"Developer mode"** (usually in the top right corner) and turn it **ON**.

4.  **Load the Extension**
    *   Click the **"Load unpacked"** button that appears.
    *   Navigate to and select the `qr-code-extension` folder (the one containing `manifest.json`).

5.  **Pin for Easy Access**
    *   Click the "puzzle piece" icon in your browser toolbar and pin **Quick QR Generator** for quick access.

## 📖 How to Use

1.  **Generate for Current Page**: Navigate to any website and click the extension icon. The QR code for that page will appear immediately.
2.  **Custom Text**: Click the extension icon and type any text or URL into the input box. The QR code will update as you type.
3.  **Download**: Click the **"Download PNG"** button to save the QR code image to your computer.

## 🛠️ Development

If you want to modify or build the extension from source:

### Prerequisites
- [Node.js](https://nodejs.org/) and npm installed.

### Setup
1.  Navigate to the project directory:
    ```bash
    cd qr-code-extension
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  (Optional) If icons are missing, you can regenerate them:
    ```bash
    # Create a simple script or use the provided logic to generate icons using the 'qrcode' library
    node generate_icons.js 
    ```
    *(Note: `generate_icons.js` is a temporary utility script you might need to create based on project needs if icons are deleted)*

### Project Structure
```text
qr-code-extension/
├── icons/              # Extension icons (16, 48, 128px)
├── node_modules/       # Dependencies
├── manifest.json       # Extension configuration (Manifest V3)
├── popup.html          # Extension popup interface
├── popup.js            # Logic for QR generation and interaction
├── style.css           # Styling for the popup
├── qrcode.dist.js      # Bundled QR code library
└── package.json        # Project metadata and dependencies
```

## 📄 License

This project is open-source and available for personal and educational use.

---
*Built with HTML, CSS, JavaScript, and the [qrcode](https://www.npmjs.com/package/qrcode) library.*