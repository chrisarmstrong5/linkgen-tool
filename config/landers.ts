export interface LanderConfig {
  slug: string;
  name: string;
  baseAffiliateUrl: string;
}

export const LANDERS: Record<string, LanderConfig> = {
  apple: {
    slug: 'apple',
    name: 'Apple Rewards',
    baseAffiliateUrl: 'https://trkio.org/aff_c?offer_id=2596&aff_id=15664',
  },
  aritzia: {
    slug: 'aritzia',
    name: 'Aritzia',
    baseAffiliateUrl: 'https://glitchy.go2cloud.org/aff_c?offer_id=623&aff_id=15664',
  },
  freecash: {
    slug: 'freecash',
    name: 'Freecash',
    baseAffiliateUrl: 'https://glitchy.go2cloud.org/aff_c?offer_id=3530&aff_id=15664&url_id=185',
  },
  playful: {
    slug: 'playful',
    name: 'Playful Rewards',
    baseAffiliateUrl: 'https://trkio.org/aff_c?offer_id=2691&aff_id=15664',
  },
  venmott: {
    slug: 'venmott',
    name: 'VenMott (Venmo)',
    baseAffiliateUrl: 'https://glitchy.go2cloud.org/aff_c?offer_id=1533&aff_id=15664',
  },
};

export const getLanderBySlug = (slug: string): LanderConfig | undefined => {
  return LANDERS[slug];
};

export const getAllLanders = (): LanderConfig[] => {
  return Object.values(LANDERS);
};
