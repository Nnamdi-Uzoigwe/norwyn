import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import WhyWeDifferent from "@/components/home/WhyWeDifferent";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <IntroSection />
        <WhyWeDifferent />
        <WhoWeHelp />
        <CTASection />
    </div>
  );
}
