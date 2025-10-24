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
    label: "Projects"
  }, {
    path: "/stories",
    label: "Stories"
  }, {
    path: "/contact",
    label: "Contact Me"
  }];
  return <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <Leaf className="w-5 h-5 text-primary opacity-70" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="font-light text-foreground">Inner Compass</span>
              <span className="text-xs font-light text-muted-foreground max-w-md">
            </span>
            </div>
          </Link>
          
          <div className="flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-light transition-colors ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {link.label}
              </Link>)}
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;