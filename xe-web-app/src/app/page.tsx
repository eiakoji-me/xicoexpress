import Hero from "@/components/home/Hero";
import PartnerPlatforms from "@/components/home/PartnerPlatforms";
import QuoteTracker from "@/components/herramientas/QouteTracker";
import Testimonials from "@/components/home/Testimonials";
import TrustedLogos from "@/components/home/TrustedLogos";

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
