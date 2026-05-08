import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Pewter
import pewterMain     from "@/assets/pewter-main.png";
import pewterDiagram  from "@/assets/pewter-diagram.png";
import pewterAccuracy from "@/assets/pewter-accuracy.png";

// Engram
import engramOcean   from "@/assets/engram/engram-1.png";
import engramSystem  from "@/assets/engram/engram-4.png";
import engramSession from "@/assets/engram/engram-2.png";

// Woven
import wovenScreenshot from "@/assets/woven-screenshot.png";
import wovenGameplay   from "@/assets/woven-gameplay.png";
import wovenPoster     from "@/assets/woven-poster.png";
import wovenUI         from "@/assets/woven-ui.png";

interface Section {
  image: string;
  imageAlt: string;
  label: string;
  description: string;
}

interface Project {
  title: string;
  slogan: string;
  skills: string;
  date: string;
  liveUrl: string;
  sections: Section[];
}

const projects: Project[] = [
  {
    title: "Engram",
    slogan: "Personality-Parameterized Schema Memory for NPC Cognitive Diversity",
    skills: "Prolog + LLMs + Neuro-Symbolic AI",
    date: "2025 · Accepted FDG '26",
    liveUrl: "https://duashmita.github.io/engram",
    sections: [
      {
        image: engramOcean,
        imageAlt: "OCEAN personality radar chart for NPC Jeanie",
        label: "problem",
        description:
          "NPCs share identical memory structures regardless of personality — a high-N (neurotic) NPC and a high-A (agreeable) NPC process the same threat identically, producing cognitively flat, indistinguishable behavior regardless of who they are.",
      },
      {
        image: engramSystem,
        imageAlt: "Engram full system architecture diagram",
        label: "solution",
        description:
          "Parameterises OCEAN (Big Five) personality traits with Prolog-based memory encoding rules. Player input flows through threat assessment, memory retrieval, and a Prolog verification check before LLM dialogue generation — each stage weighted by the NPC's trait profile.",
      },
      {
        image: engramSession,
        imageAlt: "Session window showing NPC memories across conversations",
        label: "result",
        description:
          "Trait-consistent cognitive diversity without manual scripting. Memory retrieval errors reduced by ~54%. NPCs with identical experiences form structurally different memories based on who they are. First-authored independent research, accepted at FDG '26.",
      },
    ],
  },
  {
    title: "Pewter Platformer",
    slogan: "2D Platformer level generator using LLM",
    skills: "Prompt Engineering + LLMs + Prompt Flow",
    date: "Sep 2025 – Present",
    liveUrl: "https://pewter-classic-aaaaaaaaaaaaaaaaaa.vercel.app/?_vercel_share=Uq4de7RWU1nKA9oXpKS4JsaQC53AASZj",
    sections: [
      {
        image: pewterMain,
        imageAlt: "Pewter Platformer main interface",
        label: "problem statement",
        description:
          "the pewter platformer faced a validation loop, where it kept asking questions to validate its design without calling any tool, i.e. making any real changes",
      },
      {
        image: pewterDiagram,
        imageAlt: "Pewter system diagram",
        label: "solution",
        description:
          "1. changed the system prompt to be 'action-first'\n2. implemented a lightweight conversation-state guardrail to limit repeated follow-up questions and reset on tool calls",
      },
      {
        image: pewterAccuracy,
        imageAlt: "Pewter accuracy results",
        label: "result",
        description:
          "benchmarked over 30 test prompts: loop-rate 78.7% → 46.3%, significantly improving the agent's reliability and user experience.",
      },
    ],
  },
  {
    title: "Woven — Interactive Story Builder",
    slogan: "Mood-driven interactive storytelling",
    skills: "LLMs + AI + Python",
    date: "Mar 2025 – Dec 2025",
    liveUrl: "https://duashmita.github.io/woven/",
    sections: [
      {
        image: wovenScreenshot,
        imageAlt: "Woven app screenshot",
        label: "overview",
        description:
          "Built Woven, an LLM-powered narrative system that guides users from their current emotion to a target mood across 8–10 turn interactive stories. Presented at the Undergraduate Student Research Showcasing 2025 with AIEA under Prof. Leilani Gilpin.",
      },
      {
        image: wovenGameplay,
        imageAlt: "Woven gameplay interface",
        label: "approach",
        description:
          "Developed a turn-based story loop with mood-driven prompts and emotion-based story arcs. Rule-based validation enforces emotional arc consistency at each story beat using a 10-emotion NLP classifier.",
      },
      {
        image: wovenPoster,
        imageAlt: "Woven research poster",
        label: "accuracy",
        description:
          "Achieved 87% emotional arc accuracy — the system successfully guided users to their target mood in 87% of sessions while maintaining narrative coherence across the full story arc.",
      },
      {
        image: wovenUI,
        imageAlt: "Woven UI and model comparison",
        label: "evaluation",
        description:
          "Compared GPT-4 vs Gemini on emotional guidance: Gemini averaged within 2 mood-indices of target across sessions; GPT-4 remained 1–3 indices off. Gemini demonstrated stronger adherence to multi-turn emotional arc constraints.",
      },
    ],
  },
];

const tiltOn = (e: React.MouseEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top)  / r.height - 0.5;
  e.currentTarget.style.transition = "none";
  e.currentTarget.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) scale(1.02)`;
};

const tiltOff = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transition = "transform 0.55s cubic-bezier(0.16,1,0.3,1)";
  e.currentTarget.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
};

const Projects = () => {
  return (
    <section id="projects" className="pt-8 pb-16 px-4">
      <div className="container mx-auto max-w-6xl px-0">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="space-y-6">
                {/* sticky header */}
                <div className="sticky top-20 z-10 glass py-6 px-6 rounded-lg animate-fade-in scroll-reveal">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-5xl font-bold text-primary">
                        {project.title}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-lg text-muted-foreground">{project.slogan}</p>
                        <div className="w-12 h-px bg-muted-foreground/30" />
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground font-mono">
                        <span>{project.skills}</span>
                        <span>•</span>
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <Button variant="default" size="lg" asChild className="shrink-0 hover:scale-105 transition-transform">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        check it out →
                      </a>
                    </Button>
                  </div>
                </div>

                {/* content rows */}
                <div className="space-y-12">
                  {project.sections.map((section, sectionIndex) => {
                    const isEven = sectionIndex % 2 === 0;
                    // result section: highlight numbers in primary color
                    const isResult = section.label === "result";
                    return (
                      <div
                        key={sectionIndex}
                        className={`grid md:grid-cols-2 gap-12 items-center scroll-reveal reveal-delay-${Math.min(sectionIndex + 1, 4)}`}
                      >
                        <div
                          className={`tilt-card ${isEven ? "md:order-1" : "md:order-2"}`}
                          onMouseMove={tiltOn}
                          onMouseLeave={tiltOff}
                        >
                          <img
                            src={section.image}
                            alt={section.imageAlt}
                            className="w-full rounded-lg border border-border"
                          />
                        </div>
                        <div className={isEven ? "md:order-2" : "md:order-1"}>
                          <p className="text-primary font-bold mb-2">{section.label}:</p>
                          <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                            {isResult
                              ? section.description.split(/(\d+\.?\d*%|\d+\.?\d*\s*→\s*\d+\.?\d*%|~\d+%)/).map((part, i) =>
                                  /\d/.test(part)
                                    ? <span key={i} className="text-primary font-bold">{part}</span>
                                    : part
                                )
                              : section.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {index < projects.length - 1 && (
                <div className="w-full h-px bg-muted-foreground/20 mt-32" />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16 scroll-reveal">
          <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform">
            <Link to="/projects">check out more projects →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
