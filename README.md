
# ClowdHost

A modern, responsive web hosting website template built with React, Vite, and Tailwind CSS.

ClowdHost features a clean design, dark hosting-inspired visuals, responsive layouts, reusable components, and multiple pages suitable for hosting providers and domain-related businesses.

## Features

- Responsive, mobile-first design
- Modern navigation with React Router
- Home page with animated hero section
- About page
- Domain search demonstration page
- Hosting plans and pricing page
- Blog listing page
- Individual blog article pages
- Contact page
- Reusable page banners and components
- Scroll-based reveal animations
- Lucide icons
- Newsletter form demonstration
- Easy-to-customize content and styling

## Built With

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/)

## Getting Started

### Requirements

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone or download the project.

Open the project folder in your terminal:

```bash
cd clowdhost
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the website.

## Production Build

To create an optimized production build, run:

```bash
npm run build
```

The production files will be generated in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
clowdhost/
├── public/
│   └── images/
│       ├── hero-bg.png
│       └── about-server.jpg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PageBanner.jsx
│   │   └── ScrollReveal.jsx
│   │
│   ├── data/
│   │   └── blogPosts.js
│   │
│   ├── sections/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Domain.jsx
│   │   ├── Hosting.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Pages

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Domain | `/domain` |
| Hosting | `/hosting` |
| Blog | `/blog` |
| Blog Article | `/blog/:slug` |
| Contact | `/contact` |

## Customization

### Website Content

Page content is located inside the `src/sections/` directory.

Edit the relevant page to customize headings, descriptions, pricing, buttons, and other content.

### Blog Articles

Blog articles are stored in:

```text
src/data/blogPosts.js
```

You can add, remove, or edit articles by modifying the `blogPosts` array.

Each article includes:

- Slug
- Category
- Publication date
- Reading time
- Title
- Description
- Icon
- Article content

The blog listing and individual article pages use this shared data file.

### Images

Website images are stored in:

```text
public/images/
```

Replace the existing images with your own while keeping the filenames, or update the image paths in the relevant components.

### Styling

Tailwind CSS classes are used throughout the project.

Global styles and animation definitions are located in:

```text
src/index.css
```

## Important Integration Notes

ClowdHost is a frontend website template (A startup project).  This website gets you started so that you don't start from scratch.  We recomend you edit, add or remove place holde content as needed.

Some features are visual demonstrations and require additional services or backend development before they can perform real operations.

Examples include:

- **Domain Search:** Connect a domain registrar API to check availability and retrieve live pricing.
- **Newsletter:** Connect an email marketing service to collect subscriptions.
- **Contact Form:** Connect a backend or form-processing service to receive messages.
- **Hosting Plans:** Connect your own billing and hosting infrastructure to sell hosting services.

These integrations are not included in the template.

## License

This template is intended for customization and commercial website projects, subject to the applicable license and purchase terms.

---

**ClowdHost**  
Modern Hosting Website Template

