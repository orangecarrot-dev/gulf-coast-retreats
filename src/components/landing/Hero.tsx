import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Indian Rocks Beach beachfront condo with Gulf of Mexico views"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-primary-foreground/20">
            <Star className="h-4 w-4 text-accent fill-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">4.9/5 from 50+ stays</span>
            <span className="text-primary-foreground/50">•</span>
            <MapPin className="h-4 w-4 text-primary-foreground/70" />
            <span className="text-primary-foreground/90 text-sm">Indian Rocks Beach, FL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading text-primary-foreground mb-6 leading-tight">
            Your Gulf Coast<br />Getaway Awaits
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto font-body leading-relaxed">
            Steps from the sand. Book direct and save 15–20% versus Airbnb & VRBO — no service fees, no middleman.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#availability">Book Direct & Save</a>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <a href="#gallery">Explore the Property</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
