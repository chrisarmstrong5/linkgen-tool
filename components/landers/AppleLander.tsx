'use client';

import React, { useState } from 'react';
import { MousePointerClick, User, ListTodo, CreditCard, Star, MessageSquare, X } from 'lucide-react';
import { useAffiliateLink } from '@/hooks/useAffiliateLink';
import { LANDERS } from '@/config/landers';
import TikTokPixel from '@/components/TikTokPixel';

const config = LANDERS.apple;

const AgeGate: React.FC<{ onVerify: () => void }> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f5f5f7]/80 backdrop-blur-md px-4">
      <div className="bg-white rounded-2xl shadow-apple p-8 max-w-sm w-full text-center border border-[#d2d2d7]/30">
        <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-2">Age Verification</h2>
        <p className="text-[#86868b] text-sm mb-8">
          Are you over 18 years of age?
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={onVerify}
            className="w-full bg-[#0071e3] text-white py-3 rounded-full text-sm font-medium hover:bg-[#0077ED] transition-colors"
          >
            Yes
          </button>
          <button
            onClick={onVerify}
            className="w-full bg-[#f5f5f7] text-[#0071e3] py-3 rounded-full text-sm font-medium hover:bg-[#e8e8ed] transition-colors"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};


interface Testimonial {
  title: string;
  name: string;
  text: string;
  date: string;
  stars: number;
}

const DashboardPreview: React.FC<{ link: string }> = ({ link }) => {
  const testimonials: Testimonial[] = [
    {
      title: "Legit payout",
      name: "Sarah Jenkins",
      text: "Saw this on my FYP and was totally skeptical at first, but I actually cashed out $750 to my Apple Pay instantly. It's insane.",
      date: "2d ago",
      stars: 5
    },
    {
      title: "Easy money",
      name: "Michael Torres",
      text: "Downloaded a few strategy games, played for a couple hours on the weekend, and woke up to money in my wallet. Legit.",
      date: "Yesterday",
      stars: 5
    },
    {
      title: "Surprisingly good",
      name: "Jessica Reed",
      text: "Best way to earn extra cash on my iPhone. The games are actually fun and the payout is instant. Highly recommend!",
      date: "4h ago",
      stars: 5
    },
    {
      title: "Works for me",
      name: "David Chen",
      text: "Took about an hour to set up and complete the first task. Money hit my account right after.",
      date: "1w ago",
      stars: 4
    }
  ];

  const RatingRow = ({ stars, percentage }: { stars: number, percentage: string }) => (
    <div className="flex items-center gap-3 w-full h-3">
      <div className="flex justify-end w-3">
        <span className="text-[10px] font-bold text-[#86868b] mr-1">{stars}</span>
        <Star size={8} className="text-[#86868b] fill-[#86868b]" style={{marginTop: '2px'}} />
      </div>
      <div className="flex-1 h-1.5 bg-[#e5e5ea] rounded-full overflow-hidden">
        <div className="h-full bg-[#86868b] rounded-full" style={{ width: percentage }}></div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto border-t border-[#d2d2d7]/50 pt-12">
      <div className="flex items-center justify-between mb-6 px-4">
        <h2 className="text-2xl font-bold text-[#1d1d1f]">Ratings & Reviews</h2>
        <a href={link} className="text-[#0071e3] text-base font-normal">See All</a>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 px-4 mb-8">
        <div className="flex flex-col w-full sm:w-1/3 min-w-[200px]">
          <div className="flex items-start gap-4 mb-1">
            <span className="text-6xl font-bold text-[#1d1d1f] tracking-tighter title-font">4.9</span>
            <div className="flex flex-col pt-2">
              <span className="text-sm font-semibold text-[#86868b] mb-1">out of 5</span>
            </div>
          </div>
          <p className="text-[#86868b] text-sm font-medium mb-4 text-right sm:text-left pl-1">6.2K Ratings</p>
        </div>

        <div className="flex flex-col gap-1 w-full max-w-xs">
          <RatingRow stars={5} percentage="92%" />
          <RatingRow stars={4} percentage="6%" />
          <RatingRow stars={3} percentage="1%" />
          <RatingRow stars={2} percentage="0%" />
          <RatingRow stars={1} percentage="1%" />
        </div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 sm:grid sm:grid-cols-3 sm:gap-5 scrollbar-hide">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[85vw] sm:w-auto snap-center bg-[#f5f5f7] p-6 rounded-[20px] relative transition-transform duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#1d1d1f] font-bold text-[15px]">{t.title}</span>
              <span className="text-[#86868b] text-xs">{t.date}</span>
            </div>

            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={`${i < t.stars ? 'text-[#ff9500] fill-[#ff9500]' : 'text-[#d2d2d7] fill-[#d2d2d7]'}`} />
              ))}
            </div>

            <p className="text-[#333336] text-[15px] leading-relaxed mb-6 font-normal">
              {t.text}
            </p>

            <div className="flex items-center justify-between mt-auto pt-2">
              <span className="text-[#86868b] text-xs font-medium">{t.name}</span>
            </div>
          </div>
        ))}
        <div className="w-1 shrink-0 sm:hidden"></div>
      </div>
    </div>
  );
};

const Hero: React.FC<{ link: string }> = ({ link }) => {
  const handleGetStarted = (e: React.MouseEvent) => {
    try {
      if ((window as any).ttq) {
        (window as any).ttq.track('ClickButton');
      }
    } catch (err) {
      console.error("Pixel error:", err);
    }
  };

  const steps = [
    { icon: MousePointerClick, text: "Click The Button Below" },
    { icon: User, text: "Enter Your Basic Info" },
    { icon: ListTodo, text: "Complete Required Offers" },
    { icon: CreditCard, text: "Claim Your $750 Apple Pay" }
  ];

  return (
    <div className="flex flex-col items-center pt-8 md:pt-16 pb-24 px-5 max-w-[1200px] mx-auto overflow-hidden w-full">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-[#1d1d1f] text-center leading-[1.1] mb-8 tracking-tight max-w-3xl">
        Get <span className="text-[#0071e3]">$750</span> to your<br />
        Apple Pay today.
      </h1>

      <div className="grid grid-cols-2 gap-3 w-full max-w-[360px] mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center justify-center text-center p-3 rounded-2xl border border-[#d2d2d7]/60 bg-white/50 backdrop-blur-sm h-28 shadow-sm">
            <step.icon size={24} className="text-[#0071e3] mb-2" />
            <span className="text-xs font-medium text-[#1d1d1f] leading-tight px-1">{step.text}</span>
          </div>
        ))}
      </div>

      <div className="w-full sm:w-auto mb-16 md:mb-24 flex justify-center">
        <a
          href={link}
          onClick={handleGetStarted}
          className="bg-[#0071e3] text-white px-10 py-4 rounded-full font-medium text-lg md:text-xl hover:bg-[#0077ED] active:scale-95 transition-all w-full sm:w-auto text-center shadow-lg shadow-[#0071e3]/20"
        >
          Get Started
        </a>
      </div>

      <div className="w-full">
        <DashboardPreview link={link} />
      </div>
    </div>
  );
};

const ChatWidget: React.FC<{ link: string }> = ({ link }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href={link} className="bg-[#0071e3] text-white p-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center group relative">
        <MessageSquare size={24} fill="currentColor" className="relative z-10" />
      </a>
    </div>
  );
};

export default function AppleLander() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const affiliateLink = useAffiliateLink(config.baseAffiliateUrl);

  if (!isAgeVerified) {
    return (
      <>
        <TikTokPixel pixelId={config.pixelId} />
        <AgeGate onVerify={() => setIsAgeVerified(true)} />
      </>
    );
  }

  return (
    <>
      <TikTokPixel pixelId={config.pixelId} />
      <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#0071e3] selection:text-white">
        <main>
          <Hero link={affiliateLink} />
        </main>
        <ChatWidget link={affiliateLink} />
      </div>
    </>
  );
}
