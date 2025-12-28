# Deployment Guide

This guide will help you deploy your portfolio website to GitHub and optionally host it on GitHub Pages.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "portfolio" or "my-portfolio")
4. Choose whether to make it public or private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/kumar11vaibhav/portfolio.git

# Rename the branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Note:** If you're using SSH instead of HTTPS, the URL will look like:

```
git@github.com:kumar11vaibhav/portfolio.git
```

## Step 3: Deploy to GitHub Pages (Optional)

GitHub Pages allows you to host your React app for free. Here's how to set it up:

### Option A: Using gh-pages package (Recommended)

1. **Install gh-pages package:**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these lines to your `package.json`:

   ```json
   "homepage": "https://kumar11vaibhav.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy:**

   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" section
   - Under "Source", select "gh-pages" branch
   - Click "Save"

Your site will be available at: `https://kumar11vaibhav.github.io/portfolio`

### Option B: Using GitHub Actions (Alternative)

1. Create a `.github/workflows/deploy.yml` file in your project
2. Use a GitHub Actions workflow to automatically build and deploy on push

## Step 4: Update and Push Changes

Whenever you make changes to your portfolio:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Description of your changes"

# Push to GitHub
git push
```

If you're using GitHub Pages with gh-pages:

```bash
# After pushing your changes, deploy the updated site
npm run deploy
```

## Troubleshooting

### If you get authentication errors:

- Make sure you have GitHub CLI installed or use a personal access token
- For HTTPS: Use a personal access token as your password
- For SSH: Set up SSH keys in your GitHub account settings

### If GitHub Pages shows a 404:

- Make sure the repository is public (or you have GitHub Pro)
- Check that the branch name matches (gh-pages or main)
- Wait a few minutes for GitHub to process the deployment

## Additional Deployment Options

- **Netlify**: Drag and drop your `build` folder or connect your GitHub repo
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Firebase Hosting**: Use Firebase CLI to deploy
- **AWS S3 + CloudFront**: For more advanced hosting needs
