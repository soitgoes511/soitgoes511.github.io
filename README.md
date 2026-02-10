# Mike Hinkle's Personal Site & Blog

This is the source code for [soitgoes511.github.io](https://soitgoes511.github.io), a modern personal website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Getting Started

To run this project locally, you'll need [Node.js](https://nodejs.org) installed (v18+ recommended).

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/soitgoes511/soitgoes511.github.io.git
    cd soitgoes511.github.io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:4321`.

## 📝 How to Add New Blog Posts

Adding a new post is as simple as creating a Markdown file.

1.  Create a new file in `src/content/blog/`.
2.  Name it anything you like, e.g., `my-new-post.md` or keep the date prefix `2026-02-10-new-post.md`.
3.  Add the required frontmatter at the top:
    ```markdown
    ---
    title: "My Awesome New Post"
    date: 2026-02-10
    categories: tech personal
    ---
    
    Start writing your content here...
    ```
4.  The post will automatically appear on the blog index and recent posts section.

## 🇫🇷 Residence Tracker

The legacy `residence-tracker` application has been preserved and is served as a static asset.
-   **URL:** `/residence-tracker/index.html`
-   **Source Location:** `public/residence-tracker/`

To update it, simply modify the files in `public/residence-tracker/`. No build step is required for this part, as Astro copies it directly to the output.

## 📦 Deployment

This site is configured to deploy automatically to **GitHub Pages** using GitHub Actions.

1.  Go to your repository **Settings** > **Pages**.
2.  Under **Build and deployment**, select **GitHub Actions** as the source.
3.  Push your changes to the `main` branch.
4.  The `.github/workflows/deploy.yml` workflow will automatically build and deploy the site.

## 🛠 Tech Stack

-   **Framework:** Astro 5
-   **Styling:** Tailwind CSS v4
-   **Content:** Markdown / MDX
-   **Deployment:** GitHub Pages

---
*Note: A backup of your old Jekyll site is available in `legacy-backup.zip`.*
