import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getLanderBySlug } from '@/config/landers';
import AppleLander from '@/components/landers/AppleLander';
import FreecashLander from '@/components/landers/FreecashLander';
import AritziaLander from '@/components/landers/AritziaLander';
import PlayfulLander from '@/components/landers/PlayfulLander';
import VenMottLander from '@/components/landers/VenMottLander';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Component mapping
const LANDER_COMPONENTS: Record<string, React.ComponentType> = {
  apple: AppleLander,
  freecash: FreecashLander,
  aritzia: AritziaLander,
  playful: PlayfulLander,
  playfulcanada: PlayfulLander, // Use same component, different config
  venmott: VenMottLander,
};

function LanderContent({ slug }: { slug: string }) {
  const landerConfig = getLanderBySlug(slug);

  if (!landerConfig) {
    notFound();
  }

  const LanderComponent = LANDER_COMPONENTS[slug];

  if (!LanderComponent) {
    notFound();
  }

  return <LanderComponent />;
}

export default async function LanderPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    }>
      <LanderContent slug={slug} />
    </Suspense>
  );
}

// Generate static params for all landers
export async function generateStaticParams() {
  return Object.keys(LANDER_COMPONENTS).map((slug) => ({
    slug,
  }));
}
