import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          ashmita
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/projects-grid" className="text-foreground hover:text-primary transition-colors">
            projects
          </Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
            blog/notes
          </Link>
          <Link to="/resume" className="text-foreground hover:text-primary transition-colors">
            resume
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/projects-grid" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              blog/notes
            </Link>
            <Link 
              to="/resume" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
