import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`nav-animate fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors">
          ashmita
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/projects-grid" className="text-foreground hover:text-primary transition-colors font-medium">
            projects
          </Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
            blog/notes
          </Link>
          <Link to="/resume" className="text-foreground hover:text-primary transition-colors font-medium">
            resume
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/projects-grid" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>projects</Link>
            <Link to="/blog"          className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>blog/notes</Link>
            <Link to="/resume"        className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>resume</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
