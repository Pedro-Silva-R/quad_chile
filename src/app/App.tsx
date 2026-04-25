import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsSection } from './components/WhatIsSection';
import { RecentActivity } from './components/RecentActivity';
import { TeamSection } from './components/TeamSection';
import { ParticipateSection } from './components/ParticipateSection';
import { ClubsSection } from './components/ClubsSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Footer } from './components/Footer';

/**
 * Design Rationale:
 * Kinetic Brutalism V2: Máquina de alto rendimiento con bordes duros y claridad técnica.
 * Paleta rojo puro (#ff0000), azul (#0057ff), metal (#8a8d8f) + blanco/negro absolutos.
 * Sin gradientes decorativos, solo bloques planos. Tipografía Epilogue (display itálico en hero),
 * Space Grotesk (UI), IBM Plex Mono (technical labels). Sombras duras sin blur, bordes sólidos 3px,
 * esquinas a 0px. El rojo domina CTAs de impacto, azul para links/focus.
 */

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhatIsSection />
        <RecentActivity />
        <TeamSection />
        <ParticipateSection />
        <ClubsSection />
        <SocialMediaSection />
      </main>
      <Footer />
    </div>
  );
}