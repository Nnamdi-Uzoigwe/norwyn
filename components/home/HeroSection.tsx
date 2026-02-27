import Hero from "./ui/Hero";

export default function HeroSection() {
  return (
    <div>
      <Hero
        backgroundImage="/home-hero.jpg"
        title="Have You Been Affected by Financial Fraud?"
        subtitle="We provide regulated forensic asset tracing services across both traditional financial systems and digital environments. Our specialists deliver comprehensive blockchain and financial analysis to support cryptocurrency investigations, legal proceedings, asset freezing orders, and recovery efforts. We simplify complex financial and digital structures, guiding you with clarity and expertise at every stage of the process."
        ctaText="Request Immediate Case Review"
        ctaLink="/contact"
      />
    </div>
  );
}
