import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import dinosaurImg from "@/assets/dinosaur.png";

const Hero = () => {
  return (
    <section className="relative bg-primary overflow-hidden px-4">
      <div className="container mx-auto max-w-6xl px-0 py-20 md:py-24">
        <div className="max-w-2xl pt-8 md:pt-12 pl-4 md:pl-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            hi! I am ashmita
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl font-mono mb-8 italic">
            a nerd of creating and studying interactive beatiful environments utilising ai/ml.
          </p>
          
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground h-12 w-12" asChild>
              <a href="https://www.linkedin.com/in/duashmita/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground h-12 w-12" asChild>
              <a href="mailto:duashmita@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground h-12 w-12" asChild>
              <a href="https://github.com/duashmita" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Dinosaur positioned at bottom-right edge */}
      <div className="hidden md:block absolute bottom-0 right-0">
        <img 
          src={dinosaurImg} 
          alt="Pixel dinosaur illustration" 
          className="w-64 lg:w-80 h-auto opacity-70"
        />
      </div>
    </section>
  );
};

export default Hero;