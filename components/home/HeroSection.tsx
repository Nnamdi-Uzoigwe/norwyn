import Hero from "./ui/Hero";

export default function HeroSection() {
  return (
    <div>
      <Hero
        backgroundImage="/home-hero.jpg"
        title="Lost Funds to Crypto or Investment Fraud?"
        subtitle="We Pursue Crypto & Investment Fraudsters - Relentlessly. We provide a single, coordinated solution for cryptocurrency tracing, legal action, freezing orders, and asset recovery removing complexity, guiding you every step of the way."
        ctaText="Request Immediate Case Review"
        ctaLink="/contact"
      />
    </div>
  );
}
