import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Solutions from "@/components/sections/Solutions";
import Templates from "@/components/sections/Templates";
import Security from "@/components/sections/Security";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-brand-indigo focus:text-white focus:rounded-lg focus:text-sm focus:font-medium">
        Skip to main content
      </a>

      <Navigation />

      <div id="main-content">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Solutions />
        <Templates />
        <Security />
        <Pricing />
        <FAQ />
        <CTABand />
      </div>

      <Footer />
    </main>
  );
}
