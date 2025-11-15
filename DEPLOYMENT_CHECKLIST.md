# 📋 Deployment Checklist - Complete Free Deployment

## Pre-Deployment
- [ ] Git repository initialized: `git init`
- [ ] All code committed: `git add .` && `git commit -m "..."`
- [ ] `.gitignore` includes: `.env`, `node_modules/`, `dist/`, `.local/`
- [ ] `.env.example` created with required variables
- [ ] Local build works: `npm run build`
- [ ] Local dev runs: `npm run dev`

## Choose Your Platform

### Option A: Vercel (RECOMMENDED ⭐)
**Pros:** Easiest, auto-deploys on push, includes backend support
**Cost:** 100% FREE tier sufficient

Steps:
- [ ] Sign up: https://vercel.com
- [ ] Create Neon PostgreSQL account: https://neon.tech
- [ ] Push code to GitHub: `git push origin main`
- [ ] Import repo in Vercel dashboard
- [ ] Set environment variables:
  - [ ] `DATABASE_URL` from Neon
  - [ ] `NODE_ENV=production`
- [ ] Deploy by clicking "Deploy"
- [ ] Test your site at: `https://your-project.vercel.app`

**Database Setup for Vercel:**
1. Go to https://neon.tech
2. Create new project
3. Copy connection string
4. In Vercel: Settings → Environment Variables
5. Add `DATABASE_URL` with Neon connection string
6. Redeploy

### Option B: Netlify (Frontend) + Render.com (Backend)

**Frontend on Netlify:**
- [ ] Sign up: https://netlify.com
- [ ] Connect GitHub
- [ ] Build: `npm run build`
- [ ] Publish: `dist`

**Backend on Render:**
- [ ] Sign up: https://render.com
- [ ] New Web Service from GitHub
- [ ] Build: `npm install && npm run build`
- [ ] Start: `npm start`
- [ ] Environment variables: Add `DATABASE_URL`

### Option C: GitHub Pages (Frontend Only)
- [ ] Update `vite.config.ts` base path
- [ ] GitHub Actions workflow for auto-deploy
- [ ] Backend on separate platform (Render/Railway)

## Post-Deployment

### Connect Frontend to Backend
Update `client/src/` files to use deployed backend URL:

```typescript
// In components/api calls
const API_URL = process.env.VITE_API_URL || 'https://your-deployed-url.vercel.app';
```

### Test Checklist
- [ ] Homepage loads without errors
- [ ] API calls work correctly
- [ ] Database queries execute
- [ ] Images/assets display
- [ ] Forms submit successfully
- [ ] No 404 errors in console

### Monitor & Maintain
- [ ] Check Vercel/Netlify dashboard for logs
- [ ] Monitor database usage (Neon dashboard)
- [ ] Set up error notifications
- [ ] Keep dependencies updated: `npm audit`, `npm update`

## Troubleshooting

**Build Fails:**
```powershell
npm install
npm run build
```

**Database Connection Issues:**
- Verify DATABASE_URL is correct
- Check if Neon connection allows external IPs
- Test locally first: `npm run dev`

**Frontend Can't Reach Backend:**
- Check CORS settings in `server/index.ts`
- Verify API URL in React components
- Check environment variables are set

**Site Shows 404:**
- Ensure `dist` directory contains built files
- Check build output directory in config

## Free Tier Limits

| Platform | Storage | Bandwidth | Compute | Notes |
|----------|---------|-----------|---------|-------|
| Vercel | Unlimited | 100GB/mo | Serverless | Auto-scales |
| Netlify | Unlimited | 100GB/mo | Serverless | Popular for static |
| Render | Unlimited* | Unlimited | 750hrs/mo | Spins down after 15min idle |
| Neon DB | 3GB | Unlimited | Free | PostgreSQL |

**Excellent choice for a portfolio!** 🎉

---

## Support Resources
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Render Docs: https://render.com/docs
- Neon Docs: https://neon.tech/docs

Your portfolio will be LIVE and FREE! ✨
