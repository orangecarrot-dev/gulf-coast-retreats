import {
  Umbrella, Waves, Sun, Flame, Coffee, UtensilsCrossed, Tv,
  Wifi, Wind, WashingMachine, Car, Building, Lock, Shirt
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Beach & Outdoor",
    items: [
      { icon: Waves, label: "Beach Access" },
      { icon: Umbrella, label: "Beach Chairs & Umbrella" },
      { icon: Sun, label: "Heated Pool" },
      { icon: Flame, label: "Outdoor Grill" },
    ],
  },
  {
    title: "Kitchen",
    items: [
      { icon: UtensilsCrossed, label: "Full Kitchen" },
      { icon: Coffee, label: "Coffee Maker" },
      { icon: UtensilsCrossed, label: "Dishwasher" },
      { icon: UtensilsCrossed, label: "Cookware & Utensils" },
    ],
  },
  {
    title: "Comfort",
    items: [
      { icon: Wind, label: "Central A/C" },
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Tv, label: "Smart TV" },
      { icon: WashingMachine, label: "Washer & Dryer" },
      { icon: Shirt, label: "Fresh Linens" },
    ],
  },
  {
    title: "Building",
    items: [
      { icon: Car, label: "Free Parking" },
      { icon: Building, label: "Elevator" },
      { icon: Lock, label: "Secure Entry" },
    ],
  },
];

const Amenities = () => (
  <section id="amenities" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <span className="text-primary font-medium text-sm tracking-widest uppercase">Amenities</span>
        <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">Everything You Need</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, ci) => (
          <AnimatedSection key={cat.title} delay={ci * 0.1}>
            <div>
              <h3 className="font-heading text-xl text-foreground mb-5 pb-3 border-b border-border">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-muted-foreground">
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Amenities;
