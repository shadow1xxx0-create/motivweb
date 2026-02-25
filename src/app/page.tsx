import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuoteShowcase from "@/components/QuoteShowcase";
import FeaturesGrid from "@/components/FeaturesGrid";
import CategoryShowcase from "@/components/CategoryShowcase";
import AppScreenshots from "@/components/AppScreenshots";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuoteShowcase />
        <FeaturesGrid />
        <CategoryShowcase />
        <AppScreenshots />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
