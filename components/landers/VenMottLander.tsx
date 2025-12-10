'use client';

import React, { useState, useEffect } from 'react';
import { useAffiliateLink } from '@/hooks/useAffiliateLink';
import { LANDERS } from '@/config/landers';
import TikTokPixel from '@/components/TikTokPixel';

const config = LANDERS.venmott;

const Step1: React.FC<{ onContinue: () => void }> = ({ onContinue }) => {
  return (
    <div className="step1-card bg-white/95 rounded-3xl p-6 max-w-[420px] w-full shadow-[0_10px_30px_rgba(0,122,255,0.1)] border border-[#eef4ff] z-[2] relative backdrop-blur-[10px] animate-[cardFloat_3s_ease-in-out_infinite]">
      <div className="text-[1.7rem] font-extrabold text-center mb-4 text-black">Quick Eligibility Check</div>

      <p className="text-[1.1rem] text-center mb-4">
        Are you at least 18 years old?
      </p>

      <button
        className="bg-[#008CFF] text-white border-none py-[1.1rem] px-4 rounded-[50px] font-extrabold text-[1.2rem] w-full cursor-pointer mt-4 text-center shadow-[0_10px_80px_#eef4ff] transition-all duration-300 hover:-translate-y-1"
        onClick={onContinue}
      >
        Yes, Continue →
      </button>
    </div>
  );
};

const Step2: React.FC<{ link: string }> = ({ link }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const end = 1000;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentValue = progress * end;
      setCounter(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const handleSignUpClick = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('ClickButton', {
        content_name: 'Sign Up Button',
        content_category: 'CTA'
      });

      (window as any).ttq.track('InitiateCheckout');
    }
  };

  return (
    <div className="reward-card bg-white/95 rounded-3xl p-6 max-w-[420px] w-full shadow-[0_10px_30px_rgba(0,122,255,0.1)] border border-[#eef4ff] z-[2] relative backdrop-blur-[10px] animate-[cardFloat_3s_ease-in-out_infinite]">
      <div className="text-center mb-4 pb-4 border-b border-[rgba(0,122,255,0.1)]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Venmo_Logo.svg/1280px-Venmo_Logo.svg.png"
          className="w-[200px] block mx-auto"
          alt="Venmo"
        />
      </div>

      <div className="text-[2.5rem] font-bold text-center text-[#008CFF]">
        <span>$</span>
        <span>{counter.toFixed(2)}</span>
      </div>
      <div className="text-center text-[1.3rem] mb-4 text-black">Instantly sent to you</div>

      <div className="my-5 mx-auto p-4 bg-[rgba(0,122,255,0.05)] rounded-2xl border border-[#008CFF]">
        <div className="flex items-center gap-3 py-2.5 text-base text-black font-semibold">
          <span className="bg-[#008CFF] text-white w-7 h-7 rounded-full flex items-center justify-center">1</span>
          <span>Click the "Sign Up" to start</span>
        </div>
        <div className="flex items-center gap-3 py-2.5 text-base text-black font-semibold">
          <span className="bg-[#008CFF] text-white w-7 h-7 rounded-full flex items-center justify-center">2</span>
          <span>Provide a valid email adress</span>
        </div>
        <div className="flex items-center gap-3 py-2.5 text-base text-black font-semibold">
          <span className="bg-[#008CFF] text-white w-7 h-7 rounded-full flex items-center justify-center">3</span>
          <span>Complete 3-5 recommended deals</span>
        </div>
        <div className="flex items-center gap-3 py-2.5 text-base text-black font-semibold">
          <span className="bg-[#008CFF] text-white w-7 h-7 rounded-full flex items-center justify-center">4</span>
          <span>Start recieving your Venmo payments</span>
        </div>
      </div>

      <a
        href={link}
        onClick={handleSignUpClick}
        className="bg-[#008CFF] text-white border-none py-[1.1rem] px-4 rounded-[50px] font-extrabold text-[1.2rem] w-full mt-4 text-center block shadow-[0_10px_80px_#eef4ff] transition-all duration-300 no-underline hover:-translate-y-1"
      >
        Sign Up
      </a>
    </div>
  );
};

export default function VenMottLander() {
  const [step, setStep] = useState<1 | 2>(1);
  const affiliateLink = useAffiliateLink(config.baseAffiliateUrl);

  const handleContinue = () => {
    setStep(2);

    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('ViewContent');
    }

    window.scrollTo(0, 0);
  };

  return (
    <>
      <TikTokPixel pixelId={config.pixelId} />
      <div
        className="bg-black min-h-screen flex items-center justify-center p-5 overflow-hidden text-[#2f3033] font-['-apple-system',_'BlinkMacSystemFont',_'Segoe_UI',_'Roboto',_sans-serif]"
        style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}
      >
        <canvas className="fixed w-full h-full top-0 left-0 z-[1]" id="particles-js" />

        {step === 1 ? (
          <Step1 onContinue={handleContinue} />
        ) : (
          <Step2 link={affiliateLink} />
        )}

        <style jsx>{`
          @keyframes cardFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  );
}
