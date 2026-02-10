# User Manual: soitgoes511.github.io

This document is your "Cheat Sheet" for managing your site. It is designed to be copy-paste ready so you don't have to relearn how the site works every time you want to post.

## 📝 How to Add a New Blog Post

1.  **Create a file:** Go to `src/content/blog/` and create a new file ending in `.md`.
    *   *Tip: You can name it whatever you want, e.g., `my-new-post.md`.*
2.  **Paste this template:**
    ```markdown
    ---
    title: "Your Post Title Here"
    date: 2026-02-10
    categories: tech personal
    ---
    
    Start writing your content here in Markdown...
    
    ## Subheader
    *   List item 1
    *   List item 2
    ```
3.  **Commit & Push:** As soon as you push to `main`, it will automatically be published.

## 🎨 How to Edit the Homepage

All homepage content is located in **`src/pages/index.astro`**.

### Editing Your Bio
Look for this section around line 22:
```html
<p class="text-xl text-slate-300 leading-relaxed mb-6">
    Ex-semiconductor engineer...
</p>
```
Simply change the text inside the `<p>` tags.

### Adding a "Featured Project"
I have made this easy for you. At the top of `src/pages/index.astro` (around line 7), you will see a list of projects. 

**To add a new one, just uncomment or copy-paste this block:**

```javascript
/* src/pages/index.astro */
const projects = [
    {
        title: "Residence Tracker",
        flag: "🇫🇷",
        description: "A tool to help...",
        link: "/residence-tracker/index.html",
        external: true
    },
    // COPY AND PASTE THIS BLOCK BELOW:
    {
        title: "New Cool Project",
        flag: "🚀",
        description: "A short description of what it does.",
        link: "https://google.com",
        external: true // Set to false if it's an internal page
    }
];
```

## 🇫🇷 Updating "Residence Tracker"
The residence tracker app lives in the **`public/residence-tracker/`** folder.
*   It is served exactly as is.
*   You can edit `index.html`, `app_offline.js`, etc., directly in that folder.
*   No build steps are required for this part—Astro just copies it to the final site.

## 💻 Running Locally (Optional)
If you want to preview changes before pushing:

1.  Open a terminal in the project folder.
2.  Run:
    ```bash
    npm run dev
    ```
3.  Open `http://localhost:4321` in your browser.
