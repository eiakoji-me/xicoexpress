# XicoExpress Website

**XicoExpress** is a national and international courier service platform designed to serve customers across Mexico and the USA, with features such as prepaid labels, packaging, product storage, and more. This repository contains the frontend for the marketing and service portal of XicoExpress.

---

## 📦 MVP Scope & Roadmap

This project follows a prioritized development plan aimed at releasing a feature-complete MVP, followed by progressive enhancements.

### ✅ Top Priority (In Progress)

* **Data-Driven Content Setup**

  * Set up `src/data/` for structured content management
  * Define reusable files like `servicios.ts`, `faq.ts`, `iniciativas.ts`, and `site-config.ts`
  * Create `types.ts` for strong typing
  * Refactor all components/pages to use structured data files

---

### 🔜 High Priority (Next Phase)

* **Netlify Forms Integration**

  * Support for `contacto`, `cotizador`, `bolsa de trabajo`
  * Add honeypot fields for spam prevention
  * Use Netlify notifications for submissions

* **Admin Tool (Separate Project)**

  * NestJS or similar lightweight backend
  * Features: content config, quote logs, submission viewer
  * Consider Netlify CMS or equivalent

---

### 🚰 Medium Priority (Post-MVP)

* **PWA Support**

  * Add `manifest.webmanifest`
  * Register service worker (via `next-pwa`)
  * Test “Add to Home Screen”

* **SEO & Metadata**

  * Use `generateMetadata()` for dynamic metadata
  * Add OpenGraph / Twitter tags
  * Generate `sitemap.xml` and `robots.txt`

* **Analytics**

  * Integrate Plausible or Vercel Analytics
  * Add scripts and track key events like form submissions

---

### 💡 Optional & Future Enhancements

* **LatAm Expansion Routing**

  * Setup for `/mx/`, `/pe/`, `/co/`, etc.
  * Abstract content by country

* **Advanced PWA / Offline**

  * Add offline support only for future agent apps

* **Headless CMS Integration**

  * Replace static data with a CMS backend (e.g., Sanity or Netlify CMS)
  * Plan API integration and content migration

---

## 📁 Project Structure (Example)

```
src/
├── app/                    # Pages and routing
│   ├── servicios/
│   ├── herramientas/
│   └── ...
├── components/             # Reusable UI elements
├── data/                   # Static content files (servicios.ts, faq.ts, etc.)
├── styles/                 # Tailwind / Global styles
└── types/                  # Shared TypeScript types
```

---

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-org/xicoexpress-site.git
   cd xicoexpress-site
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

---

## 🌐 Deployment

* Deploy via [Netlify](https://www.netlify.com/)
* Static build supported
* Use Netlify forms for submission handling

---

## 📬 Contact

For inquiries, issues, or suggestions, please reach out via the [contact page](https://yourdomain/contacto).

---
