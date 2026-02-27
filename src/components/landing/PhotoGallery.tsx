import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

// Airbnb original images (already downloaded)
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
import heroImg from "@/assets/hero.jpg";

// Additional Airbnb images
import airbnb0ff7 from "@/assets/airbnb-0ff7f8bd.jpg";
import airbnb2668 from "@/assets/airbnb-2668af3a.jpg";
import airbnb34eb from "@/assets/airbnb-34eb3346.jpg";
import airbnb44c4 from "@/assets/airbnb-44c4b69c.jpg";
import airbnb5347 from "@/assets/airbnb-5347bb22.jpg";
import airbnb5b8e from "@/assets/airbnb-5b8ee43a.jpg";
import airbnb6c96 from "@/assets/airbnb-6c96b99d.jpg";
import airbnb752f from "@/assets/airbnb-752fa87f.jpg";
import airbnb7f84 from "@/assets/airbnb-7f844ff7.jpg";
import airbnb8bf1 from "@/assets/airbnb-8bf11894.jpg";
import airbnbBd0a from "@/assets/airbnb-bd0a267c.jpg";
import airbnbBecb from "@/assets/airbnb-becb3da7.jpg";
import airbnbCfbe from "@/assets/airbnb-cfbe4746.jpg";
import airbnbD3fe from "@/assets/airbnb-d3fe558a.jpg";
import airbnbDe26 from "@/assets/airbnb-de269216.jpg";
import airbnbF194 from "@/assets/airbnb-f1949364.jpg";
import airbnbF384 from "@/assets/airbnb-f3841632.jpg";

type Photo = { src: string; alt: string; label: string };

const categories: { name: string; photos: Photo[] }[] = [
  {
    name: "Living Space",
    photos: [
      { src: galleryLiving, alt: "Living room with comfortable seating", label: "Living Room" },
      { src: galleryDining, alt: "Dining area", label: "Dining Area" },
      { src: airbnbBd0a, alt: "Beach towel storage cabinet", label: "Towel Storage" },
      { src: airbnb752f, alt: "Beach-themed wall decor", label: "Decor" },
    ],
  },
  {
    name: "Master Bedroom",
    photos: [
      { src: galleryBedroom, alt: "Master bedroom with king bed", label: "King Bed" },
      { src: galleryBedroom3, alt: "Master bedroom alternate angle", label: "Master Bedroom" },
      { src: airbnb6c96, alt: "Master bedroom with ceiling fan", label: "Master Bedroom" },
      { src: airbnb8bf1, alt: "Master bedroom with dresser", label: "Master Bedroom" },
      { src: airbnbBecb, alt: "Master bedroom wide view", label: "Master Bedroom" },
      { src: airbnbCfbe, alt: "Master bedroom from doorway", label: "Master Bedroom" },
    ],
  },
  {
    name: "2nd Bedroom",
    photos: [
      { src: galleryBedroom2, alt: "2nd bedroom with queen and bunk beds", label: "Queen + Bunks" },
      { src: airbnb44c4, alt: "2nd bedroom queen and bunk layout", label: "Queen + Bunks" },
      { src: airbnb5347, alt: "2nd bedroom bunk beds closeup", label: "Bunk Beds" },
      { src: airbnb7f84, alt: "2nd bedroom from doorway with TV", label: "2nd Bedroom" },
      { src: airbnbD3fe, alt: "2nd bedroom closet and bunk view", label: "2nd Bedroom" },
    ],
  },
  {
    name: "Kitchen",
    photos: [
      { src: galleryKitchen, alt: "Fully equipped kitchen", label: "Kitchen" },
    ],
  },
  {
    name: "Bathrooms",
    photos: [
      { src: galleryBathroom, alt: "Master bathroom", label: "Master Bath" },
      { src: galleryBathroom2, alt: "Second bathroom", label: "2nd Bath" },
      { src: airbnb34eb, alt: "Full bathroom with tub/shower", label: "Bathroom" },
      { src: airbnb5b8e, alt: "Bathroom vanity and mirror", label: "Vanity" },
      { src: airbnbDe26, alt: "Tub/shower with frosted window", label: "Tub/Shower" },
    ],
  },
  {
    name: "Balcony & Outdoor",
    photos: [
      { src: galleryBalcony, alt: "Balcony patio set with sunset view", label: "Balcony" },
      { src: airbnb0ff7, alt: "Balcony view with peek-a-boo ocean glimpse", label: "Ocean Peek" },
      { src: airbnb2668, alt: "Covered balcony with seating", label: "Balcony Seating" },
      { src: airbnbF194, alt: "Covered porch with chairs and table", label: "Porch" },
      { src: airbnbF384, alt: "Common area with lawn chairs and ocean view", label: "Common Area" },
    ],
  },
  {
    name: "Pool & Beach",
    photos: [
      { src: galleryPool, alt: "Beachfront heated pool", label: "Heated Pool" },
      { src: galleryPool2, alt: "Pool area with ocean view", label: "Pool Area" },
      { src: heroImg, alt: "Gorgeous sunset on the beach steps from the condo", label: "Beach Sunset" },
      { src: galleryBeach, alt: "Beach view from the building", label: "Beach View" },
      { src: galleryBuilding, alt: "Building view from the beach", label: "Building" },
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
              onClick={() => { setActiveCategory(cat); setLightbox(null); }}
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
