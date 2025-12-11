export interface LanderConfig {
  slug: string;
  name: string;
  baseAffiliateUrl: string;
  pixelId: string;
  pixelName: string;
  shortCode: string; // Short discreet URL code
}

export const LANDERS: Record<string, LanderConfig> = {
  apple: {
    slug: 'apple',
    name: 'Apple Rewards',
    baseAffiliateUrl: 'https://trkio.org/aff_c?offer_id=2596&aff_id=15664',
    pixelId: 'D4SBIM3C77U3O2FSI120',
    pixelName: 'Apple Pay Pixel',
    shortCode: 'ap',
  },
  aritzia: {
    slug: 'aritzia',
    name: 'Aritzia',
    baseAffiliateUrl: 'https://glitchy.go2cloud.org/aff_c?offer_id=623&aff_id=15664',
    pixelId: '',
    pixelName: 'No Pixel',
    shortCode: 'ar',
  },
  freecash: {
    slug: 'freecash',
    name: 'Freecash',
    baseAffiliateUrl: 'https://gloffers.org/aff_c?offer_id=3531&aff_id=15664&url_id=185',
    pixelId: 'D4SBJ43C77U501MAOE30',
    pixelName: 'Freecash Pixel',
    shortCode: 'fc',
  },
  playful: {
    slug: 'playful',
    name: 'Playful Rewards',
    baseAffiliateUrl: 'https://trkio.org/aff_c?offer_id=2691&aff_id=15664',
    pixelId: 'D4PI1K3C77U6N264VE70',
    pixelName: 'Playful Pixel',
    shortCode: 'pl',
  },
  venmott: {
    slug: 'venmott',
    name: 'VenMott (Venmo)',
    baseAffiliateUrl: 'https://glitchy.go2cloud.org/aff_c?offer_id=1533&aff_id=15664',
    pixelId: 'D4SBJFBC77U0F897O36G',
    pixelName: 'Venmo Pixel',
    shortCode: 'vm',
  },
  playfulcanada: {
    slug: 'playfulcanada',
    name: 'Playful Canada',
    baseAffiliateUrl: 'https://glctrk.org/aff_c?offer_id=2957&aff_id=15664',
    pixelId: 'D4PI1K3C77U6N264VE70',
    pixelName: 'Playful Pixel',
    shortCode: 'pc',
  },
};

export const getLanderBySlug = (slug: string): LanderConfig | undefined => {
  return LANDERS[slug];
};

export const getLanderByShortCode = (shortCode: string): LanderConfig | undefined => {
  return Object.values(LANDERS).find(lander => lander.shortCode === shortCode);
};

export const getAllLanders = (): LanderConfig[] => {
  return Object.values(LANDERS);
};
