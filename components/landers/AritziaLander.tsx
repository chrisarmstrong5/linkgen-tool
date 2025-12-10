'use client';

import React, { useState, useEffect } from 'react';
import { useAffiliateLink } from '@/hooks/useAffiliateLink';
import { LANDERS } from '@/config/landers';
import TikTokPixel from '@/components/TikTokPixel';

const config = LANDERS.aritzia;

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  update(): void;
  draw(): void;
}

const AgeVerification: React.FC<{ onAccept: () => void }> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-5" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #faf8f9 50%, #f5e6e8 100%)' }}>
      <div className="bg-white/98 rounded-2xl p-10 max-w-[420px] w-full shadow-[0_20px_60px_rgba(0,0,0,0.12),_0_8px_24px_rgba(0,0,0,0.08)] border border-[rgba(245,230,232,0.5)] text-center">
        <img
          alt="Aritzia"
          className="w-full max-w-[160px] h-auto block mx-auto mb-6 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Montserrat, sans-serif' font-size='28' font-weight='400' letter-spacing='8' fill='%23000000'%3EARITZIA%3C/text%3E%3C/svg%3E"
        />
        <h1 className="text-xl font-medium text-black mb-3 tracking-wide">Quick Eligibility Check</h1>
        <p className="text-sm font-normal text-[#666] mb-8 leading-relaxed">Are you at least 18 years old?</p>
        <button
          className="bg-black text-white border-none py-4 px-8 rounded-xl font-medium text-[15px] w-full cursor-pointer block shadow-[0_12px_32px_rgba(0,0,0,0.2),_0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] tracking-[2px] uppercase hover:bg-[#333333] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25),_0_6px_16px_rgba(0,0,0,0.2)] active:translate-y-0"
          onClick={onAccept}
        >
          Yes, Continue →
        </button>
      </div>
    </div>
  );
};

const ParticleCanvas: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 40;

    class ParticleObj implements Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > (canvas?.width || 0)) this.x = 0;
        if (this.x < 0) this.x = canvas?.width || 0;
        if (this.y > (canvas?.height || 0)) this.y = 0;
        if (this.y < 0) this.y = canvas?.height || 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new ParticleObj());
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed w-full h-full z-[1]"
    />
  );
};

const NotificationBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState('Sarah M.');

  const names = [
    'Sarah M.', 'Jessica L.', 'Emily R.', 'Ashley K.',
    'Madison T.', 'Taylor S.', 'Morgan B.', 'Jordan P.'
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setCurrentName(randomName);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 4000);
    };

    const timer1 = setTimeout(showNotification, 2000);
    const interval = setInterval(showNotification, 8000);

    return () => {
      clearTimeout(timer1);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-2.5 left-1/2 -translate-x-1/2 bg-white/98 text-black py-3 px-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center gap-3 text-sm font-medium z-[1000] w-[calc(100%-2rem)] max-w-[360px] backdrop-blur-[10px] border border-black/[0.06] animate-[slideDown_0.3s_ease-out]">
      <span className="text-xl">✨</span>
      <div className="font-normal">
        <span className="font-semibold">{currentName}</span> claimed $500!
      </div>
    </div>
  );
};

const MainCard: React.FC<{ link: string }> = ({ link }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-[15px] relative z-[2]">
      <div className="bg-white/98 rounded-2xl p-7 px-6 max-w-[480px] w-full shadow-[0_20px_60px_rgba(0,0,0,0.12),_0_8px_24px_rgba(0,0,0,0.08)] border border-[rgba(245,230,232,0.5)] animate-[cardFloat_4s_ease-in-out_infinite]">
        <div className="text-center mb-5 pb-4 border-b border-black/[0.08]">
          <img
            alt="Aritzia Rewards"
            className="w-full max-w-[140px] h-auto block mx-auto mb-3 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Montserrat, sans-serif' font-size='28' font-weight='400' letter-spacing='8' fill='%23000000'%3EARITZIA%3C/text%3E%3C/svg%3E"
          />
          <div className="text-[28px] font-normal text-black tracking-[8px] uppercase mb-1.5"></div>
        </div>

        <div className="text-center">
          <div className="text-5xl font-semibold text-black my-4 mx-0 tracking-tight animate-[amountPulse_2.5s_ease_infinite]">$500.00</div>
          <div className="text-sm font-normal text-[#666] tracking-[3px] uppercase">Rewards</div>
        </div>

        <div className="my-5 mx-0 p-5 bg-[rgba(245,230,232,0.15)] rounded-xl border border-[rgba(245,230,232,0.5)]">
          <div className="flex items-start gap-3 py-2.5 text-[13px] text-black leading-relaxed">
            <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">1</span>
            <span className="font-normal pt-0.5">Click The Button Below</span>
          </div>
          <div className="flex items-start gap-3 py-2.5 text-[13px] text-black leading-relaxed">
            <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">2</span>
            <span className="font-normal pt-0.5">Enter Your Basic Info</span>
          </div>
          <div className="flex items-start gap-3 py-2.5 text-[13px] text-black leading-relaxed">
            <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">3</span>
            <span className="font-normal pt-0.5">Complete Required Offers</span>
          </div>
          <div className="flex items-start gap-3 py-2.5 text-[13px] text-black leading-relaxed">
            <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">4</span>
            <span className="font-normal pt-0.5">Claim Your $500 Aritzia Gift Card</span>
          </div>
        </div>

        <a
          href={link}
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).ttq) {
              (window as any).ttq.track('ClickButton');
            }
          }}
          className="bg-black text-white border-none py-4 px-7 rounded-xl font-medium text-[15px] w-full cursor-pointer mt-5 mb-0 block shadow-[0_12px_32px_rgba(0,0,0,0.2),_0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] tracking-[2px] uppercase text-center no-underline hover:bg-[#333333] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25),_0_6px_16px_rgba(0,0,0,0.2)] active:translate-y-0"
        >
          Get $500 Now →
        </a>
      </div>
    </div>
  );
};

export default function AritziaLander() {
  const [ageVerified, setAgeVerified] = useState(false);
  const affiliateLink = useAffiliateLink(config.baseAffiliateUrl);

  if (!ageVerified) {
    return (
      <>
        <TikTokPixel pixelId={config.pixelId} />
        <AgeVerification onAccept={() => setAgeVerified(true)} />
      </>
    );
  }

  return (
    <>
      <TikTokPixel pixelId={config.pixelId} />
      <div
        className="font-[Montserrat,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif] min-h-screen relative overflow-x-hidden text-black select-none"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #faf8f9 50%, #f5e6e8 100%)',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
        }}
      >
        <ParticleCanvas />
        <NotificationBanner />
        <MainCard link={affiliateLink} />

        <style jsx>{`
          @keyframes slideDown {
            from {
              transform: translate(-50%, -100%);
              opacity: 0;
            }
            to {
              transform: translate(-50%, 0);
              opacity: 1;
            }
          }

          @keyframes cardFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes amountPulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.03);
            }
          }
        `}</style>
      </div>
    </>
  );
}
