# NXG Tennis Academy Website

A fast, static website for NXG Tennis Academy (Anna & Melissa, TX). Plain HTML, CSS and JavaScript, with no build step, so it can be hosted anywhere, including **GitHub Pages**.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home, with the live class schedule |
| `about.html` | About, pathway, founders, locations |
| `schedule.html` | Group class booking + private lesson booking (tabs) |
| `camps.html` | Seasonal camps with registration links |
| `free-trial.html` | How the free trial works + FAQ |
| `trial-form.html` | Free trial questionnaire (multi-step form) |

## Structure

```
assets/
  styles.css      Shared styles (colors, header, footer, buttons)
  site.js         Shared header, footer, mobile menu, animations
  camps-data.js   Camp dates, prices and registration links
embeds/
  schedule.html   Momence class schedule widget (loaded in an iframe)
```

## Editing common things

- **Camps:** edit `assets/camps-data.js`. Past camps hide automatically, and the next one is labelled "Next up".
- **Contact info / nav links:** edit the `CONTACT` and `NAV` lists at the top of `assets/site.js`.
- **Bookings:** handled by Momence (host `222361`). Classes use the Momence schedule plugin; private lessons use appointment board `160658`.

## Questionnaire delivery

`trial-form.html` sends answers to `enrollment@nxg.tennis` via [FormSubmit](https://formsubmit.co) (free, no account needed).

1. After the site is live, submit the form once.
2. FormSubmit emails an **Activate Form** link to the enrollment inbox; click it.
3. Optional: paste the alias FormSubmit sends into `FORMSUBMIT_ID` (top of the script in `trial-form.html`) to hide the address.

To use Formspree or another service instead, set `FORM_ENDPOINT`. If sending fails, visitors can fall back to a pre-filled email.

## Run locally

Open `index.html` in a browser, or serve the folder (recommended, so the embeds behave like production):

```bash
python -m http.server 5173
```

Then visit http://localhost:5173.

## Publish with GitHub Pages

1. Create a new repository on GitHub and upload these files (or `git push` them).
2. In the repository, go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

To use a custom domain (like `nxg.tennis`), add it under **Settings → Pages → Custom domain** and update your DNS.
