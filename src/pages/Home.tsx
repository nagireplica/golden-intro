import { Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";
import palmsSunset from "@/assets/palms-sunset.jpg";
import turtlesBeach from "@/assets/turtles-beach.jpg";
import yogaBeach from "@/assets/yoga-beach.jpg";
import bamboo from "@/assets/bamboo.jpg";
import empty from "@/assets/empty.jpg";
import Tilt from "react-parallax-tilt";
const Home = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section with Tilt and Parallax */}
      <section className="relative w-full pb-24 md:pb-40 overflow-hidden">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} transitionSpeed={2000} scale={1.01} gyroscope={true} className="w-full h-full">
          <div className="absolute inset-0">
            {/* Single bamboo image */}
            <div className="absolute inset-0">
              <img src={bamboo} alt="Tranquil bamboo forest" className="w-full h-full object-cover" />
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/40"></div>
          </div>

          <div className="relative container mx-auto px-6 py-20 md:py-32" style={{
          transform: 'translateZ(60px)'
        }}>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-block transition-transform duration-500 hover:scale-110">
                <Leaf className="w-12 h-12 text-white mb-6 mx-auto opacity-80 drop-shadow-2xl" strokeWidth={1.5} />
              </div>

              <h1 className="text-6xl md:text-8xl font-extralight tracking-tight text-white drop-shadow-2xl transition-all duration-500 hover:scale-105 mb-8">
                Inner Compass
              </h1>

              <p className="text-lg md:text-xl text-white font-light leading-relaxed drop-shadow-lg backdrop-blur-sm bg-background/10 rounded-2xl p-8 transition-all duration-500 hover:bg-background/20 max-w-2xl mb-8">I am building community and tools that empower people to connect more deeply with themselves and their higher self. Together, we can create spaces for authentic growth and transformation.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/dingyuhu/20-mins-chat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl">Let's Connect</a>
                <a href="/about" className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 backdrop-blur-sm transition-all duration-300 border border-white/30">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </Tilt>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto h-px bg-border opacity-40"></div>
      </div>

      {/* My Philosophy */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-normal text-center text-foreground mb-12 tracking-tight">
            My Philosophy
          </h2>

          <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
            <p className="text-center text-2xl md:text-3xl font-normal text-foreground">
              Everyone is a creator.
            </p>

            <p className="text-center text-lg leading-loose max-w-2xl mx-auto">When you tap into your intuition and align with yourself, something profound happens. You become grounded in who you truly are. From this place of authentic connection, you naturally create and provide value to the world. You act from abundance, not scarcity. You play an infinite game, not a finite game.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto h-px bg-border opacity-40"></div>
      </div>

      {/* Core Offering - The 100% Energy Reset */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Premium Wellness Series</p>
            <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight">
              The 100% Energy Reset
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              A 6-Course Journey to Reclaim Your Vitality and Reset Your Peace
            </p>
          </div>

          {/* The Challenge */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 space-y-6">
            <h3 className="text-2xl md:text-3xl font-normal text-center text-foreground">The Challenge</h3>
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
            <h3 className="text-2xl md:text-3xl font-normal text-center text-foreground">The 6-Course Journey</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">01</span>
                  <h4 className="text-xl font-normal text-foreground">The Awakening</h4>
                </div>
                <p className="text-sm text-muted-foreground font-light">Rhythmic Vinyasa — Breath-synchronized movements to build internal heat and reset your metabolic baseline.</p>
              </article>

              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">02</span>
                  <h4 className="text-xl font-normal text-foreground">The Empowered Self</h4>
                </div>
                <p className="text-sm text-muted-foreground font-light">Yoga Sculpt — Functional movement with light resistance for metabolic boost and physical resilience.</p>
              </article>

              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">03</span>
                  <h4 className="text-xl font-normal text-foreground">The Inner Balance</h4>
                </div>
                <p className="text-sm text-muted-foreground font-light">Chakra Flow — Align the body's 7 energy centers to remove emotional blockages and restore flow.</p>
              </article>

              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">04</span>
                  <h4 className="text-xl font-normal text-foreground">The Art of Letting Go</h4>
                </div>
                <p className="text-sm text-muted-foreground font-light">Sedona Method Flow — Integrating gentle flow with emotional release techniques for mental clarity.</p>
              </article>

              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">05</span>
                  <h4 className="text-xl font-normal text-foreground">The Deep Reset</h4>
                </div>
                <p className="text-sm text-muted-foreground font-light">Restorative Yoga — Passive, long-held postures for profound cellular recovery and cortisol reduction.</p>
              </article>

              <article className="bg-background border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">06</span>
                  <h4 className="text-xl font-normal text-foreground">The Full Radiance</h4>
                </div>
                <p className="text-sm text-muted-foreground font-light">Integration — A synthesized flow combining all elements for sustainable vitality and intentional living.</p>
              </article>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-accent/10 rounded-2xl p-8 md:p-12 space-y-8">
            <h3 className="text-2xl md:text-3xl font-normal text-center text-foreground">Program Details</h3>
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

      {/* Divider */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto h-px bg-border opacity-40"></div>
      </div>

      {/* Natural Healing Background Section */}
      <section className="relative w-full py-40 md:py-56 overflow-hidden">
        <div className="absolute inset-0">
          <img src={palmsSunset} alt="Palm trees silhouetted against peaceful sunset sky" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-normal text-white drop-shadow-lg tracking-tight mb-6">
              Natural Healing
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-md">
              Finding peace in nature's rhythm, where the earth meets the sea and ancient wisdom flows through every moment.
            </p>
          </div>
        </div>
      </section>

      {/* Natural Healing Gallery */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1500} transitionSpeed={1500} scale={1.05} className="group relative overflow-hidden rounded-lg aspect-[4/5] shadow-2xl">
              <img src={turtlesBeach} alt="Sea turtles resting on coastal rocks - natural tranquility" className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px]"></div>
              <div className="absolute inset-0 ring-1 ring-primary/0 group-hover:ring-primary/30 transition-all duration-500 rounded-lg"></div>
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10"></div>
            </Tilt>

            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1500} transitionSpeed={1500} scale={1.05} className="group relative overflow-hidden rounded-lg aspect-[4/5] shadow-2xl">
              <img src={yogaBeach} alt="Yoga practice on the beach at sunset - mindful movement" className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px]"></div>
              <div className="absolute inset-0 ring-1 ring-primary/0 group-hover:ring-primary/30 transition-all duration-500 rounded-lg"></div>
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10"></div>
            </Tilt>
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
    </div>;
};
export default Home;