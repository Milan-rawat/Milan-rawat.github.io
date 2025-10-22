# Milan Rawat - Modern Portfolio

This is a modern, responsive portfolio website built with React for Milan Rawat, a full stack web developer.

## Features

- Responsive design that works on all devices
- Smooth animations with Framer Motion
- Modern UI with clean aesthetics
- Single Page Application (SPA) with React Router
- Easy to customize and extend

## Sections

1. **Home** - Introduction and overview
2. **About** - Personal information and services
3. **Experience** - Education, work experience, and training
4. **Skills** - Technical skills with progress indicators
5. **Projects** - Portfolio projects with descriptions
6. **Contact** - Contact information and message form

## Technologies Used

- React.js
- React Router
- Framer Motion (for animations)
- React Icons
- CSS3

## How to Run

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Build for production:
   ```
   npm run build
   ```

## Deployment to GitHub Pages

This portfolio is configured to automatically build and deploy to GitHub Pages using GitHub Actions whenever you push changes to the `main` branch.

1. Create a new repository on GitHub named `Milan-rawat.github.io`

2. Initialize git and push to your remote repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Milan-rawat/Milan-rawat.github.io.git
   git push -u origin main
   ```

3. That's it! GitHub Actions will automatically:
   - Build your React application
   - Deploy the built files to GitHub Pages
   - Publish your site at `https://Milan-rawat.github.io`

## Troubleshooting

If you encounter deployment errors:

1. Make sure you have granted workflows read and write permissions:
   - Go to your repository Settings
   - Click on "Actions" in the left sidebar
   - Under "General" settings, select "Read and write permissions"
   - Click "Save"

2. Ensure your repository name is exactly `Milan-rawat.github.io`

## Customization

To customize this portfolio for your own use:

1. Update the content in the `src/pages` components
2. Replace images in the `public/images` directory
3. Modify styles in the `src/styles` CSS files
4. Update contact information in `src/pages/Contact.js`
5. Change social media links in `src/components/Header.js`

## Project Structure

```
modern-portfolio/
├── public/
│   ├── images/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Experience.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   └── Contact.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```
