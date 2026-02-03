import Navigation from "@/components/Navigation";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Core Offering - The 100% Energy Reset */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Premium Wellness Series</p>
            <h1 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight">
              The 100% Energy Reset
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              A 6-Course Journey to Reclaim Your Vitality and Reset Your Peace
            </p>
          </div>

          {/* The Challenge */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-center text-foreground">The Challenge</h2>
            <p className="text-center text-lg text-muted-foreground font-light">
              High performance often leads to chronic "wired but tired" over-activation
            </p>
            <ul className="space-y-3 text-muted-foreground font-light max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Living in a state of "fight or flight," even when resting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Burnout caused by a suppressed parasympathetic nervous system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Physical tension and shallow breathing as a daily baseline</span>
              </li>
            </ul>
          </div>

          {/* 6 Courses */}
          <div className="space-y-12">
            <h2 className="text-2xl md:text-3xl font-normal text-center text-foreground">The 6-Course Journey</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">01</span>
                  <h3 className="text-xl font-normal text-foreground">The Awakening</h3>
                </div>
                <p className="text-sm text-muted-foreground font-light">Rhythmic Vinyasa — Breath-synchronized movements to build internal heat and reset your metabolic baseline.</p>
              </article>

              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">02</span>
                  <h3 className="text-xl font-normal text-foreground">The Empowered Self</h3>
                </div>
                <p className="text-sm text-muted-foreground font-light">Yoga Sculpt — Functional movement with light resistance for metabolic boost and physical resilience.</p>
              </article>

              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">03</span>
                  <h3 className="text-xl font-normal text-foreground">The Inner Balance</h3>
                </div>
                <p className="text-sm text-muted-foreground font-light">Chakra Flow — Align the body's 7 energy centers to remove emotional blockages and restore flow.</p>
              </article>

              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">04</span>
                  <h3 className="text-xl font-normal text-foreground">The Art of Letting Go</h3>
                </div>
                <p className="text-sm text-muted-foreground font-light">Sedona Method Flow — Integrating gentle flow with emotional release techniques for mental clarity.</p>
              </article>

              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">05</span>
                  <h3 className="text-xl font-normal text-foreground">The Deep Reset</h3>
                </div>
                <p className="text-sm text-muted-foreground font-light">Restorative Yoga — Passive, long-held postures for profound cellular recovery and cortisol reduction.</p>
              </article>

              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">06</span>
                  <h3 className="text-xl font-normal text-foreground">The Full Radiance</h3>
                </div>
                <p className="text-sm text-muted-foreground font-light">Integration — A synthesized flow combining all elements for sustainable vitality and intentional living.</p>
              </article>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-accent/10 rounded-2xl p-8 md:p-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-normal text-center text-foreground">Program Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <p className="text-2xl font-normal text-foreground">6 Weeks</p>
                <p className="text-sm text-muted-foreground font-light">Duration</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-normal text-foreground">Hybrid</p>
                <p className="text-sm text-muted-foreground font-light">In-Studio & Online</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-normal text-foreground">March 2026</p>
                <p className="text-sm text-muted-foreground font-light">Next Cohort</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-normal text-foreground">Premium</p>
                <p className="text-sm text-muted-foreground font-light">Investment Tier</p>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <a href="https://calendly.com/dingyuhu/20-mins-chat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Reserve Your Spot
              </a>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-center text-xl md:text-2xl text-muted-foreground font-light italic max-w-2xl mx-auto">
            "Rest is not a reward for your work; it is the foundation of it."
          </blockquote>
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
