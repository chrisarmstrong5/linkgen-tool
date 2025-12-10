'use client';

import { useState } from 'react';
import { getAllLanders } from '@/config/landers';
import { Copy, Check, Link as LinkIcon } from 'lucide-react';

export default function GeneratorPage() {
  const [selectedLander, setSelectedLander] = useState('');
  const [source, setSource] = useState('');
  const [copied, setCopied] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');

  const landers = getAllLanders();
  const selectedLanderConfig = landers.find(l => l.slug === selectedLander);

  const generateAndCopy = () => {
    if (!selectedLander) {
      alert('Please select a lander');
      return;
    }
    if (!source) {
      alert('Please enter a traffic source');
      return;
    }

    const url = `${window.location.origin}/landers/${selectedLander}?source=${encodeURIComponent(source)}`;
    setGeneratedUrl(url);

    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-purple-500/20 rounded-2xl mb-6">
            <LinkIcon className="w-16 h-16 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Link Generator & Lander
          </h1>
          <p className="text-xl text-gray-300">
            Generate trackable affiliate links for your landing pages
          </p>
        </div>

        {/* Generator Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="space-y-6">
            {/* Lander Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Select Lander
              </label>
              <select
                value={selectedLander}
                onChange={(e) => setSelectedLander(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="" className="text-gray-900">Choose a lander...</option>
                {landers.map((lander) => (
                  <option key={lander.slug} value={lander.slug} className="text-gray-900">
                    {lander.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Pixel Info Display */}
            {selectedLanderConfig && selectedLanderConfig.pixelId && (
              <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <p className="text-sm font-semibold text-purple-300">TikTok Pixel Active</p>
                </div>
                <p className="text-xs text-gray-300 mb-1">
                  <span className="font-medium text-purple-200">Pixel Name:</span> {selectedLanderConfig.pixelName}
                </p>
                <p className="text-xs text-gray-300">
                  <span className="font-medium text-purple-200">Pixel ID:</span> {selectedLanderConfig.pixelId}
                </p>
                <p className="text-xs text-yellow-300 mt-2">
                  💡 Use this pixel in your TikTok Ads Manager
                </p>
              </div>
            )}

            {/* Source Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Traffic Source
              </label>
              <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="e.g., tiktok-bio, fb-ad-1, instagram-story"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={generateAndCopy}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Copied to Clipboard!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Generate & Copy Link
                </>
              )}
            </button>

            {/* Generated URL Display */}
            {generatedUrl && (
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-xs font-semibold text-gray-400 mb-2">Generated URL:</p>
                <p className="text-sm text-purple-300 break-all font-mono">
                  {generatedUrl}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-white mb-2">Track Sources</h3>
            <p className="text-gray-300 text-sm">Monitor which traffic sources perform best</p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-white mb-2">Fast Setup</h3>
            <p className="text-gray-300 text-sm">Generate links instantly with one click</p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-white mb-2">Optimize</h3>
            <p className="text-gray-300 text-sm">Make data-driven decisions</p>
          </div>
        </div>

        {/* Available Landers */}
        <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Available Landers ({landers.length})</h3>
          <div className="flex flex-wrap gap-2">
            {landers.map((lander) => (
              <span
                key={lander.slug}
                className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
              >
                {lander.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
