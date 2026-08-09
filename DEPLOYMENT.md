# Nexora Technologies - Deployment Guide

This guide provides step-by-step instructions for deploying the Nexora Technologies website to **Vercel**, the most optimized hosting platform for Next.js applications.

## Prerequisites

Before you begin, ensure you have the following:
1. A **GitHub**, **GitLab**, or **Bitbucket** account.
2. A **Vercel** account (you can sign up for free at [vercel.com](https://vercel.com/)).
3. Your code committed and pushed to a remote Git repository.

---

## Step 1: Prepare Your Code

Ensure your project is ready for production.

1. Open your terminal in the project root directory.
2. Run the build command locally to ensure there are no compilation errors:
   ```bash
   npm run build
   ```
3. If the build succeeds without errors, make sure all your changes are committed and pushed to your remote repository (e.g., GitHub).

---

## Step 2: Import Project to Vercel

1. Log in to your Vercel Dashboard at [vercel.com/dashboard](https://vercel.com/dashboard).
2. Click the black **"Add New..."** button and select **"Project"**.
3. Under the **"Import Git Repository"** section, find the repository containing your Nexora Technologies code and click **"Import"**.

---

## Step 3: Configure Project Settings

Vercel is very smart and will automatically detect that you are using Next.js. However, you should verify the settings:

1. **Project Name:** Give your project a name (e.g., `nexora-technologies`).
2. **Framework Preset:** This should automatically be set to **Next.js**.
3. **Root Directory:** If your `package.json` is in the root folder, leave this as `./`.
4. **Environment Variables:** 
   * Expand the "Environment Variables" section.
   * You **must** add any secrets your app needs to run in production. For this project, you will likely need:
     * Firebase configuration keys (if accessed server-side).
     * Resend API Key (e.g., `RESEND_API_KEY`).
   * *Note: Do not skip this step if your app relies on these external services.*

---

## Step 4: Deploy

1. Once your settings and environment variables are configured, click the **"Deploy"** button.
2. Vercel will now clone your repository, install dependencies (`npm install`), and build your application (`npm run build`).
3. You will see a live terminal output of the build process. This usually takes 1-2 minutes.

---

## Step 5: View Your Live Website

1. When the deployment completes successfully, you will see a "Congratulations!" screen.
2. Click on the preview image or the generated Vercel domain (e.g., `nexora-technologies.vercel.app`) to view your live website.
3. Every time you push new code to your `main` branch on GitHub, Vercel will automatically rebuild and deploy the updates.

---

## Step 6: Add a Custom Domain (Optional)

If you purchased a custom domain (e.g., `nexora.com`):

1. Go to your project's dashboard on Vercel.
2. Click on the **"Settings"** tab.
3. Select **"Domains"** from the left sidebar.
4. Enter your custom domain and click **"Add"**.
5. Vercel will provide you with the DNS records (usually an A Record or CNAME) that you need to add to your domain registrar's settings (e.g., Namecheap, GoDaddy).
6. Once the DNS propagates, Vercel will automatically generate a free SSL certificate, and your custom domain will be live!
