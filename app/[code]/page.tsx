import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getLanderByShortCode } from '@/config/landers';
import AppleLander from '@/components/landers/AppleLander';
import FreecashLander from '@/components/landers/FreecashLander';
import AritziaLander from '@/components/landers/AritziaLander';
import PlayfulLander from '@/components/landers/PlayfulLander';
import VenMottLander from '@/components/landers/VenMottLander';

interface PageProps {
  params: Promise<{ code: string }>;
}

// Component mapping by slug
const LANDER_COMPONENTS: Record<string, React.ComponentType> = {
  apple: AppleLander,
  freecash: FreecashLander,
  aritzia: AritziaLander,
  playful: PlayfulLander,
  playfulcanada: PlayfulLander, // Use same component, different config
  venmott: VenMottLander,
};

function LanderContent({ code }: { code: string }) {
  const landerConfig = getLanderByShortCode(code);

  if (!landerConfig) {
    notFound();
  }

  const LanderComponent = LANDER_COMPONENTS[landerConfig.slug];

  if (!LanderComponent) {
    notFound();
  }

  return <LanderComponent />;
}

export default async function ShortCodePage({ params }: PageProps) {
  const { code } = await params;

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    }>
      <LanderContent code={code} />
    </Suspense>
  );
}

// Generate static params for all short codes
export async function generateStaticParams() {
  const shortCodes = ['ap', 'fc', 'ar', 'pl', 'pc', 'vm'];
  return shortCodes.map((code) => ({
    code,
  }));
}
