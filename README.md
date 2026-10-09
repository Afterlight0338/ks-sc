# KrunchieSnack Website

> i have no affiliation with this website, i as a programmer is just helping a friend built this for their uni project

A dedicated web presence for **KrunchieSnack**, an artisanal small-batch kettle crisp snack company.

## Design Philosophy & Constraints

Crafted in strict adherence to our **Web Design Constitution**:
- **Designed, Not Generated**: Avoided all generic AI templates (no purple-blue neon gradients, no glassmorphism, no floating glowing blobs, no identical 3-card SaaS layouts).
- **Intentional Typography**: Pairing editorial warm serif (`Fraunces`) with clean, readable sans (`Plus Jakarta Sans`).
- **Restrained Geometry**: Flat surfaces, subtle 2px–6px radius, thin borders, intentional whitespace.
- **Content-Driven Hierarchy**:
  - Clear dual flavor focus: **Smoky BBQ** & **Aged Cheddar**
  - Authentic kettle craft & small-batch methodology
  - Direct comparison table highlighting clean ingredients (zero artificial fluff)
  - Pack selector & straightforward order inquiry form
  - Direct contact channel (`+1 (555) 234-5678`) & official socials (`@krunchiesnack`)

## Project Files

- `index.html`: Semantic, accessible HTML5 structure
- `style.css`: Clean, tokenized CSS3 system
- `app.js`: Lightweight, zero-dependency interaction handling

## Local Preview

Open `index.html` directly in any web browser, or serve locally:
```bash
python -m http.server 8000 --directory /home/afterlight/krunchiesnack
```

## Deploying changes

The site is served with a 4-hour browser cache. When `style.css`, `app.js` or `i18n.js` changes, bump its `?v=` number in `index.html`, or returning visitors get the new HTML with the old CSS/JS.
