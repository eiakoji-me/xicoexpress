## PRIORITIZED TODOs for XicoExpress

---

### Top Priority (Now)

1. Content via Data Files

   * Set up `/src/data/` directory
   * Define `servicios.ts`, `iniciativas.ts`, `faq.ts`, `site-config.ts`
   * Define `types.ts` for strict typing
   * Refactor page components to consume data from these files

---

### High Priority (Next Phase)

2. Netlify Forms Integration

   * Implement forms for:

     * `contacto`
     * `cotizador`
     * `bolsa de trabajo`
   * Add honeypot anti-spam field
   * Ensure form handling + notifications via Netlify

3. Admin Tool as Separate Project

   * Plan repo and routing for lightweight backend (NestJS or similar)
   * Define features: content config, quote log, submissions viewer
   * Plan Netlify CMS or alternative for content integration

---

### Medium Priority (Post MVP)

4. PWA Enhancements

   * Add `manifest.webmanifest`
   * Register service worker (with `next-pwa` or manual)
   * Test “Add to Home Screen” support

5. SEO & Metadata Strategy

   * Implement `generateMetadata()` in key pages
   * Add OpenGraph / Twitter metadata per page
   * Create `sitemap.xml` and `robots.txt`

6. Analytics Setup

   * Choose tool (Plausible or Vercel Analytics)
   * Add tracking script
   * Set up basic event goals (e.g., form submission)

---

### Optional / Future Enhancements

7. Dynamic Routing for LatAm Expansion

   * Plan for `/mx/`, `/pe/`, `/co/` routing structure if franchised
   * Abstract content by country if needed

8. Offline/Sync Features (Advanced PWA)

   * Only if future apps need this (e.g., field agents)

9. Move to Headless CMS (long term)

   * Replace `/src/data` with live CMS source (e.g., Netlify CMS or Sanity)
   * Plan for content migration and API integration