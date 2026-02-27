import { Shell, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    {/* CTA Banner */}
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-4xl font-heading text-primary-foreground mb-4">
          Ready to Book Your Beach Escape?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Skip the fees. Book direct and save 15–20% on your Gulf Coast getaway.
        </p>
        <Button variant="hero" size="xl" asChild>
          <a href="#availability">Book Direct & Save</a>
        </Button>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shell className="h-6 w-6 text-ocean-light" />
            <span className="font-heading text-xl">Indian Rocks Retreat</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            A premium beachfront vacation rental on Indian Rocks Beach, FL. Book direct for the best rates and personal service.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-primary-foreground/60 text-sm">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Indian Rocks Beach, FL 33785</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@indianrocksretreat.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (727) 555-0123</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
        <p>© 2026 Indian Rocks Retreat. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary-foreground/60 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
