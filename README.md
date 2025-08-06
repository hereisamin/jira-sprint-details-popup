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

* The default popup in Jira
<img width="300" alt="popup before" src="https://github.com/user-attachments/assets/19fde30d-64d3-4cf4-813b-a01a9ed796a2" />

* My custom popup
<img width="300" alt="popup after" src="https://github.com/user-attachments/assets/fba2c997-398f-4e0a-a7f5-a117c8115df6" />

---

### 🧩 How It Works

This extension uses a `MutationObserver` to detect when Jira injects its sprint goals popup, hides it, and then shows a custom popup instead — nicely formatted and easier to read.

---

### 📥 Installation

#### Option 1: Manual (Unpacked)

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer Mode** (right top)
4. Click **Load unpacked**
5. Select the extension folder

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

### ✅ Permissions

This extension **does not collect any data**. It only modifies the DOM of Jira pages for visual enhancement.

---

### 📄 License

MIT – Free to use and modify.
