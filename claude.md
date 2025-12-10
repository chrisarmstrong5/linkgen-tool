# Link Generator & Lander - Claude Deployment Guide

## 🚀 Vercel Deployment

### Vercel Token
**Token:** `8dJ3bKiTra9JpCjN37QyoO9R`

### Deployment Command
```bash
vercel --prod --yes --token 8dJ3bKiTra9JpCjN37QyoO9R
```

### Project URLs
- **Production URL:** https://linkgen-tool-f018jazwr-jordandonaldosnnnn-7180s-projects.vercel.app
- **Primary Domain:** https://track.apptime.pro
- **GitHub Repo:** https://github.com/chrisarmstrong5/linkgen-tool
- **Vercel Dashboard:** https://vercel.com/jordandonaldosnnnn-7180s-projects/linkgen-tool

### Custom Domains (All Active)
- **track.apptime.pro** (Primary)
- **track.appreward.pro**
- **track.winterhaul.com**
- **track.phonehaul.com**

### Quick Deploy Script
```bash
cd /Users/christianarmstrong/Desktop/linkgen-tool
git add -A
git commit -m "Update: [your message]"
git push
vercel --prod --yes --token 8dJ3bKiTra9JpCjN37QyoO9R
```

---

## 📊 Project Structure

### Landing Pages (5 Total)
1. **Apple Rewards** (`/landers/apple`)
   - Pixel ID: `D4SBIM3C77U3O2FSI120`
   - Pixel Name: Apple Pay Pixel

2. **Freecash** (`/landers/freecash`)
   - Pixel ID: `D4SBJ43C77U501MAOE30`
   - Pixel Name: Freecash Pixel

3. **Playful Rewards** (`/landers/playful`)
   - Pixel ID: `D4PI1K3C77U6N264VE70`
   - Pixel Name: Playful Pixel

4. **VenMott (Venmo)** (`/landers/venmott`)
   - Pixel ID: `D4SBJFBC77U0F897O36G`
   - Pixel Name: Venmo Pixel

5. **Aritzia** (`/landers/aritzia`)
   - No pixel configured

### Key Files
- **Config:** `/config/landers.ts` - Add/edit landers and pixels here
- **Generator:** `/app/page.tsx` - Main dashboard for generating links
- **Pixel Component:** `/components/TikTokPixel.tsx` - TikTok tracking
- **Hook:** `/hooks/useAffiliateLink.ts` - Automatic source parameter handling

---

## 🔧 How to Add a New Lander

1. **Update Config** (`/config/landers.ts`):
```typescript
newlander: {
  slug: 'newlander',
  name: 'New Lander Name',
  baseAffiliateUrl: 'https://your-affiliate-url.com',
  pixelId: 'YOUR_PIXEL_ID',
  pixelName: 'Your Pixel Name',
}
```

2. **Create Component** (`/components/landers/NewLander.tsx`):
```typescript
'use client';
import { useAffiliateLink } from '@/hooks/useAffiliateLink';
import { LANDERS } from '@/config/landers';
import TikTokPixel from '@/components/TikTokPixel';

export default function NewLander() {
  const affiliateUrl = useAffiliateLink(LANDERS.newlander.baseAffiliateUrl);
  return (
    <>
      <TikTokPixel pixelId={LANDERS.newlander.pixelId} />
      {/* Your lander UI */}
    </>
  );
}
```

3. **Add to Router** (`/app/landers/[slug]/page.tsx`):
```typescript
import NewLander from '@/components/landers/NewLander';

const LANDER_COMPONENTS: Record<string, React.ComponentType> = {
  // ... existing landers
  newlander: NewLander,
};
```

4. **Deploy:**
```bash
npm run build
git add -A && git commit -m "Add new lander"
git push
vercel --prod --yes --token 8dJ3bKiTra9JpCjN37QyoO9R
```

---

## 🎯 Usage

### Generating Links
1. Go to any of your custom domains (e.g., https://track.apptime.pro)
2. Select a lander from dropdown
3. **Select which domain you want to use** (AppTime Pro, AppReward Pro, WinterHaul, or PhoneHaul)
4. See the pixel info displayed automatically
5. Enter traffic source (e.g., `tiktok-bio`, `fb-ad-1`)
6. Click "Generate & Copy Link"
7. Use the pixel ID shown in your TikTok Ads Manager

### Link Format
```
https://{selected-domain}/landers/{slug}?source={traffic-source}
```

Examples:
```
https://track.apptime.pro/landers/apple?source=tiktok-bio
https://track.winterhaul.com/landers/freecash?source=fb-ad-1
https://track.phonehaul.com/landers/playful?source=instagram-story
```

The lander will automatically pass the source parameter to the affiliate link.

### Domain Selection
You can now select which domain to use for your generated links. This allows you to:
- Use different domains for different traffic sources
- Test which domains perform better
- Organize campaigns by domain

---

## 🛠️ Common Tasks

### Update Pixel IDs
Edit `/config/landers.ts` and change the `pixelId` and `pixelName` fields.

### Test Locally
```bash
cd /Users/christianarmstrong/Desktop/linkgen-tool
npm run dev
```

### Check Build
```bash
npm run build
```

### View Deployment Logs
```bash
vercel inspect linkgen-tool-p41ldhc9p-jordandonaldosnnnn-7180s-projects.vercel.app --logs --token 8dJ3bKiTra9JpCjN37QyoO9R
```

---

## 📝 Notes
- All landers automatically include TikTok Pixel tracking
- Source parameters are passed through via the `useAffiliateLink` hook
- Generator UI shows pixel info to remind you which pixel to use in Ads Manager
- Built with Next.js 14+ App Router and Tailwind CSS
- Fully responsive design
