'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

/**
 * Custom hook to append tracking parameters to affiliate links
 * @param baseAffiliateUrl - The base affiliate URL (e.g., "https://offer-network.com/offer?offer_id=123")
 * @returns finalUrl - The affiliate URL with source parameter appended
 */
export function useAffiliateLink(baseAffiliateUrl: string): string {
  const searchParams = useSearchParams();

  const finalUrl = useMemo(() => {
    // Get the source parameter from the current URL
    const source = searchParams.get('source') || 'organic';

    // Parse the base URL to check if it already has query parameters
    const url = new URL(baseAffiliateUrl);

    // Append the source parameter
    url.searchParams.set('source', source);

    return url.toString();
  }, [baseAffiliateUrl, searchParams]);

  return finalUrl;
}
