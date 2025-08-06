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
<img width="1920" height="1080" alt="Screenshot 2025-05-26 at 13 12 52 (2)" src="https://github.com/user-attachments/assets/1f0f7b6c-12b7-4aa3-9d62-0c2323d73588" />

* My custom popup
<img width="500" height="421" alt="Screenshot 2025-08-06 at 20 32 57" src="https://github.com/user-attachments/assets/0dd3bc27-5e26-4877-9806-21e9c476e1e0" />

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
