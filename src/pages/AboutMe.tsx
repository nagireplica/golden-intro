import Navigation from "@/components/Navigation";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* About Me Section */}
          <section className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-light text-center text-foreground">
              🌸 About Me
            </h1>
            
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p className="text-center">
                Hi, I'm Dingyu — a yoga teacher and creative entrepreneur working at the intersection of science and spirituality. I blend ancient philosophical wisdom with modern psychological research to help people feel more connected, balanced, and alive.
              </p>

              <p className="text-center">
                I host yoga and mindfulness events, create content that inspires self-awareness, and collaborate with visionaries to bring healing innovations to the world — including ongoing work with a Stanford medical professor on stem cell and functional medicine projects.
              </p>

              <p className="text-center">
                At my core, I value authenticity, curiosity, compassion, and inner growth. Whether through yoga, writing, or conscious entrepreneurship, my purpose is to help others remember their wholeness and live in alignment with their highest truth. I'm currently developing projects that create the space and tools for people to discover their own inner wisdom, so they can share their unique gifts with the world.
              </p>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="space-y-8 bg-secondary/30 -mx-6 px-6 py-16 md:-mx-12 md:px-12">
            <h2 className="text-3xl md:text-4xl font-light text-center text-foreground">
              ✨ Core Values
            </h2>
            
            <div className="grid gap-8">
              <div className="space-y-3">
                <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                  <span className="text-primary">∞</span> Authenticity
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-6">
                  Living and expressing from a place of truth.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                  <span className="text-primary">∞</span> Presence
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-6">
                  Meeting each moment with awareness and compassion.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                  <span className="text-primary">∞</span> Connection
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-6">
                  Nurturing genuine bonds between self, others, and the universe.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                  <span className="text-primary">∞</span> Growth
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-6">
                  Embracing life as a spiritual and creative unfolding.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                  <span className="text-primary">∞</span> Simplicity
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-6">
                  Finding beauty in stillness and balance in everyday life.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                  <span className="text-primary">∞</span> Service
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-6">
                  Offering my work as a way to uplift and bring more light into the world.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-light text-foreground flex items-center gap-2">
                  <span className="text-primary">∞</span> Surrender
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed pl-6">
                  Surrender to flow, instead of control.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

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

export default AboutMe;
