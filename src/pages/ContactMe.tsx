import Navigation from "@/components/Navigation";
import { Mail, Heart } from "lucide-react";

const ContactMe = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto space-y-16">
          <section className="space-y-8">
            <div className="text-center space-y-6">
              <Heart className="w-12 h-12 text-primary mx-auto opacity-70" strokeWidth={1.5} />
              <h1 className="text-4xl md:text-5xl font-light text-foreground">
                Let's Connect
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Whether you're interested in yoga sessions, wellness collaborations, or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary opacity-70" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-light text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:hello@example.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4 pt-8">
              <p className="text-muted-foreground font-light leading-relaxed">
                Looking forward to connecting with kindred spirits on this journey of wellness and growth.
              </p>
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

export default ContactMe;
