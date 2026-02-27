import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Award, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import hostPhoto from "@/assets/host-photo.jpg";

const AboutHost = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-4xl">
      <AnimatedSection className="text-center mb-12">
        <span className="text-primary font-medium text-sm tracking-widest uppercase">Your Host</span>
        <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">Meet Stuart</h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-coastal border border-border/50 flex flex-col md:flex-row items-center gap-8">
          <img
            src={hostPhoto}
            alt="Stuart, your host at Indian Rocks Retreat"
            className="w-40 h-40 rounded-2xl object-cover shadow-coastal"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hi, I'm Stuart — a Tampa, Florida local and your host at Indian Rocks Retreat. I've been hosting guests for over 6 years and love sharing this beautiful slice of the Gulf Coast. I'm always just a message away and pride myself on a 100% response rate, typically within an hour. Whether you need restaurant recommendations or help with anything at the condo, I'm here for you.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Responds within an hour</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-accent" />
                <span>6 years hosting · 112 reviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Identity verified</span>
              </div>
            </div>
            <Button variant="cta" asChild>
              <a href="#availability">
                <MessageCircle className="h-4 w-4" />
                Message Stuart
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutHost;
