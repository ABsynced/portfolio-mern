# Portfolio — MERN + Tailwind

A modern, dark-themed portfolio site with a glassmorphism design, built on the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

## Structure

```
portfolio-mern/
├── client/   React + Vite + Tailwind CSS frontend
└── server/   Express + MongoDB backend API
```

## Quick start

### 1. Backend (server/)

```bash
cd server
npm install
cp .env.example .env
```

Edit `.env` and set `MONGO_URI` to a MongoDB connection string (free tier at
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) works fine).

Seed placeholder projects into the database, then start the API:

```bash
npm run seed   # populates the projects collection with sample data
npm run dev    # starts the API on http://localhost:5000
```

API routes:
- `GET /api/projects` — list projects
- `POST /api/projects` — add a project
- `PUT /api/projects/:id` — update a project
- `DELETE /api/projects/:id` — remove a project
- `POST /api/contact` — receive a contact form submission
- `GET /api/contact` — list received messages

### 2. Frontend (client/)

```bash
cd client
npm install
cp .env.example .env
```

Edit `.env` and set `VITE_API_URL` to your backend URL (e.g. `http://localhost:5000/api`).
If left unset, the site falls back to placeholder project data automatically —
so it looks complete even before the backend is wired up.

```bash
npm run dev      # starts the dev server on http://localhost:5173
npm run build    # builds for production into client/dist
```

## Making it yours

1. `client/src/data/profile.js` — your name, role, bio, skills, social links.
2. `client/src/data/projects.js` — placeholder projects (shown if the API isn't reachable).
3. `server/seed.js` — the real project data to load into MongoDB via `npm run seed`.
4. Replace the favicon at `client/public/favicon.svg` and add project screenshots
   (set the `image` field on a project to a URL or path under `client/public`).

## Deployment

- **Frontend**: deploy `client/` to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) (set `VITE_API_URL` as an environment variable there).
- **Backend**: deploy `server/` to [Render](https://render.com) or [Railway](https://railway.app) (set `MONGO_URI`, `PORT`, `CLIENT_URL` as environment variables).
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier.

## Design

Dark background with animated gradient blobs, glassmorphism cards (frosted blur + subtle border),
gradient accent text, and scroll-triggered fade/slide animations via Framer Motion.
Colors and fonts are centralized in `client/src/index.css` — tweak the gradient stops
(`from-fuchsia-500 to-cyan-500`) or swap the Google Fonts link in `index.html` to restyle everything at once.
