import Hero from "@/components/Hero";
import PartnerPlatforms from "@/components/PartnerPlatforms";
import QuoteTracker from "@/components/QouteTracker";
import Testimonials from "@/components/Testimonials";
import TrustedLogos from "@/components/TrustedLogos";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteTracker />
      <TrustedLogos />
      <Testimonials />
      <PartnerPlatforms />
    </main>
  );
}
