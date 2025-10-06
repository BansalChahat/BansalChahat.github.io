# Chahat Bansal's PhD Research Portfolio

This is a static website for showcasing Chahat Bansal's PhD research portfolio, hosted on GitHub Pages.

## Setup Instructions
1. **Create Repository**:
   - Name: `chahatbansal.github.io` (replace with your GitHub username).
   - Set to public.
2. **Clone Repository**:
   ```bash
   git clone https://github.com/chahatbansal/chahatbansal.github.io.git
   ```
3. **Add Files**:
   - Copy `index.html`, `assets/css/style.css`, `assets/js/script.js`, and `assets/images/placeholder.png`.
   - Replace `placeholder.png` with actual project images (e.g., LULC maps).
4. **Test Locally**:
   ```bash
   python -m http.server
   ```
   - Open `http://localhost:8000` in a browser.
5. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```
6. **Enable GitHub Pages**:
   - Go to **Settings** > **Pages** in the repository.
   - Set source to `main` branch, `/ (root)` folder.
   - Access at `https://chahatbansal.github.io`.

## Updating Content
- Edit `index.html` to update projects, publications, or images.
- Add new images to `assets/images/` and update paths in `index.html`.

## Dependencies
- Tailwind CSS: CDN
- Font Awesome: CDN
- Google Fonts: Merriweather