import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import personWaving from "@/assets/person-waving.png";
const Hero = () => {
  return <section className="relative bg-primary overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Hi! I am Ashmita Dua</h1>
            <p className="text-lg md:text-xl text-white/90 font-mono">Computer Science student at UC Santa Cruz specializing in Game Design, AI/ML, and creative technology</p>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <img 
              src={personWaving} 
              alt="Person waving hello" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;