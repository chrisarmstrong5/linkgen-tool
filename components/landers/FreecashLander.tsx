'use client';

import { useAffiliateLink } from '@/hooks/useAffiliateLink';
import { LANDERS } from '@/config/landers';

export default function FreecashLander() {
  const affiliateUrl = useAffiliateLink(LANDERS.freecash.baseAffiliateUrl);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Freecash
          </h1>
          <p className="text-2xl text-white/90 font-medium">
            Earn cash & rewards playing games!
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
          <div className="text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Start Earning Now
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Join thousands earning cash daily by playing games, taking surveys, and completing offers.
            </p>
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4 mb-8">
              <p className="text-yellow-800 font-bold text-xl">
                🎉 Get $5 Bonus on Signup!
              </p>
            </div>
            <a
              href={affiliateUrl}
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-16 py-5 rounded-full transition-all transform hover:scale-105 text-xl shadow-lg"
            >
              Play Now
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white/90 rounded-xl backdrop-blur">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-gray-900 mb-2">Real Cash</h3>
            <p className="text-gray-700 text-sm">Withdraw to PayPal, crypto, or gift cards</p>
          </div>
          <div className="p-6 bg-white/90 rounded-xl backdrop-blur">
            <div className="text-4xl mb-3">🎮</div>
            <h3 className="font-bold text-gray-900 mb-2">Play Games</h3>
            <p className="text-gray-700 text-sm">Earn while having fun</p>
          </div>
          <div className="p-6 bg-white/90 rounded-xl backdrop-blur">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-gray-900 mb-2">Fast Payouts</h3>
            <p className="text-gray-700 text-sm">Get paid within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
