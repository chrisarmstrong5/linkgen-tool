'use client';

import { useAffiliateLink } from '@/hooks/useAffiliateLink';
import { LANDERS } from '@/config/landers';

export default function AppleLander() {
  const affiliateUrl = useAffiliateLink(LANDERS.apple.baseAffiliateUrl);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Apple Rewards
          </h1>
          <p className="text-xl text-gray-600">
            Get exclusive rewards with Apple products
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-lg p-12 mb-8">
          <div className="text-center">
            <div className="inline-block p-6 bg-gray-100 rounded-2xl mb-6">
              <svg className="w-24 h-24 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Premium Apple Experience
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Unlock exclusive offers and rewards when you get started today.
            </p>
            <a
              href={affiliateUrl}
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-12 py-4 rounded-full transition-all transform hover:scale-105 text-lg"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">Experience the best in technology</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl mb-3">🎁</div>
            <h3 className="font-semibold text-gray-900 mb-2">Exclusive Rewards</h3>
            <p className="text-gray-600 text-sm">Get special offers and bonuses</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast & Easy</h3>
            <p className="text-gray-600 text-sm">Get started in seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
