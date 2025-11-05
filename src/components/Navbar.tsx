import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          Ashmita Dua
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/projects-grid" className="text-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/resume" className="text-foreground hover:text-primary transition-colors">
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
