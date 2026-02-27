import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Sarah",
    location: "Lebanon, Kentucky",
    date: "May 2025",
    rating: 4,
    text: "This condo is as described in the pictures. The owners were VERY helpful - we had an AC issue and beach closet issue and they were quick to help! There are many restaurants within walking distance. The pool is great and is shaded until about noon, great for kids! Indian Rocks Beach is a lot less crowded than Clearwater and a great place to bring kids! We will be back.",
  },
  {
    name: "Jennifer",
    location: "Airbnb Guest",
    date: "July 2025",
    rating: 5,
    text: "Very beautiful and they were very helpful. Supplied the travel crib for my grandson and had everything you would need for the beach or the pool. Thank you so much for the memories!",
  },
  {
    name: "Polly",
    location: "Madison Lake, Minnesota",
    date: "April 2025",
    rating: 5,
    text: "Great location on IRB and it's nice to have a pool for the kids on top of the beautiful beach. Even though the balcony doesn't have a great view it's a nice place for a cup of coffee and steps from the beach.",
  },
  {
    name: "Marie",
    location: "De Pere, Wisconsin",
    date: "March 2025",
    rating: 4,
    text: "Place as described. Parking is ideal. Had all items needed for cooking meals, washing laundry, etc. Beach chairs and towels on hand. Pool and beach were clean and we were always able to find a spot for our group of 4-8 people. Wonderful for a low key beach vacation.",
  },
  {
    name: "Brian",
    location: "Elm Grove, Wisconsin",
    date: "December 2025",
    rating: 4,
    text: "Decent place close to beach. Clean and convenient. Nice neighborhood. The location is hard to beat for the price.",
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
          <span className="font-heading text-lg text-foreground">4.85 / 5</span>
          <span className="text-muted-foreground text-sm">from 112 reviews</span>
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
                <p className="text-sm text-muted-foreground">{r.location} · {r.date}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
