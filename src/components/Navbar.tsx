import { NavLink } from "react-router-dom";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2 transition-colors hover:text-primary">
          <span className="font-mono text-sm">← cabalex.github.io</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
