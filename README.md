## 📌 Jira Sprint Goals Formatter – Chrome Extension

> 🛠️ Replaces Jira's default Sprint Goals popup with a clean, scrollable, and readable version.

### ✨ Features

* 📋 Automatically replaces Jira’s cluttered sprint popup with a well-formatted, scrollable version
* 👀 Easy-to-read layout for sprint goals
* ❌ Hides Jira's default popup
* ✅ Includes a close button
* 🚀 No page reload or delay needed – works automatically

---

### 📸 Preview

*Add screenshots or a short GIF here showing:*

* The default popup in Jira
* Your custom popup

---

### 🧩 How It Works

This extension uses a `MutationObserver` to detect when Jira injects its sprint goals popup, hides it, and then shows a custom popup instead — nicely formatted and easier to read.

---

### 📥 Installation

#### Option 1: Manual (Unpacked)

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the extension folder

#### Option 2: Chrome Web Store (coming soon)

*Once published, link will go here*

---

### 🛠️ Development

This repo contains:

```
📁 jira-sprint-goals-extension/
├── manifest.json      // Chrome extension config
├── content.js         // Core logic for replacing popup
├── styles.css         // Styling for the custom popup
```

To modify:

* Edit `content.js` to adjust behavior
* Tweak styles in `styles.css` if needed

---

### 🚀 Publishing (for maintainers)

1. Zip the folder contents (not the folder itself)
2. Upload to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
3. Fill in metadata, category: `Productivity`
4. Submit for review

---

### ✅ Permissions

This extension **does not collect any data**. It only modifies the DOM of Jira pages for visual enhancement.

---

### 📄 License

MIT – Free to use and modify.
