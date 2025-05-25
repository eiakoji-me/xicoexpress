# 🛰️ Netlify Deploy Guide for `xe-web-app` (PNPM Monorepo + Next.js)

This document outlines the working Netlify configuration for deploying the `xe-web-app` project within a PNPM-based monorepo using Next.js 15+ with the App Router.

---

## ✅ Working Build Settings (Netlify UI)

| Setting                 | Value                                   | Notes                                                                      |
| ----------------------- | --------------------------------------- | -------------------------------------------------------------------------- |
| **Base directory**      | `/`                                     | Monorepo root                                                              |
| **Package directory**   | `xe-web-app`                            | Directory containing the Next.js app                                       |
| **Build command**       | `pnpm --filter xe-web-app... run build` | Scopes install/build to only the app and its dependencies                  |
| **Publish directory**   | `xe-web-app/.next`                      | Required to make the Next.js runtime plugin behave correctly in this setup |
| **Functions directory** | `netlify/functions` *(default)*         | Leaving this as-is does not interfere with plugin functionality            |

---

## ⚠️ Notes on Plugin Compatibility

While the official `@netlify/plugin-nextjs` recommends **not** setting a `publish` directory when using App Router, **this caused broken function runtime behavior in our monorepo setup**.

> Specifically, the runtime attempted to invoke `next.cjs` and failed with:
> `Cannot find module 'next/dist/server/lib/start-server.js'`

This was resolved **only** when setting the publish directory to `xe-web-app/.next` explicitly.

---

## 🛠️ Root `package.json`

Ensure you have the following workspace and script setup:

```json
{
  "name": "xixoexpress-monorepo",
  "private": true,
  "workspaces": [
    "xe-*",
    "shared/*"
  ],
  "scripts": {
    "build": "pnpm --filter xe-web-app... run build"
  }
}
```

---

## 🛠️ `xe-web-app/package.json`

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "15.3.2",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
```

> ✅ `next` must be a direct dependency of `xe-web-app` (not hoisted)

---

## 🧹 Additional Tips

* Use `pnpm install --filter xe-web-app...` in CI/CD for fast and clean installs
* Avoid `nohoist` — it's not supported in PNPM (only in Yarn Classic)
* Clean `node_modules` and `pnpm-lock.yaml` if Turbopack or runtime issues arise
* Turbopack is experimental — fall back to `next dev` (webpack) when needed

---

## ✅ Status

As of this setup:

* ✅ SSR and App Router routes work
* ✅ Netlify Functions are correctly generated and deployed
* ✅ Turbopack and runtime errors have been resolved

---

For troubleshooting or re-verification, refer to:
➡️ [GitHub Discussions – Next.js Runtime Error](https://github.com/vercel/next.js/discussions/55987)
➡️ [Legacy nextjs on spotify](https://docs.netlify.com/frameworks/next-js/runtime-v4/overview/?_gl=1%2agsf481%2a_gcl_au%2aMTk0OTEwMzYyOS4xNzQ3NzEwMTk2LjYwNDY5MDYzNy4xNzQ4MTU2Nzk5LjE3NDgxNTY5Nzk.#pnpm-support)