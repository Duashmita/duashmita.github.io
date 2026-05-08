import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import MazeGame from "./MazeGame";

const Hero = () => (
  <section
    className="relative overflow-hidden min-h-screen"
    style={{ background: "#060b18" }}
  >
    {/* 1. Full-screen maze game — positions itself absolutely */}
    <MazeGame />

    {/* 2. Gradient overlay — dark on left for text legibility, transparent right */}
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      style={{
        background: `linear-gradient(
          105deg,
          hsl(220,90%,6%) 0%,
          hsl(220,90%,6%) 26%,
          hsla(220,88%,7%,0.82) 42%,
          hsla(220,88%,7%,0.25) 60%,
          transparent 72%
        )`
      }}
    />

    {/* 3. Top edge fade so navbar blends in */}
    <div
      className="absolute inset-x-0 top-0 h-28 z-10 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, hsl(220,90%,6%) 0%, transparent 100%)" }}
    />

    {/* 4. Text content — vertically centred, left-aligned */}
    {/* pointer-events-none so mouse events pass through to the canvas game below */}
    <div className="relative z-20 flex items-center min-h-screen pointer-events-none">
      <div className="container mx-auto max-w-6xl px-0 pl-4 md:pl-10 py-24">
        <div className="max-w-lg">

          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            hi! I am ashmita
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-sm md:text-base text-primary-foreground/75 font-mono italic leading-relaxed">
              a nerd of creating and studying interactive beautiful environments utilising ai/ml.
              i'm a computer science student at uc santa cruz who lives somewhere between game design,
              ai/ml research, and creative tech. i like building things that{" "}
              <span style={{ color: "hsl(var(--accent))" }}>feel alive</span>
              {" "}— llm-powered worlds, npcs with actual personalities, level generators
              that argue back, and small interactive experiments that blur the line
              between systems and stories.
            </p>
            <p className="text-sm md:text-base text-primary-foreground/55 font-mono leading-relaxed">
              most of my work sits at the intersection of{" "}
              <span style={{ color: "hsl(var(--accent))" }}>play</span>,{" "}
              <span style={{ color: "hsl(var(--accent))" }}>cognition</span>, and{" "}
              <span style={{ color: "hsl(var(--accent))" }}>machine reasoning</span>
              {" "}— currently researching procedural level generation, episodic memory for
              agents, and personality-parameterized npcs. when i'm not debugging a prompt
              at 2am, i'm probably sketching levels, writing about education, or making
              something tiny and weird.
            </p>
          </div>

          {/* re-enable pointer events for clickable buttons only */}
          <div className="flex gap-4 pointer-events-auto">
            <Button variant="outline" size="icon" asChild
              className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground h-12 w-12 hover:scale-110 transition-transform">
              <a href="https://www.linkedin.com/in/duashmita/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild
              className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground h-12 w-12 hover:scale-110 transition-transform">
              <a href="mailto:duashmita@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild
              className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground h-12 w-12 hover:scale-110 transition-transform">
              <a href="https://github.com/duashmita" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild
              className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground h-12 w-12 hover:scale-110 transition-transform">
              <a href="https://x.com/duashmita" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
              </a>
            </Button>
          </div>

        </div>
      </div>
    </div>

  </section>
);

export default Hero;
