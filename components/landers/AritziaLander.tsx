'use client';

import { useAffiliateLink } from '@/hooks/useAffiliateLink';
import { LANDERS } from '@/config/landers';

export default function AritziaLander() {
  const affiliateUrl = useAffiliateLink(LANDERS.aritzia.baseAffiliateUrl);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-rose-900 mb-4">
            Aritzia
          </h1>
          <p className="text-2xl text-rose-700">
            Exclusive Fashion Rewards
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 mb-8 border-2 border-rose-200">
          <div className="text-center">
            <div className="inline-block p-6 bg-rose-100 rounded-2xl mb-6">
              <svg className="w-24 h-24 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-rose-900 mb-4">
              Get $500 Now
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Shop premium fashion and earn exclusive rewards with every purchase.
            </p>
            <a
              href={affiliateUrl}
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold px-12 py-4 rounded-full transition-all transform hover:scale-105 text-lg shadow-lg"
            >
              Claim Reward
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-rose-50 rounded-xl">
            <div className="text-3xl mb-3">👗</div>
            <h3 className="font-semibold text-rose-900 mb-2">Premium Fashion</h3>
            <p className="text-gray-600 text-sm">Curated collections</p>
          </div>
          <div className="p-6 bg-rose-50 rounded-xl">
            <div className="text-3xl mb-3">💎</div>
            <h3 className="font-semibold text-rose-900 mb-2">Exclusive Deals</h3>
            <p className="text-gray-600 text-sm">Members-only offers</p>
          </div>
          <div className="p-6 bg-rose-50 rounded-xl">
            <div className="text-3xl mb-3">🎁</div>
            <h3 className="font-semibold text-rose-900 mb-2">Rewards</h3>
            <p className="text-gray-600 text-sm">Earn with every order</p>
          </div>
        </div>
      </div>
    </div>
  );
}
