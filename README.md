# jaccknew.me

This is the source code for my personal blog and portfolio website, [jaccknew.me](https://jaccknew.me).

## Project Structure

The project is a [Next.js](https://nextjs.org/) application. Here is a breakdown of the file structure:

```
/
├── .gitignore
├── LICENSE
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── tsconfig.json
├── app/
│   ├── global.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── utils.ts
│   │   ├── [slug]/
│   │   │   ├── comments.tsx
│   │   │   └── page.tsx
│   │   └── posts/
│   │       ├── first-blog.mdx
│   │       └── overcoming-anxiety.mdx
│   ├── components/
│   │   ├── footer.tsx
│   │   ├── mdx.tsx
│   │   ├── nav.tsx
│   │   └── posts.tsx
│   ├── guestbook/
│   │   └── page.tsx
│   ├── notes/
│   │   └── page.tsx
│   ├── og/
│   │   └── route.tsx
│   ├── projects/
│   │   └── page.tsx
│   └── rss/
│       └── route.ts
└── public/
    ├── apple-touch-icon.png
    ├── favicon.ico
    ├── favicon.png
    ├── icon-192x192.png
    ├── icon-512x512.png
    └── manifest.json
```

### Root Directory

*   `.gitignore`: Specifies which files and folders should be ignored by Git.
*   `LICENSE`: The license for this project.
*   `next.config.js`: Configuration file for Next.js.
*   `package.json`: Lists the project's dependencies and scripts.
*   `pnpm-lock.yaml`:  Dependency lock file for pnpm.
*   `postcss.config.js`: Configuration file for PostCSS, used for CSS processing.
*   `README.md`: This file.
*   `tsconfig.json`: Configuration file for TypeScript.

### `app/` Directory

This directory contains the core application code.

*   `global.css`: Global CSS styles for the application.
*   `layout.tsx`: The main layout component for the application.
*   `not-found.tsx`: The page that is displayed when a route is not found.
*   `page.tsx`: The main page of the application (the home page).
*   `robots.ts`:  Generates the `robots.txt` file for search engine crawlers.
*   `sitemap.ts`: Generates the `sitemap.xml` file for search engines.

#### `app/blog/`

*   `page.tsx`: The main page for the blog, which lists all blog posts.
*   `utils.ts`: Utility functions for the blog.
*   `[slug]/page.tsx`:  The template for individual blog posts. The `[slug]` part of the directory name indicates that this is a dynamic route.
*   `[slug]/comments.tsx`:  A component for displaying comments on a blog post.
*   `posts/`:  This directory contains the actual blog posts, written in MDX format.

#### `app/components/`

This directory contains reusable React components.

*   `footer.tsx`: The footer component for the application.
*   `mdx.tsx`:  A component for rendering MDX content.
*   `nav.tsx`: The navigation bar component.
*   `posts.tsx`: A component for displaying a list of blog posts.

#### Other `app/` Directories

*   `guestbook/page.tsx`: The page for the guestbook.
*   `notes/page.tsx`: The page for notes.
*   `og/route.tsx`:  Generates Open Graph images for social media sharing.
*   `projects/page.tsx`: The page for projects.
*   `rss/route.ts`: Generates the RSS feed for the blog.

### `public/` Directory

This directory contains static assets that are publicly accessible.

*   `apple-touch-icon.png`, `favicon.ico`, `favicon.png`, `icon-192x192.png`, `icon-512x512.png`:  Icons for the website.
*   `manifest.json`: The web app manifest, which provides information about the application.
*   `images/`: A directory for images.