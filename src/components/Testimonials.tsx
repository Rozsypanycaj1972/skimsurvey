const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Austin, TX",
    quote: "I was skeptical at first, but after completing everything over a weekend, I actually got the gift card. Bought myself some new loungewear and still have credit left.",
  },
  {
    name: "Jennifer Cole",
    location: "Denver, CO",
    quote: "The survey was easy. The tasks took me about two days total, but it was worth it. I've been wanting to try Skims for months.",
  },
  {
    name: "Amanda Torres",
    location: "Miami, FL",
    quote: "Got my card after about a week. Used it to buy Christmas gifts for my sisters. They were so happy with their new pajama sets.",
  },
  {
    name: "Rachel Kim",
    location: "Seattle, WA",
    quote: "Honestly thought it was too good to be true. But I followed all the steps and got my $750. Really nice way to save on quality basics.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl text-center font-light mb-14">
          Real People, Real Results
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card p-6 rounded-2xl border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="font-body text-sm text-foreground leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-display text-lg">{testimonial.name}</p>
                <p className="font-body text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
