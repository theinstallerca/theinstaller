# theinstaller.ca

Static site for Theinstaller (commercial glazing and door installation, Winnipeg). Built with Astro.
Sister site of thewindows.ca (residential PVC windows) and built the same way.

- `src/site.ts` – all the text, phone, email and service list
- `src/` – pages, layout, styles
- `public/` – static files copied as-is (`api/contact.php` form handler, fonts)
- `dist/` – built output, committed so the server needs no Node

Edit, then `npm install` (first time) and `npm run build`, commit and push.

Deploy: cPanel → Git Version Control → *Update from Remote* → *Deploy HEAD Commit*.
`.cpanel.yml` copies `dist/` into the theinstaller.ca document root (`public_html`).

Project photos: each photo is two files in `public/images/projects/` — `name.jpg` (large, max 1600 px) and `name-t.jpg` (800x600 tile). They are listed with their categories in `src/site.ts` (`projects`).
