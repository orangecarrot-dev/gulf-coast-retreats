import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Sarah M.",
    date: "January 2026",
    rating: 5,
    text: "Absolutely stunning condo right on the beach! The sunset views from the balcony were unreal. Everything was spotless and the hosts were incredibly responsive. We'll definitely be back!",
  },
  {
    name: "James & Lisa K.",
    date: "December 2025",
    rating: 5,
    text: "Best vacation rental we've ever stayed in. The kitchen was fully stocked, the beds were incredibly comfortable, and the pool area was gorgeous. Indian Rocks Beach is our new favorite spot.",
  },
  {
    name: "Robert T.",
    date: "November 2025",
    rating: 5,
    text: "Booking direct saved us over $200 compared to what we found on Airbnb. The condo was even better than the photos. Steps from the sand — you literally can't beat this location.",
  },
  {
    name: "Emily & Dan W.",
    date: "October 2025",
    rating: 5,
    text: "We brought our two kids and had the best family vacation. The pool was a huge hit and the beach was never crowded. The owners thought of everything — beach chairs, games, and even a great local restaurant guide!",
  },
];

const Reviews = () => (
  <section id="reviews" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-flex items-center gap-3 bg-accent/10 rounded-full px-5 py-2.5 mb-6">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-accent fill-accent" />
            ))}
          </div>
          <span className="font-heading text-lg text-foreground">4.9 / 5</span>
          <span className="text-muted-foreground text-sm">from 50+ stays</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-heading text-foreground">What Our Guests Say</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-8 border border-border/50 shadow-coastal h-full relative">
              <Quote className="h-8 w-8 text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{r.text}"</p>
              <div>
                <p className="font-medium text-foreground">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.date}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
