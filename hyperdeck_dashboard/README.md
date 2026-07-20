# HyperDeck Dashboard Website

![HyperDeck Dashboard](assets/brand/github-readme-header.svg)

A static, responsive launch site for HyperDeck Dashboard. It is designed to run under MAMP during development and deploy later to almost any standard web host.

A static, responsive launch site designed to run under MAMP during development and deploy later to almost any standard web host.

## Run in MAMP on macOS

1. Copy the `hyperdeck-dashboard-site` folder into `/Applications/MAMP/htdocs/`.
2. Start MAMP and enable Apache.
3. Open `http://localhost:8888/hyperdeck-dashboard-site/`.
4. Your MAMP port may differ if you changed the defaults.

## Configure release and GitHub links

Edit the `siteConfig` object at the top of:

`assets/js/main.js`

Replace the placeholder repository URLs, version, release date, license, and status.

When the RC becomes final, change:

```js
status: 'Release Candidate'
```

to:

```js
status: 'Stable Release'
```

Then update the version, date, and download URL in the same object.

## Add real product screenshots

Place JPG or PNG screenshots in `assets/images/` using these names:

- `dashboard-main.jpg`
- `dashboard-overview.jpg`
- `feature-dashboard.jpg`
- `feature-transport.jpg`
- `feature-timecode.jpg`
- `feature-scheduler.jpg`
- `feature-media.jpg`
- `feature-clips.jpg`
- `feature-settings.jpg`

The placeholders are functional buttons. After screenshots are added, clicking them opens the image in a lightbox.

## Navigation

The sticky header links to anchored sections on the same page. Smooth scrolling, current-section highlighting, mobile navigation, FAQ accordions, and release links are included.

## Deploy to hosting

Upload the contents of this folder to the web root or a subdirectory on the final host. This marketing site is static and does not itself require PHP. The HyperDeck Dashboard application still requires its compatible PHP server environment.


## Official branding assets

Reusable product and release artwork is stored in `assets/brand/`:

- `hyperdeck-dashboard-icon.png` — official icon from the Dashboard application
- `hyperdeck-dashboard-logo-dark.svg` — dark-background wordmark
- `hyperdeck-dashboard-logo-light.svg` — light-background wordmark
- `github-readme-header.svg` — GitHub README header
- `social-share.png` — Open Graph/social sharing image
- `release-badge-rc.svg` — Release Candidate badge
- `release-badge-stable.svg` — Stable Release badge
- `download-hyperdeck.svg` — HyperDeck Dashboard download graphic
- `download-mamp.svg` — MAMP companion download graphic

The website favicon and app icons are stored in `assets/images/`.

## Product attribution

Use this exact public attribution throughout project materials:


HyperDeck Dashboard is licensed under GPL-3.0.

## Creator attribution placement

Public creator and studio attribution is intentionally limited to the lower development section and site footer. The header, hero, and download areas remain product-focused. The Three Crow Studios logo is stored at `assets/images/three-crow-studios-logo.png`.


## GitHub Sponsors and live project statistics

Set `sponsorUrl` in `assets/js/main.js` to the public GitHub Sponsors profile. Once `repositoryUrl` points to a public GitHub repository, the project-stat strip attempts to load stars, forks, open issues, and the latest release through GitHub’s public API. The site falls back gracefully when the API is unavailable.


## Launch-site features added

- Live GitHub stars, forks, issues, latest release tag, and release-asset download totals
- Header star counter
- Automatic release-version display through the public GitHub API
- RC1 highlights section
- Animated screenshot tour and existing lightbox viewer
- Copyable MAMP/host installation commands
- Expanded Open Graph, Twitter Card, canonical, theme, keyword, and JSON-LD metadata

The GitHub API is public and requires no token for ordinary low-volume website traffic. When rate-limited or offline, the site falls back gracefully and all download links continue to work.


## v8 branding update
The header now uses `assets/brand/hyperdeck-dashboard-app-logo.svg`, matching the application branding. The top download action is locked to a single line. Favicons and the social-sharing image use the same H identity.


## v10 visual refinements

- Reduced the top-bar release candidate/version badge size.
- Standardized all prominent MAMP download calls-to-action with the red download/external-link button treatment.


## Screenshot treatment

The supplied product screenshots are installed in `assets/images/` as optimized progressive JPEGs. They include a subtle edge-focused lens blur, dark gradient/vignette, and restrained red ambient glow. The center of each interface remains sharp and readable.

## v18 screenshot presentation

The product screenshots are presented without browser chrome. CSS uses left-biased crops, soft edge masks, ambient red depth, and responsive focal-point adjustments. The original full screenshots remain available through the lightbox interaction.

## v22 visual showcase
The hero, feature grid, and multi-deck presentation were rebuilt as a dynamic product showcase using the supplied application screenshots.

## v23 lightbox and multi-deck layout
The styled, cropped screenshot treatments remain on the page. Clicking any product image now opens the untouched PNG source in the lightbox. The multi-deck showcase was constrained to its own grid column so it no longer overlaps the left-hand copy.


## Website v34 addition
- Added `downloads.html` with separate Mac/Windows MAMP and Host/Development package choices.
- Main-site download actions now open the dedicated Downloads page.
- Direct package buttons target the current 1.39 RC1 GitHub release asset filenames.
