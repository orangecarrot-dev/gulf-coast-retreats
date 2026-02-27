import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import hostPhoto from "@/assets/host-photo.jpg";

const AboutHost = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-4xl">
      <AnimatedSection className="text-center mb-12">
        <span className="text-primary font-medium text-sm tracking-widest uppercase">Your Hosts</span>
        <h2 className="text-3xl md:text-5xl font-heading text-foreground mt-3">Meet Mike & Sarah</h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-coastal border border-border/50 flex flex-col md:flex-row items-center gap-8">
          <img
            src={hostPhoto}
            alt="Mike and Sarah, your hosts at Indian Rocks Retreat"
            className="w-40 h-40 rounded-2xl object-cover shadow-coastal"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're Mike and Sarah — Florida locals who fell in love with Indian Rocks Beach and turned our favorite condo into a place for guests like you to enjoy. We're hands-on hosts who care about your experience, and we're always just a text or call away.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Response time: &lt; 1 hour</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-accent" />
                <span>Superhost · 50+ 5-star stays</span>
              </div>
            </div>
            <Button variant="cta" asChild>
              <a href="#availability">
                <MessageCircle className="h-4 w-4" />
                Message Us
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutHost;
