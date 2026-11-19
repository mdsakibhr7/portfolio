# Sakib Hossain — Portfolio (React + Tailwind)

Modern, responsive portfolio built with **React 18, Vite, Tailwind CSS, Framer Motion and Lucide icons**.

## 1. Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

To produce the production build:

```bash
npm run build
npm run preview
```

## 2. Edit your content

Almost everything is in **`src/data.js`**: name, title, intro, services, skills, live projects, GitHub repos and experience. Change the text there and the whole site updates.

Anything you do not have yet should stay as a `[placeholder]`, for example `[Company name]`. Replace these with real details before you share the site with a client.

## 3. Change the look

- **Colors:** `tailwind.config.js` (`ink`, `paper`, `accent`, `glow`, `lime`).
- **Fonts:** Google Fonts link in `index.html`, font families in `tailwind.config.js`.
- **Section layouts:** each section is a file in `src/sections/`.

## 4. Add real project screenshots

1. Save screenshots in `public/projects/`, for example `public/projects/world-camps.webp`.
2. In `src/sections/Projects.jsx`, replace the `ProjectFrame` mock with an image:
   ```jsx
   <img src="/projects/world-camps.webp" alt="World Camps homepage" loading="lazy" className="h-56 w-full object-cover object-top" />
   ```
3. Use WebP or JPG at around 1600px wide to keep the page fast.

## 5. Add a profile photo

Put `profile.jpg` in `public/` and add an `<img>` to the hero in `src/sections/Hero.jsx`.

## 6. Deploy on GitHub Pages (automatic)

1. Create a repository on GitHub, for example `portfolio`, and push this project to the `main` branch.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` now builds and publishes the site through `.github/workflows/deploy.yml`.
4. Your site is live at `https://<your-username>.github.io/<repo-name>/`.

If you use a different repository name, the build path is set automatically by the workflow. For local builds, set the path yourself, for example:

```bash
BASE_PATH=/portfolio/ npm run build
```

For a user site (`<username>.github.io`) or a custom domain, set `BASE_PATH=/` in the workflow.

## 7. Share with clients

Send the live link. You can also add a short note to your proposal or WhatsApp message, such as "Here's my portfolio: <link>". Keep the `Contact` section updated so clients can reach you easily.

## Notes

- The contact form opens the visitor's email app with the message filled in. To receive messages directly on a server, connect a form service such as Formspree or Netlify Forms and point `handleSubmit` in `src/sections/Contact.jsx` to it.
- Motion respects the visitor's reduced-motion setting.
- Only verified information is included. Do not add client names, testimonials or statistics you cannot back up.
