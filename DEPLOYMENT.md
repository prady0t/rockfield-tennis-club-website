# Deployment Guide for GitHub Pages

This guide explains how to deploy the Rockfield Tennis Club website to GitHub Pages.

## Prerequisites

1. A GitHub repository with your code
2. GitHub Pages enabled in your repository settings

## Setup GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. This will allow the workflow to deploy automatically

## Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically:

1. Build the Next.js application
2. Generate static files
3. Deploy to GitHub Pages

### Triggering Deployment

The workflow runs automatically when:
- You push to the `main` branch
- You create a pull request to the `main` branch

### Manual Deployment

To manually trigger a deployment:

1. Go to your repository on GitHub
2. Navigate to **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow**
5. Select the branch and click **Run workflow**

## Configuration

The deployment is configured through:

- **Next.js Config** (`next.config.mjs`): Enables static export with `output: 'export'`
- **GitHub Actions** (`.github/workflows/deploy.yml`): Handles the build and deployment process

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** > **Pages**
2. Under **Custom domain**, enter your domain
3. Add a `CNAME` file to the `public` folder with your domain
4. Configure your DNS settings to point to your GitHub Pages URL

## Troubleshooting

### Build Failures

- Check the Actions tab for detailed error logs
- Ensure all dependencies are properly installed
- Verify the Next.js configuration is correct

### Deployment Issues

- Ensure GitHub Pages is enabled in repository settings
- Check that the workflow has proper permissions
- Verify the repository is public (or you have GitHub Pro for private repos)

## Local Development

To test the static build locally:

```bash
npm run build
npx serve out
```

This will create a local server to preview the static build before deployment. 