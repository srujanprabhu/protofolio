# 🚀 Free Deployment Guide for Srujan's Portfolio

## Quick Summary
Your project is a **React + Express.js** full-stack application. Deploy completely FREE on:
- **Frontend:** Vercel or Netlify
- **Backend:** Vercel, Render.com, or Railway
- **Database:** Neon PostgreSQL (free tier)

---

## ⭐ RECOMMENDED: Vercel Deployment (Easiest - 10 mins)

### Step 1: Create Free Accounts
1. **GitHub** - https://github.com (if not already)
2. **Vercel** - https://vercel.com (sign up with GitHub)
3. **Neon PostgreSQL** - https://neon.tech (free database)

### Step 2: Get Database Connection String
1. Go to https://neon.tech
2. Sign up (free)
3. Create a new project
4. Copy the connection string (looks like: `postgresql://...`)

### Step 3: Push Code to GitHub
```powershell
cd c:\Users\srujs\Downloads\SrujanPortfolio\SrujanPortfolio
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy on Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your portfolio repository
4. Under "Environment Variables", add:
   - `DATABASE_URL` = (paste your Neon connection string)
   - `NODE_ENV` = `production`
5. Click "Deploy"

### Step 5: Update Your Frontend API URL
Update `client/src/lib/queryClient.ts` to use your Vercel deployment URL:
```typescript
const API_URL = process.env.VITE_API_URL || 'https://your-vercel-domain.vercel.app';
```

---

## Alternative: Netlify + Render.com (Still Free)

### Frontend on Netlify
1. Connect GitHub to https://netlify.com
2. Select your repo
3. Build command: `npm run build`
4. Publish directory: `dist`

### Backend on Render.com
1. Go to https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Build command: `npm install && npm run build`
5. Start command: `npm start`
6. Add environment variables (DATABASE_URL, etc.)

---

## Alternative: GitHub Pages + Railway

### Frontend on GitHub Pages
- Update `vite.config.ts` with base path
- Deploy built files to `gh-pages` branch

### Backend on Railway
- Go to https://railway.app
- Connect GitHub
- Deploy as Node.js app

---

## 💡 Important Notes

✅ **Free Tier Limits:**
- Vercel: 100GB bandwidth/month
- Render: Auto-spins down after 15 mins of inactivity
- Neon: 3 GB storage, free compute
- Netlify: 100GB bandwidth/month

⚠️ **Before Deploying:**
- Ensure all environment variables are set
- Test locally: `npm run dev`
- Build locally: `npm run build`

🔐 **Security:**
- Never commit `.env` files
- Use deployment platform's environment variables
- Keep secrets in `.env.local` (gitignored)

---

## Troubleshooting

**Build fails?**
- Check Node version (should be 18+)
- Verify all dependencies: `npm install`

**Database connection fails?**
- Verify `DATABASE_URL` is correct
- Check Neon allows connections from Vercel IP

**Frontend can't reach backend?**
- Update API URL in your React code
- Ensure CORS is enabled in Express

---

## Next Steps
1. Choose a platform above
2. Create accounts
3. Follow the deployment steps
4. Your portfolio will be LIVE! 🎉

For questions: Check the platform's documentation or contact their support (all FREE).
