import { Hero } from '../components/Hero';
import { WhatIsSection } from '../components/WhatIsSection';
import { RecentActivity } from '../components/RecentActivity';
import { TeamSection } from '../components/TeamSection';
import { ParticipateSection } from '../components/ParticipateSection';
import { ClubsSection } from '../components/ClubsSection';
import { SocialMediaSection } from '../components/SocialMediaSection';

export function Home() {
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
