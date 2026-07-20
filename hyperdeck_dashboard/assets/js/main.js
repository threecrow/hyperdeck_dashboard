const siteConfig = {
  status: 'Release Candidate',
  releaseDate: '2026',
  license: 'GPL-3.0',
  downloadUrl: 'downloads.html',
  mampPackageUrl: 'https://github.com/Three-Crow-Studios/hyperdeck-dashboard/releases/download/v1.39-RC1/HyperDeck-Dashboard-1.39-RC1-Mac-Win-MAMP.zip',
  hostPackageUrl: 'https://github.com/Three-Crow-Studios/hyperdeck-dashboard/releases/download/v1.39-RC1/HyperDeck-Dashboard-1.39-RC1-Host-Development.zip',
  repositoryUrl: 'https://github.com/Three-Crow-Studios/hyperdeck-dashboard',
  releasesUrl: 'https://github.com/Three-Crow-Studios/hyperdeck-dashboard/releases',
  issuesUrl: 'https://github.com/Three-Crow-Studios/hyperdeck-dashboard/issues',
  sponsorUrl: 'https://github.com/sponsors/Three-Crow-Studios',
  mampUrl: 'https://www.mamp.info/en/downloads/',
  studioUrl: 'http://www.threecrow.com/studios',
  creatorUrl: 'http://www.threecrow.com/robhammer',
  linkedinUrl: 'https://www.linkedin.com/in/rob-hammer-37b52212/'
};

document.querySelectorAll('[data-release-status]').forEach(el => el.textContent = siteConfig.status);
document.querySelectorAll('[data-release-date]').forEach(el => el.textContent = siteConfig.releaseDate);
document.querySelectorAll('[data-release-license]').forEach(el => el.textContent = siteConfig.license);
document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());

document.querySelectorAll('.js-download').forEach(el => { el.href = siteConfig.downloadUrl; });
document.querySelectorAll('.js-download-mamp-package').forEach(el => { el.href = siteConfig.mampPackageUrl; });
document.querySelectorAll('.js-download-host-package').forEach(el => { el.href = siteConfig.hostPackageUrl; });
document.querySelectorAll('.js-repository').forEach(el => { el.href = siteConfig.repositoryUrl; el.target = '_blank'; el.rel = 'noopener'; });
document.querySelectorAll('.js-releases').forEach(el => { el.href = siteConfig.releasesUrl; el.target = '_blank'; el.rel = 'noopener'; });
document.querySelectorAll('.js-issues').forEach(el => { el.href = siteConfig.issuesUrl; el.target = '_blank'; el.rel = 'noopener'; });
document.querySelectorAll('.js-sponsor').forEach(el => { el.href = siteConfig.sponsorUrl; el.target = '_blank'; el.rel = 'noopener'; });
document.querySelectorAll('.js-mamp').forEach(el => { el.href = siteConfig.mampUrl; el.target = '_blank'; el.rel = 'noopener'; });


// Standardize product download buttons while leaving the compact top-bar action unchanged.
const githubMark = `
  <svg class="cta-icon cta-icon-github" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 .7a11.3 11.3 0 0 0-3.57 22.03c.57.1.78-.25.78-.55v-2.16c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.11 1.17A10.8 10.8 0 0 1 12 5.95c.96 0 1.92.13 2.82.38 2.16-1.48 3.11-1.17 3.11-1.17.63 1.58.24 2.74.12 3.03.73.8 1.17 1.82 1.17 3.07 0 4.39-2.67 5.36-5.22 5.65.41.35.78 1.05.78 2.12v3.15c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z"/>
  </svg>`;
const downloadMark = `
  <svg class="cta-icon cta-icon-download" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 18v2h14v-2"/>
  </svg>`;

document.querySelectorAll('a.button.js-download:not(.button-small)').forEach(button => {
  button.classList.add('product-download-button');
  button.setAttribute('aria-label', 'Download HyperDeck Dashboard from GitHub');
  button.innerHTML = `${githubMark}<span>Download HyperDeck Dashboard</span>${downloadMark}`;
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (menuButton && nav) menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
if (nav) nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.removeAttribute('aria-current'));
    const current = navLinks.find(link => link.getAttribute('href') === `#${entry.target.id}`);
    if (current) current.setAttribute('aria-current', 'true');
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('p');
document.querySelectorAll('.lightbox-trigger').forEach(button => {
  button.addEventListener('click', () => {
    const source = button.dataset.image;
    const frame = button.closest('[data-lightbox-title]');
    lightboxImg.src = source;
    lightboxImg.alt = frame?.dataset.lightboxTitle || button.querySelector('strong')?.textContent || 'HyperDeck Dashboard screenshot';
    lightboxCaption.textContent = button.querySelector('strong')?.textContent || '';
    lightbox.showModal();
  });
});
if (lightbox) lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
if (lightbox) lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
if (lightboxImg) lightboxImg.addEventListener('error', () => {
  lightboxCaption.textContent = 'Screenshot asset has not been added yet. Replace the matching file in assets/images.';
  lightboxImg.removeAttribute('src');
});



// Installation command tabs and copy controls.
const codeTabs = document.querySelectorAll('[data-code-tab]');
const codePanels = document.querySelectorAll('[data-code-panel]');
codeTabs.forEach(tab => tab.addEventListener('click', () => {
  codeTabs.forEach(item => item.setAttribute('aria-selected', String(item === tab)));
  codePanels.forEach(panel => panel.classList.toggle('is-active', panel.dataset.codePanel === tab.dataset.codeTab));
}));
document.querySelectorAll('.copy-code').forEach(button => button.addEventListener('click', async () => {
  const code = button.closest('.code-panel').querySelector('code').textContent;
  try {
    await navigator.clipboard.writeText(code);
    button.textContent = 'Copied';
    setTimeout(() => { button.textContent = 'Copy'; }, 1600);
  } catch (_) {
    button.textContent = 'Select text';
  }
}));

// Gently rotate the active screenshot-gallery panel; clicking pauses on that selection.
const galleryItems = [...document.querySelectorAll('.gallery-item')];
const galleryProgress = document.querySelector('.gallery-progress span');
let galleryIndex = 0;
let galleryTimer;
function activateGallery(index) {
  galleryIndex = index;
  galleryItems.forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === index));
  if (galleryProgress) {
    galleryProgress.style.animation = 'none';
    requestAnimationFrame(() => { galleryProgress.style.animation = 'galleryProgress 5s linear forwards'; });
  }
}
function startGallery() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || galleryItems.length < 2) return;
  clearInterval(galleryTimer);
  galleryTimer = setInterval(() => activateGallery((galleryIndex + 1) % galleryItems.length), 5000);
}
galleryItems.forEach((item, index) => item.addEventListener('click', () => { activateGallery(index); startGallery(); }));
activateGallery(0);
startGallery();
