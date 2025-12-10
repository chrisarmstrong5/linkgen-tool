export interface DomainConfig {
  domain: string;
  name: string;
  isPrimary?: boolean;
}

export const DOMAINS: DomainConfig[] = [
  {
    domain: 'track.apptime.pro',
    name: 'AppTime Pro',
    isPrimary: true,
  },
  {
    domain: 'track.appreward.pro',
    name: 'AppReward Pro',
  },
  {
    domain: 'track.winterhaul.com',
    name: 'WinterHaul',
  },
  {
    domain: 'track.phonehaul.com',
    name: 'PhoneHaul',
  },
];

export const getDefaultDomain = (): string => {
  const primary = DOMAINS.find(d => d.isPrimary);
  return primary ? primary.domain : DOMAINS[0]?.domain || '';
};
