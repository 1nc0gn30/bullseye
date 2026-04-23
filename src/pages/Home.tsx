import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import DataVisuals from '../components/DataVisuals';
import Features from '../components/Features';

interface HomeProps {
  onCtaClick: () => void;
}

export default function Home({ onCtaClick }: HomeProps) {
  return (
    <>
      <Hero onCtaClick={onCtaClick} />
      <ProblemSection />
      <Features />
      <DataVisuals />
    </>
  );
}
