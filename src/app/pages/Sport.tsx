import { SportHero } from '../components/sport/SportHero';
import { SportIntro } from '../components/sport/SportIntro';
import { SportGameManual } from '../components/sport/SportGameManual';
import { SportPillars } from '../components/sport/SportPillars';
import { SportEquipment } from '../components/sport/SportEquipment';
import { SportFAQ } from '../components/sport/SportFAQ';
import { SportFooterCTA } from '../components/sport/SportFooterCTA';

export function Sport() {
  return (
    <>
      <SportHero />
      <SportIntro />
      <SportGameManual />
      <SportPillars />
      <SportEquipment />
      <SportFAQ />
      <SportFooterCTA />
    </>
  );
}
