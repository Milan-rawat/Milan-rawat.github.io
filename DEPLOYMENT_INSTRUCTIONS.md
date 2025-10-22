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

## Automatic Deployment with GitHub Actions

Your portfolio is configured with a GitHub Actions workflow that will automatically build and deploy your site whenever you push changes to the `main` branch. This is the recommended approach as it requires no local setup beyond git.

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
If you encounter Git errors (like exit code 128):
- Make sure your repository name is exactly `Milan-rawat.github.io`
- Ensure you're pushing to the `master` branch
- Check that GitHub Pages is enabled in your repository settings
- Verify that your workflow file is in `.github/workflows/deploy.yml`
- Make sure you have granted workflows read and write permissions:
  1. Go to your repository Settings
  2. Click on "Actions" in the left sidebar
  3. Under "General" settings, select "Read and write permissions"
  4. Click "Save"
- If using a personal access token, ensure it's properly configured in your repository secrets:
  1. Go to your repository Settings
  2. Click on "Secrets and variables" → "Actions"
  3. Click "New repository secret"
  4. Name it `PERSONAL_TOKEN` and paste your personal access token
  5. Click "Add secret"
- Make sure you have the correct permissions for GitHub Actions in your repository settings
- Configure GitHub Pages to use the gh-pages branch:
  1. Go to your repository Settings
  2. Click on "Pages" in the left sidebar
  3. Under "Source", select "Deploy from a branch"
  4. Select "gh-pages" branch and "/ (root)" folder
  5. Click "Save"

## Notes
- Your site will be automatically available at https://Milan-rawat.github.io after the first deployment
- Subsequent deployments will update your live site automatically
- GitHub Pages only supports static files, so no server-side code will run
