import { Leaf, Heart, Sparkles } from "lucide-react";
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

      {/* Current Journey & Focus */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl font-normal text-center text-foreground mb-16 tracking-tight">
            Current Journey & Focus
          </h2>

          <div className="space-y-20">
            <article className="space-y-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Leaf className="w-10 h-10 text-primary opacity-70" strokeWidth={1.5} />
                <h3 className="text-2xl md:text-3xl font-normal text-foreground">Outdoor Yoga & Meditation</h3>
              </div>
              <p className="text-center text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Nature holds its own healing energy.
                Through outdoor yoga and meditation, I guide people to deepen the connection between mind and body — to breathe with awareness, feel grounded, and rediscover inner peace through presence.
              </p>
            </article>

            <article className="space-y-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Heart className="w-10 h-10 text-primary opacity-70" strokeWidth={1.5} />
                <h3 className="text-2xl md:text-3xl font-normal text-foreground">Health & Wellness Product</h3>
              </div>
              <p className="text-center text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">Collaborating with a Stanford Medical professor on ongoing functional medicine projects. Together, we're creating products to bridge cutting-edge medical research with holistic wellness practices — designed to nurture well-being, support energy healing, and bring balance and harmony to everyday life.</p>
              <p className="text-center text-muted-foreground text-base font-light italic mt-3">
                Stay tuned :)
              </p>
            </article>

            <article className="space-y-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Sparkles className="w-10 h-10 text-primary opacity-70" strokeWidth={1.5} />
                <h3 className="text-2xl md:text-3xl font-normal text-foreground">Content & Community</h3>
              </div>
              <p className="text-center text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto mb-6">Through platforms like Youtube and Substack, I will share yoga philosophy, The Sedona Method to release emotion, and real stories from people exploring their own paths of growth. My intention is to make ancient wisdom feel alive and relevant in our modern world — helping others reconnect with their inner compass and live with greater awareness and authenticity.</p>
              <div className="flex justify-center gap-4">
                <a href="/stories" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300">
                  Read Stories
                </a>
              </div>
            </article>
          </div>
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