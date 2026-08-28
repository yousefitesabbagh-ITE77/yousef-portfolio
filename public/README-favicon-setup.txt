Favicon setup for your React/Vite portfolio

1) Copy these files into your project's public folder:
   - favicon.ico
   - favicon.svg
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png
   - site.webmanifest

2) In index.html, inside <head>, add or replace favicon lines with:

<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />

3) Run:
   npm run build
   npm run lint

4) Commit and push:
   git add .
   git commit -m "Add custom portfolio favicon"
   git push
