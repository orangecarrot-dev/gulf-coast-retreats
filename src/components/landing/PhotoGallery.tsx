import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

import galleryLiving from "@/assets/gallery-living.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryBedroom2 from "@/assets/gallery-bedroom2.jpg";
import galleryBedroom3 from "@/assets/gallery-bedroom3.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryBathroom2 from "@/assets/gallery-bathroom2.jpg";
import galleryBalcony from "@/assets/gallery-balcony.jpg";
import galleryPool from "@/assets/gallery-pool.jpg";
import galleryPool2 from "@/assets/gallery-pool2.jpg";
import galleryBeach from "@/assets/gallery-beach.jpg";
import galleryBuilding from "@/assets/gallery-building.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import zillowBeach from "@/assets/zillow-beach.jpg";
import zillowSunset from "@/assets/zillow-sunset.jpg";
import zillowPool from "@/assets/zillow-pool.jpg";
import zillowBeachChairs from "@/assets/zillow-beach-chairs.jpg";
import zillowLivingBalcony from "@/assets/zillow-living-balcony.jpg";
import zillowPatioGrill from "@/assets/zillow-patio-grill.jpg";
import zillowBuilding from "@/assets/zillow-building.jpg";
import zillowAerial from "@/assets/zillow-aerial.jpg";
import zillowLivingOpen from "@/assets/zillow-living-open.jpg";
import zillowDeck from "@/assets/zillow-deck.jpg";
import zillowParking from "@/assets/zillow-parking.jpg";
import zillowBeachSunset from "@/assets/zillow-beach-sunset.jpg";

type Photo = { src: string; alt: string; label: string };

const categories: { name: string; photos: Photo[] }[] = [
  {
    name: "Living Space",
    photos: [
      { src: galleryLiving, alt: "Living room with comfortable seating", label: "Living Room" },
      { src: zillowLivingOpen, alt: "Open concept living and kitchen area", label: "Open Floor Plan" },
      { src: zillowLivingBalcony, alt: "Living room with balcony ocean view", label: "Living Room View" },
    ],
  },
  {
    name: "Bedrooms",
    photos: [
      { src: galleryBedroom, alt: "Master bedroom with king bed", label: "Master Bedroom" },
      { src: galleryBedroom3, alt: "Master bedroom alternate view", label: "Master Bedroom" },
      { src: galleryBedroom2, alt: "Second bedroom with queen and bunk beds", label: "2nd Bedroom" },
    ],
  },
  {
    name: "Kitchen & Dining",
    photos: [
      { src: galleryKitchen, alt: "Fully equipped kitchen", label: "Kitchen" },
      { src: galleryDining, alt: "Dining area", label: "Dining Area" },
    ],
  },
  {
    name: "Bathrooms",
    photos: [
      { src: galleryBathroom, alt: "Master bathroom", label: "Master Bath" },
      { src: galleryBathroom2, alt: "Second bathroom", label: "2nd Bath" },
    ],
  },
  {
    name: "Outdoor & Pool",
    photos: [
      { src: galleryPool, alt: "Beachfront heated pool", label: "Heated Pool" },
      { src: galleryPool2, alt: "Pool area with ocean view", label: "Pool Area" },
      { src: zillowPool, alt: "Pool and deck area", label: "Pool Deck" },
      { src: galleryBalcony, alt: "Balcony patio set with sunset view", label: "Balcony" },
      { src: zillowPatioGrill, alt: "Patio area with BBQ grill", label: "Patio & Grill" },
      { src: zillowDeck, alt: "Front deck area", label: "Deck" },
    ],
  },
  {
    name: "Beach & Views",
    photos: [
      { src: zillowBeach, alt: "Indian Rocks Beach shoreline", label: "Beach" },
      { src: zillowBeachChairs, alt: "Beach with chairs and umbrellas", label: "Beach Chairs" },
      { src: zillowSunset, alt: "Beautiful sunset on the beach", label: "Sunset" },
      { src: zillowBeachSunset, alt: "Gulf sunset from the shore", label: "Gulf Sunset" },
      { src: galleryBeach, alt: "Beach view from the building", label: "Beach View" },
      { src: zillowAerial, alt: "Aerial view of waterfront location", label: "Aerial View" },
    ],
  },
  {
    name: "Building & Parking",
    photos: [
      { src: galleryBuilding, alt: "Building view from the beach", label: "Building" },
      { src: zillowBuilding, alt: "Condo building exterior", label: "Exterior" },
      { src: zillowParking, alt: "Reserved double parking spot", label: "Parking" },
    ],
  },
];

const allPhotos = categories.flatMap((c) => c.photos);

const PhotoGallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const displayPhotos = activeCategory === "All"
    ? allPhotos
    : categories.find((c) => c.name === activeCategory)?.photos || [];

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + displayPhotos.length) % displayPhotos.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-10">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Gallery</span>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">See What Awaits You</h2>
        </AnimatedSection>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", ...categories.map((c) => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {displayPhotos.map((photo, i) => (
            <AnimatedSection key={`${activeCategory}-${i}`} delay={i * 0.03}>
              <button
                onClick={() => setLightbox(i)}
                className="relative overflow-hidden rounded-xl group cursor-pointer block w-full"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end">
                  <span className="text-primary-foreground font-medium text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.label}
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">{displayPhotos.length} photos</p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground z-10">
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 text-primary-foreground/80 hover:text-primary-foreground z-10"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground z-10"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={displayPhotos[lightbox].src}
              alt={displayPhotos[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 text-primary-foreground/80 text-sm">
              {lightbox + 1} / {displayPhotos.length} — {displayPhotos[lightbox].label}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
