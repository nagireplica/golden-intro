import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";
const Navigation = () => {
  const location = useLocation();
  const navLinks = [{
    path: "/",
    label: "Home"
  }, {
    path: "/about",
    label: "About Me"
  }, {
    path: "/projects",
    label: "Yoga & Meditation Course"
  }, {
    path: "/stories",
    label: "Stories"
  }, {
    path: "/contact",
    label: "Contact Me"
  }];
  return <nav className="border-b border-border bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <Leaf className="w-6 h-6 text-primary" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="font-medium text-foreground text-lg">Inner Compass</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-base font-medium transition-colors ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground hover:text-accent"}`}>
                {link.label}
              </Link>)}
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;