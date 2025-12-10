'use client';

import { useAffiliateLink } from '@/hooks/useAffiliateLink';
import { LANDERS } from '@/config/landers';

export default function VenMottLander() {
  const affiliateUrl = useAffiliateLink(LANDERS.venmott.baseAffiliateUrl);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            VenMott
          </h1>
          <p className="text-2xl text-white/90 font-medium">
            The smarter way to send money
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
          <div className="text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Send & Receive Money
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fast, secure payments to friends and family. Sign up now and get started in seconds.
            </p>
            <a
              href={affiliateUrl}
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-full transition-all transform hover:scale-105 text-lg shadow-lg"
            >
              Sign Up
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white/90 rounded-xl backdrop-blur">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Instant Transfer</h3>
            <p className="text-gray-700 text-sm">Send money in seconds</p>
          </div>
          <div className="p-6 bg-white/90 rounded-xl backdrop-blur">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-900 mb-2">Secure</h3>
            <p className="text-gray-700 text-sm">Bank-level encryption</p>
          </div>
          <div className="p-6 bg-white/90 rounded-xl backdrop-blur">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-bold text-gray-900 mb-2">Free to Use</h3>
            <p className="text-gray-700 text-sm">No hidden fees</p>
          </div>
        </div>
      </div>
    </div>
  );
}
