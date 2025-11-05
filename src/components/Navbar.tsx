import { NavLink } from "react-router-dom";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2 transition-colors hover:text-primary">
          <Code2 className="h-6 w-6" />
          <span className="font-bold font-mono text-lg">portfolio</span>
        </NavLink>
        
        <div className="flex items-center gap-8">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/blog"
            className={({ isActive }) => 
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            Blog
          </NavLink>
          <Button variant="default" size="sm" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
