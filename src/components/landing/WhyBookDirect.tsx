import { DollarSign, MessageCircle, Shield, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    icon: DollarSign,
    title: "No Service Fees",
    desc: "Save 15–20% compared to Airbnb and VRBO. You pay for the stay, nothing more.",
  },
  {
    icon: Shield,
    title: "Flexible Cancellation",
    desc: "Plans change. Our cancellation policy is straightforward and guest-friendly.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    desc: "Talk directly with your host — no bots, no delays, no corporate runaround.",
  },
  {
    icon: Award,
    title: "Best Price Guaranteed",
    desc: "You'll never find this property listed for less anywhere else. Period.",
  },
];

const WhyBookDirect = () => (
  <section id="why-book-direct" className="py-20 md:py-28 bg-gradient-sand">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <span className="text-primary font-medium text-sm tracking-widest uppercase">Why Book Direct</span>
        <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">
          Skip the Middleman, Keep the Savings
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <AnimatedSection key={b.title} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-8 shadow-coastal hover:shadow-coastal-lg transition-shadow duration-300 h-full border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyBookDirect;
