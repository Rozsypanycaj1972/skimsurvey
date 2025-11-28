import { Button } from "@/components/ui/button";

const OFFER_LINK = "https://glctrk.org/aff_c?offer_id=1198&aff_id=3866&source=SCSkims";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-skims-cream">
      <div className="container text-center py-16 md:py-24">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
          Limited Time Offer
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Get Your $750
          <br />
          <span className="italic">Skims</span> Gift Card
        </h1>
        
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Complete a short survey and a few simple tasks to receive your exclusive Skims gift card. 
          Treat yourself to premium comfort and style.
        </p>
        
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="cta" size="xl" asChild>
            <a href={OFFER_LINK} target="_blank" rel="noopener noreferrer">
              Start Survey Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
