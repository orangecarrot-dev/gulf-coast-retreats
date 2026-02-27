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

const photos = [
  { src: galleryLiving, alt: "Living space with comfortable seating", label: "Living Space" },
  { src: galleryBedroom, alt: "Master bedroom with king bed", label: "Master Bedroom" },
  { src: galleryBedroom2, alt: "Second bedroom with queen bed and twin bunk beds", label: "2nd Bedroom" },
  { src: galleryKitchen, alt: "Fully equipped kitchen", label: "Kitchen" },
  { src: galleryDining, alt: "Dining area", label: "Dining Area" },
  { src: galleryBathroom, alt: "Master bathroom", label: "Master Bath" },
  { src: galleryBathroom2, alt: "Second bathroom", label: "2nd Bath" },
  { src: galleryBalcony, alt: "Enjoy sunset from the beach or relax at the patio set", label: "Balcony" },
  { src: galleryPool, alt: "Beachfront heated pool", label: "Pool" },
  { src: galleryPool2, alt: "Pool area with ocean view", label: "Pool Area" },
  { src: galleryBeach, alt: "Beach view from the building", label: "Beach View" },
  { src: galleryBuilding, alt: "Building view from the beach", label: "Building" },
  { src: galleryBedroom3, alt: "Master bedroom alternate view", label: "Bedroom View" },
];

const PhotoGallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + photos.length) % photos.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Gallery</span>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">See What Awaits You</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <button
                onClick={() => setLightbox(i)}
                className={`relative overflow-hidden rounded-xl group cursor-pointer block w-full ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`aspect-[4/3] ${i === 0 ? "md:aspect-square" : ""}`}>
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
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
