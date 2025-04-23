
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import CategoryCards from "@/components/CategoryCards";
import TrustBanner from "@/components/TrustBanner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedCollections />
        <CategoryCards />
        <TrustBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
