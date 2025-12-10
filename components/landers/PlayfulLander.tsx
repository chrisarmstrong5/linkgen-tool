'use client';

import { useAffiliateLink } from '@/hooks/useAffiliateLink';
import { LANDERS } from '@/config/landers';

export default function PlayfulLander() {
  const affiliateUrl = useAffiliateLink(LANDERS.playful.baseAffiliateUrl);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Playful Rewards
          </h1>
          <p className="text-2xl text-white/90 font-medium">
            Turn fun into rewards!
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
          <div className="text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Start Earning Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Play games, complete tasks, and earn real rewards. It's that simple!
            </p>
            <a
              href={affiliateUrl}
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-12 py-4 rounded-full transition-all transform hover:scale-105 text-lg shadow-lg"
            >
              Start Earning
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white/90 rounded-xl backdrop-blur">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-gray-900 mb-2">Easy Tasks</h3>
            <p className="text-gray-700 text-sm">Simple challenges anyone can do</p>
          </div>
          <div className="p-6 bg-white/90 rounded-xl backdrop-blur">
            <div className="text-3xl mb-3">💸</div>
            <h3 className="font-bold text-gray-900 mb-2">Real Rewards</h3>
            <p className="text-gray-700 text-sm">Cash out whenever you want</p>
          </div>
          <div className="p-6 bg-white/90 rounded-xl backdrop-blur">
            <div className="text-3xl mb-3">⏱️</div>
            <h3 className="font-bold text-gray-900 mb-2">No Time Limit</h3>
            <p className="text-gray-700 text-sm">Earn at your own pace</p>
          </div>
        </div>
      </div>
    </div>
  );
}
