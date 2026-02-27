import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhyBookDirect from "@/components/landing/WhyBookDirect";
import PhotoGallery from "@/components/landing/PhotoGallery";
import PropertyOverview from "@/components/landing/PropertyOverview";
import Amenities from "@/components/landing/Amenities";
import LocationAttractions from "@/components/landing/LocationAttractions";
import Reviews from "@/components/landing/Reviews";
import AvailabilityCalendar from "@/components/landing/AvailabilityCalendar";
import HouseRules from "@/components/landing/HouseRules";
import FAQ from "@/components/landing/FAQ";
import AboutHost from "@/components/landing/AboutHost";
import Footer from "@/components/landing/Footer";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyBookDirect />
        <PhotoGallery />
        <PropertyOverview />
        <Amenities />
        <LocationAttractions />
        <Reviews />
        <AvailabilityCalendar />
        <HouseRules />
        <FAQ />
        <AboutHost />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default Index;
