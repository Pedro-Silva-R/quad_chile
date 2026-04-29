import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { WhatIsSection } from '../components/WhatIsSection';
import { RecentActivity } from '../components/RecentActivity';
import { TeamSection } from '../components/TeamSection';
import { ParticipateSection } from '../components/ParticipateSection';
import { ClubsSection } from '../components/ClubsSection';
import { SocialMediaSection } from '../components/SocialMediaSection';

export function Home() {
  useEffect(() => {
    document.title = 'Quad Rugby Chile | La casa del rugby en silla de ruedas de Chile';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Sitio oficial de Quad Rugby Chile. Rugby en silla de ruedas: un deporte de impacto, estrategia y alto rendimiento. Conoce a la selección, clubes y cómo participar.'
      );
    }
  }, []);

  return (
    <>
      <Hero />
      <WhatIsSection />
      <RecentActivity />
      <TeamSection />
      <ParticipateSection />
      <ClubsSection />
      <SocialMediaSection />
    </>
  );
}
