# Narendra Sahu Portfolio Website

Deploy-ready React + Vite portfolio website.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
```

Upload the generated `dist` folder to your server, Netlify, Vercel, or hosting provider.

## Add your custom showreel video

Option 1: Add your MP4 video file here:

```txt
public/video/showreel.mp4
```

Option 2: Use an external video link. Open `src/data.js` and replace:

```js
showreelVideo: '/video/showreel.mp4'
```

with your custom link, for example:

```js
showreelVideo: 'https://yourdomain.com/video/showreel.mp4'
```

or a YouTube/Vimeo link.

## Update profile details

Edit `src/data.js` to update email, phone, GitHub, LinkedIn, resume path and project details.
