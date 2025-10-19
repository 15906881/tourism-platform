# Amplify Migration Checklist

## ✅ Completed
- [x] Created amplify.yml build specification
- [x] Updated next.config.js for Amplify compatibility  
- [x] Set Node.js version to 18
- [x] Pushed configuration to Pristine.01 branch
- [x] Environment variables configured in Amplify Console

## 🔄 In Progress
- [ ] Amplify build running (check AWS Console)

## 📋 Pending (After Successful Build)
- [ ] Add custom domain in Amplify Console
  - [ ] weblynk.app
  - [ ] *.weblynk.app
- [ ] Verify SSL certificate issuance
- [ ] Update Route 53 records via Amplify
- [ ] Remove old Vercel DNS records
- [ ] Test live website
- [ ] Test wildcard subdomains
- [ ] Verify API integration

## 🧪 Verification Steps
- [ ] https://weblynk.app loads correctly
- [ ] https://*.weblynk.app loads correctly
- [ ] Images and static assets load
- [ ] Dynamic routes work (/site/...)
- [ ] API calls to api.weblynk.app work
- [ ] No mixed content warnings
- [ ] SSL certificate valid

## 🧹 Cleanup (After Successful Migration)
- [ ] Remove vercel.json files
- [ ] Remove .vercel directories
- [ ] Cancel Vercel builds
- [ ] Remove Vercel project domain associations
