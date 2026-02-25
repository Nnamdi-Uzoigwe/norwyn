import Hero from "./ui/Hero";

export default function HeroSection() {
  return (
    <div>
      <Hero
        backgroundImage="/home-hero.jpg"
        title="Have You Been Affected by Financial Fraud?"
        subtitle="We provide regulated forensic asset tracing services across both traditional and digital environments. Our specialists conduct detailed blockchain and financial analysis for cryptocurrency trading, legal action, freezing orders, and asset recovery, removing complexity and guiding you every step of the way"
        ctaText="Request Immediate Case Review"
        ctaLink="/contact"
      />
    </div>
  );
}
