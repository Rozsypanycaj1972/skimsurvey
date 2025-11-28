import { Button } from "@/components/ui/button";

const OFFER_LINK = "https://glctrk.org/aff_c?offer_id=1198&aff_id=3866&source=SCSkims";

const benefits = [
  {
    title: "Everyday Essentials",
    description: "Stock up on comfortable bras, underwear, and shapewear for daily wear.",
  },
  {
    title: "Loungewear Collection",
    description: "Treat yourself to cozy pajamas, robes, and relaxation pieces.",
  },
  {
    title: "Seasonal Styles",
    description: "Explore new arrivals and limited edition collections without worrying about the price.",
  },
  {
    title: "Gift for Others",
    description: "Share the comfort with friends and family for any occasion.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-28 bg-skims-beige">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl text-center font-light mb-6">
          What You Can Get
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-lg mx-auto mb-14">
          $750 goes a long way at Skims. Here's how you can spend your gift card.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-14">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-background p-6 rounded-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display text-xl mb-2">{benefit.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <a href={OFFER_LINK} target="_blank" rel="noopener noreferrer">
              Claim Your Gift Card
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
