import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import InlineCTA from "@/components/InlineCTA";
import FeaturesGrid from "@/components/FeaturesGrid";
import AppScreenshots from "@/components/AppScreenshots";
import PrivacySection from "@/components/PrivacySection";
import FaqSection from "@/components/FaqSection";
import DownloadBanner from "@/components/DownloadBanner";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import ScrollDownloadBanner from "@/components/ScrollDownloadBanner";
import DownloadModal from "@/components/DownloadModal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorks />
        <InlineCTA
          headline="You've seen how it works. Now let it work for you."
          note="Free to download · iPhone · iOS 16 or later · No account needed"
        />
        <FeaturesGrid />
        <AppScreenshots />
        <InlineCTA headline="Stop reading about it. Start praying on time." />
        <PrivacySection />
        <FaqSection />
        <DownloadBanner />
        <DownloadCTA />
      </main>
      <Footer />
      <ScrollDownloadBanner />
      <DownloadModal />
    </>
  );
}
