'use client';

import React, { useState, useRef } from 'react';
import { Star, PlayCircle, Video, MessageSquare } from 'lucide-react';
import { useAffiliateLink } from '@/hooks/useAffiliateLink';
import { LANDERS } from '@/config/landers';
import TikTokPixel from '@/components/TikTokPixel';

const config = LANDERS.freecash;

const AgeGate: React.FC<{ onVerify: (isOver21: boolean) => void }> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#13141b] flex items-center justify-center p-4">
      <div className="bg-[#1a1c26] p-8 rounded-2xl border border-white/5 max-w-md w-full shadow-2xl text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Age Verification</h2>
        <p className="text-slate-300 mb-8 text-lg">Are you over 21 years of age?</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => onVerify(true)}
            className="w-full bg-[#d4fc78] text-black font-bold py-3 rounded-xl hover:bg-[#dffe8a] transition-colors text-lg shadow-[0_0_20px_rgba(212,252,120,0.3)] active:scale-95 transform duration-100"
          >
            Yes, I am over 21
          </button>
          <button
            onClick={() => onVerify(false)}
            className="w-full bg-white/5 text-slate-400 font-bold py-3 rounded-xl hover:bg-white/10 transition-colors active:scale-95 transform duration-100"
          >
            No, I am under 21
          </button>
        </div>
      </div>
    </div>
  );
};

const LaurelWreath: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`flex items-center gap-2 relative px-8 py-1 ${className}`}>
    <svg className="absolute left-0 top-0 bottom-0 h-full w-8 text-slate-700" viewBox="0 0 24 64" fill="currentColor">
      <path d="M12 60c0 0-8-10-8-28S12 4 12 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M4 50l4 2m-4-10l4 2m-4-10l4 2m-4-10l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>

    <div className="text-center">
      {children}
    </div>

    <svg className="absolute right-0 top-0 bottom-0 h-full w-8 text-slate-700" viewBox="0 0 24 64" fill="currentColor">
       <path d="M12 60c0 0 8-10 8-28S12 4 12 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
       <path d="M20 50l-4 2m4-10l-4 2m4-10l-4 2m4-10l-4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

const SocialProof: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 sm:gap-12 items-start justify-center text-slate-200 scale-90 sm:scale-100 flex-wrap">
      <LaurelWreath>
        <div className="flex flex-col items-center">
          <span className="text-xs text-[#d4fc78] uppercase tracking-wide font-bold">Total Paid</span>
          <span className="font-bold text-lg leading-tight">$88 Million</span>
          <span className="text-xs text-slate-500 font-medium">to Users</span>
        </div>
      </LaurelWreath>

      <div className="hidden sm:block w-px h-12 bg-white/10"></div>

      <LaurelWreath>
        <div className="flex flex-col items-center">
          <span className="text-xs text-[#d4fc78] uppercase tracking-wide font-bold">Trusted By</span>
          <span className="font-bold text-lg leading-tight">17 Million</span>
          <span className="text-xs text-slate-500 font-medium">Verified Users</span>
        </div>
      </LaurelWreath>
    </div>
  );
};

interface GameOffer {
  id: string;
  name: string;
  reward: string;
  category: string;
  rating: number;
  image: string;
}

const DashboardPreview: React.FC<{ link: string }> = ({ link }) => {
  const [items] = useState<GameOffer[]>([
    {
      id: '1',
      name: 'Satisfying ASMR',
      reward: '$2.50 / video',
      category: 'ASMR',
      rating: 4.9,
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHh4aXN6Nms4eXpmZHQ4N2F3NWgwbnMwbGdjemY4ZDhrb3lybGs2eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/FWaml2vOWzWlYdWhsn/giphy.gif'
    },
    {
      id: '2',
      name: 'Viral Dance Challenges',
      reward: '$3.20 / video',
      category: 'Trending',
      rating: 4.8,
      image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjV0bzZ4cTFiYTc3bG02dDk3b3FrcnZjOWJ0MGZrOTJnNzJuY2tzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wmmJWNjHOOIVSNw1Wo/giphy.gif'
    },
    {
      id: '3',
      name: 'New Moves & Vibes',
      reward: '$1.80 / video',
      category: 'Dance',
      rating: 4.7,
      image: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eGxnY3c3NGw2emtmaXJpb20wbXNmbXk4bHE5MW8yOWhqbmg4c3pnYiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/s7bQ0q95KyKV13yq7Z/giphy.gif'
    }
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWatch = () => {
    window.location.href = link;
  };

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <div className="bg-[#1a1c26] rounded-xl overflow-hidden border border-white/5">
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
           <div className="flex items-center gap-2 text-white font-bold">
             <Video className="text-[#d4fc78]" size={20} />
             <span>Featured Videos</span>
           </div>
           <span className="text-xs text-[#d4fc78] font-medium animate-pulse">● Live Earning</span>
        </div>

        <div className="bg-[#13141b] relative">
          <div
            className="overflow-x-auto overflow-y-hidden p-6 flex gap-4 snap-x snap-mandatory scrollbar-hide items-center"
            ref={scrollRef}
            style={{ scrollBehavior: 'smooth' }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="min-w-[280px] w-[280px] sm:w-[300px] h-[500px] snap-center shrink-0 bg-[#1e2029] border border-white/5 rounded-2xl overflow-hidden relative group flex flex-col shadow-xl cursor-pointer"
                onClick={handleWatch}
              >
                <div className="absolute inset-0 bg-black">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/20 group-hover:scale-110 transition-transform">
                       <PlayCircle className="text-white w-10 h-10 fill-white/20" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{item.category}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-3 z-10">
                  <h3 className="font-bold text-white text-lg leading-tight shadow-black drop-shadow-md">{item.name}</h3>

                  <div className="flex items-center justify-between">
                     <div className="flex flex-col">
                       <span className="text-[10px] text-slate-300 uppercase font-bold drop-shadow-md">Potential Earnings</span>
                       <span className="text-[#d4fc78] font-extrabold text-2xl drop-shadow-md">{item.reward}</span>
                     </div>

                     <button className="bg-[#d4fc78] text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,252,120,0.3)]">
                       Watch
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC<{ link: string }> = ({ link }) => {
  return (
    <nav className="flex items-center justify-center sm:justify-between px-4 py-4 bg-[#13141b] sticky top-0 z-40 border-b border-white/5">
      <div className="flex items-center gap-4">
        <a href={link} className="flex items-center gap-2">
          <img
            src="https://files.sikayetvar.com/lg/cmp/33/336611.png?1737536181"
            alt="Freecash"
            className="h-8 w-auto object-contain"
          />
        </a>
      </div>

      <div className="hidden sm:block"></div>
    </nav>
  );
};

const Hero: React.FC<{ link: string }> = ({ link }) => {
  const handleCtaClick = () => {
    if ((window as any).ttq) {
      (window as any).ttq.track('ClickButton', {
        content_id: 'cta_button',
        content_name: 'Start Earning Now',
      });
    }

    window.location.href = link;
  };

  return (
    <div className="flex flex-col items-center pt-8 pb-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight mb-4">
        Make <span className="text-[#d4fc78]">$332+</span> Daily<br className="hidden md:block" /> Watching TikToks
      </h1>

      <p className="text-slate-400 text-center text-base md:text-lg max-w-2xl leading-relaxed mb-6">
        Get paid for rating videos, testing apps & surveys. Watch <span className="text-white font-semibold">5 min</span> and earn up to <span className="text-white font-semibold">$20</span>.
      </p>

      <div className="flex items-center gap-2 mb-8 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <div className="flex text-[#d4fc78] gap-0.5">
          <Star size={18} fill="currentColor" strokeWidth={0} />
          <Star size={18} fill="currentColor" strokeWidth={0} />
          <Star size={18} fill="currentColor" strokeWidth={0} />
          <Star size={18} fill="currentColor" strokeWidth={0} />
          <Star size={18} fill="currentColor" strokeWidth={0} />
        </div>
        <span className="font-bold text-white text-md">4.9</span>
        <span className="text-slate-500 text-sm font-medium">(6,000+ reviews)</span>
      </div>

      <div className="flex items-center gap-4 mb-10 flex-col sm:flex-row w-full sm:w-auto">
        <button
          onClick={handleCtaClick}
          className="w-full sm:w-auto bg-[#d4fc78] text-black px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-[#dffe8a] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,252,120,0.3)] flex items-center justify-center gap-2"
        >
          START EARNING NOW
        </button>
      </div>

      <div className="mb-12">
        <SocialProof />
      </div>

      <div className="w-full max-w-6xl mt-4 px-0">
        <DashboardPreview link={link} />
      </div>
    </div>
  );
};


export default function FreecashLander() {
  const [isVerified, setIsVerified] = useState(false);
  const affiliateLink = useAffiliateLink(config.baseAffiliateUrl);

  const handleVerification = (isOver21: boolean) => {
    setIsVerified(true);
    window.scrollTo(0, 0);
  };

  if (!isVerified) {
    return (
      <>
        <TikTokPixel pixelId={config.pixelId} />
        <AgeGate onVerify={handleVerification} />
      </>
    );
  }

  return (
    <>
      <TikTokPixel pixelId={config.pixelId} />
      <div className="min-h-[100dvh] bg-[#13141b] font-sans antialiased selection:bg-[#d4fc78] selection:text-black overflow-x-hidden">
        <Navbar link={affiliateLink} />
        <main>
          <Hero link={affiliateLink} />
        </main>
      </div>
    </>
  );
}
