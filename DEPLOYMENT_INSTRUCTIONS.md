# GitHub Pages Deployment Instructions

## Prerequisites
1. Make sure you have a GitHub account
2. Create a new repository named `Milan-rawat.github.io` (this must exactly match your GitHub username)
3. Create a Personal Access Token with repo permissions:
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name like "GitHub Pages Deploy"
   - Set expiration as needed
   - Select the "repo" scope (full control of repositories)
   - Click "Generate token"
   - Copy the generated token (you won't see it again)
4. Add the token to your repository secrets:
   - Go to your repository Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name it `PERSONAL_TOKEN` and paste your token
   - Click "Add secret"

## Automatic Deployment with GitHub Actions

Your portfolio is configured with a GitHub Actions workflow that will automatically build and deploy your site whenever you push changes to the `master` branch. The workflow will:
1. Install Node.js and dependencies
2. Build your React application
3. Deploy the built files to the `gh-pages` branch using `gh-pages`

## Manual Deployment

If you need to deploy manually:

```bash
# Install gh-pages globally (if not already installed)
npm install -g gh-pages

# Build the application
npm run build

# Deploy to GitHub Pages
gh-pages -d build -b gh-pages
```

## Setup Git Repository
```bash
cd Milan-rawat.github.io
git init
git add .
git commit -m "Initial commit"
```

## Connect to GitHub
```bash
git branch -M main
git remote add origin https://github.com/Milan-rawat/Milan-rawat.github.io.git
```

## Deployment Process

GitHub Actions will automatically handle the deployment process:
1. Build your React application using `react-scripts build`
2. Deploy the built files from the `build/` directory to GitHub Pages
3. Publish your site at https://Milan-rawat.github.io

No manual intervention is needed after the initial setup.

## Manual Build and Deployment

If you want to manually build and test your site locally:

1. Build your app:
   ```bash
   npm run build
   ```

2. Serve your app locally:
   ```bash
   npx serve -s build
   ```

Note: The `build` folder is automatically generated and should not be committed to your repository. It is included in the `.gitignore` file.

## Troubleshooting

### Common Issues and Solutions

1. **Deployment fails with permission errors**
   - Ensure you've created and added the `PERSONAL_TOKEN` secret to your repository
   - The token must have `repo` scope
   - Double-check the token name in your workflow matches exactly with the secret name

2. **GitHub Pages shows README instead of the app**
   - Make sure GitHub Pages is configured to use the `gh-pages` branch
   - Check that the build output is in the `build` directory (default for Create React App)
   - Verify the workflow is running successfully in the Actions tab

3. **Workflow fails during build**
   - Check the build output in the Actions tab for specific error messages
   - Make sure all dependencies are properly listed in `package.json`
   - Try running `npm install && npm run build` locally to catch any build issues

4. **Changes not appearing on the live site**
   - Wait a few minutes for GitHub Pages to update (can take up to 10 minutes)
   - Clear your browser cache or try in incognito mode
   - Check if the `gh-pages` branch was updated in your repository

5. **Routing issues (404 errors on refresh)**
   - Ensure you have the `404.html` file in your `public` directory
   - The file should contain the SPA redirection script
   - Make sure your React Router is using the `basename` property if needed

## Notes
- Your site will be automatically available at https://Milan-rawat.github.io after the first deployment
- Subsequent deployments will update your live site automatically
- GitHub Pages only supports static files, so no server-side code will run
