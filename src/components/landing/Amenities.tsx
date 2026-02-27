import {
  Umbrella, Waves, Sun, Flame, Coffee, UtensilsCrossed, Tv,
  Wifi, Wind, WashingMachine, Car, Lock, Shirt, Baby,
  Thermometer, ShieldCheck, Droplets, ChefHat, Armchair,
  Bath, Home
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Beach & Outdoor",
    items: [
      { icon: Waves, label: "Beachfront Access" },
      { icon: Home, label: "Waterfront Location" },
      { icon: Sun, label: "Heated Pool" },
      { icon: Umbrella, label: "Beach Chairs & Towels" },
      { icon: Flame, label: "BBQ Grill" },
      { icon: Armchair, label: "Private Balcony" },
      { icon: Droplets, label: "Outdoor Shower" },
    ],
  },
  {
    title: "Kitchen & Dining",
    items: [
      { icon: ChefHat, label: "Full Kitchen" },
      { icon: UtensilsCrossed, label: "Dishes & Silverware" },
      { icon: Coffee, label: "Coffee Maker" },
      { icon: UtensilsCrossed, label: "Stove & Oven" },
      { icon: UtensilsCrossed, label: "Dishwasher" },
      { icon: UtensilsCrossed, label: "Microwave" },
      { icon: UtensilsCrossed, label: "Refrigerator & Freezer" },
      { icon: UtensilsCrossed, label: "Toaster & Kettle" },
    ],
  },
  {
    title: "Comfort & Tech",
    items: [
      { icon: Wind, label: "Central A/C & Heating" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Tv, label: "TV" },
      { icon: WashingMachine, label: "Washer & Dryer (In Unit)" },
      { icon: Shirt, label: "Bed Linens & Towels" },
      { icon: Bath, label: "Bathtub & Hair Dryer" },
      { icon: UtensilsCrossed, label: "Iron" },
    ],
  },
  {
    title: "Family & Safety",
    items: [
      { icon: Baby, label: "Pack 'n Play / Travel Crib" },
      { icon: Baby, label: "High Chair" },
      { icon: Car, label: "Free Double Parking" },
      { icon: Lock, label: "Self Check-in (Keypad)" },
      { icon: Home, label: "Private Entrance" },
      { icon: ShieldCheck, label: "Smoke & CO Alarms" },
      { icon: Thermometer, label: "Fire Extinguisher" },
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
