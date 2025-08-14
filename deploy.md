# Deployment Guide

## Netlify Deployment Steps

### 1. Manual Deployment (Quick Fix)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site will be live!

### 2. Git-based Deployment (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Netlify will automatically build and deploy

## Troubleshooting MIME Type Error

If you see this error:
```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream"
```

### Solutions:

1. **Clear browser cache** and hard refresh (Ctrl+F5)

2. **Check Netlify settings:**
   - Go to Site Settings → Build & Deploy → Post Processing
   - Make sure "Asset Optimization" is enabled

3. **Verify deployment:**
   - Check that `_headers` and `_redirects` files are in your deployed site
   - Visit your site and check browser dev tools → Network tab
   - Look for `.js` files and verify they have `Content-Type: application/javascript`

4. **Alternative deployment:**
   - Try deploying to Vercel instead: [vercel.com](https://vercel.com)
   - Vercel handles MIME types automatically

## Files Included in Build

- ✅ `dist/index.html` - Main HTML file
- ✅ `dist/assets/` - JavaScript and CSS files
- ✅ `dist/_redirects` - SPA routing
- ✅ `dist/_headers` - MIME type headers

## Testing Locally

Before deploying, test the build locally:
```bash
npm run build
npm run preview
```

This will serve your built files locally at `http://localhost:4173`
