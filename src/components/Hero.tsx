import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative bg-primary overflow-hidden px-4">
      <div className="container mx-auto px-0 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Hi! I am Ashmita Dua</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl font-mono">Computer Science student at UC Santa Cruz specializing in Game Design, AI/ML, and creative technology</p>
        </div>
        
        <div className="absolute bottom-0 right-0 w-64 md:w-96 opacity-10">
          <svg viewBox="0 0 200 200" className="text-white">
            <rect x="50" y="80" width="60" height="40" fill="currentColor" stroke="currentColor" strokeWidth="3" />
            <rect x="90" y="50" width="40" height="30" fill="currentColor" stroke="currentColor" strokeWidth="3" />
            <circle cx="70" cy="50" r="15" fill="currentColor" stroke="currentColor" strokeWidth="3" />
            <rect x="60" y="130" width="15" height="40" fill="currentColor" stroke="currentColor" strokeWidth="3" />
            <rect x="95" y="130" width="15" height="40" fill="currentColor" stroke="currentColor" strokeWidth="3" />
            <line x1="70" y1="65" x2="70" y2="80" stroke="currentColor" strokeWidth="3" />
            <line x1="100" y1="80" x2="110" y2="70" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </section>;
};
export default Hero;