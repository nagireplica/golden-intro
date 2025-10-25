import Navigation from "@/components/Navigation";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Previous Projects Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-16">
          <h1 className="text-3xl md:text-4xl font-light text-center text-foreground">
            Previous Projects
          </h1>

          <div className="space-y-12">
            {/* Environmental Literacy & Conservation */}
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-background via-primary/5 to-background border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
              <h3 className="text-2xl font-light text-foreground">Environmental Literacy & Conservation</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                As the lead researcher at the University of Maryland (EPA-funded), I direct the end-to-end research strategy for three platforms (1.5M+ users). My work drives core conservation behaviors and informs policy by delivering actionable insights. I also mentor and upskill EPA staff, embedding UX best practices across the organization.
              </p>
            </div>

            {/* Roku Sports */}
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-background via-primary/5 to-background border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
              <h3 className="text-2xl font-light text-foreground">Roku Sports Zone (50M+ Users)</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                At Roku, I owned the foundational research roadmap for the 50M+ user Sports Zone. My strategic insights directly shaped the product launch and unlocked key partnership opportunities with global brands like Nike and Google, driving significant ecosystem growth.
              </p>
            </div>

            {/* Cisco */}
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-background via-primary/5 to-background border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
              <h3 className="text-2xl font-light text-foreground">Cisco</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Working in technology infrastructure and networking solutions, developing skills in systematic thinking and complex problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} · Crafted with intention
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
