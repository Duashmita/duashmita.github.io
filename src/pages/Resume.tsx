import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">Resume</h1>
            <Button variant="default" size="lg" className="gap-2" asChild>
              <a href="/Ashmita_Dua_Resume.pdf" download="Ashmita_Dua_Resume.pdf">
                <Download size={20} />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="space-y-12">
            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Education</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">B.Sc. Computer Science</h3>
                    <span className="text-muted-foreground font-mono text-sm">Sept 2024 - June 2028</span>
                  </div>
                  <p className="text-primary mb-2">University of California, Santa Cruz | GPA 3.66/4.0 (Dean's Honor List Winter 2025)</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Skills / Tech Stacks</h2>
              <div className="space-y-3">
                <div>
                  <span className="text-foreground font-semibold">Game Development:</span>{" "}
                  <span className="text-muted-foreground">Unity/C#, Procedural Content Generation (Wave Function Collapse), Level Design</span>
                </div>
                <div>
                  <span className="text-foreground font-semibold">AI/ML:</span>{" "}
                  <span className="text-muted-foreground">LLMs (GPT-4, Gemini, Claude), Prompt Engineering, RAG Systems, PyTorch, CNNs, NLP</span>
                </div>
                <div>
                  <span className="text-foreground font-semibold">Programming Languages:</span>{" "}
                  <span className="text-muted-foreground">Python, C/C++, JavaScript, HTML/CSS</span>
                </div>
                <div>
                  <span className="text-foreground font-semibold">Tools & Frameworks:</span>{" "}
                  <span className="text-muted-foreground">Git, LangChain, OpenCV, APIs, Streamlit</span>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Experience</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">Undergraduate Researcher</h3>
                    <span className="text-muted-foreground font-mono text-sm">Sept 2025 - Present</span>
                  </div>
                  <p className="text-primary mb-2">Augmented Design Lab</p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Reduced LLM validation loop errors by 42% (78.7% → 46.3%) in the level generation system by redesigning system prompts to enforce action-first behavior and structured tool use, in Pewter Platformer</li>
                    <li>Led a study focused on generating game levels through LLMs/PCG and hierarchical wave function collapse</li>
                    <li>Implemented action-first behavioral constraints, reducing repetitive agent loops across 30+ test scenarios</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">AI/ML Intern</h3>
                    <span className="text-muted-foreground font-mono text-sm">June 2025 - July 2025</span>
                  </div>
                  <p className="text-primary mb-2">Sowiz</p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Engineered RAG workflows using LangChain to create an intelligent agent system for dealer support and product knowledge</li>
                    <li>Designed and implemented gamified sales platform with a milestone-based reward system to incentivize unit sales performance</li>
                    <li>Integrated AI-powered information retrieval system enabling dealers to access real-time product specs and pricing</li>
                    <li>Improved dealer conversion rates by providing comprehensive, accessible resources through an automated workflow system</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">Undergraduate Researcher</h3>
                    <span className="text-muted-foreground font-mono text-sm">April 2025 - June 2025</span>
                  </div>
                  <p className="text-primary mb-2">Artificial Intelligence Explainability Accountability Lab</p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Led a study focused on LLM safety, logic translation, and inconsistency detection</li>
                    <li>Configured local LLM API environments and integrated SWI-Prolog for logical reasoning verification</li>
                    <li>Built a knowledge base and curated UCSC-specific questions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Projects</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Woven – Mood-Based Storytelling LLM</h3>
                  <p className="text-sm text-primary mb-2">
                    <a href="https://duashmita.github.io/woven/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Demo: duashmita.github.io/woven
                    </a>
                    {" | "}
                    <a href="https://bit.ly/woven-intoyou" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Repo
                    </a>
                  </p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Designed LLM-powered narrative system guiding users from current emotion to target mood across 8-10 turn interactive stories</li>
                    <li>Achieved 87% emotional arc accuracy by implementing rule-based validation with a 10-emotion NLP classifier</li>
                    <li>Compared GPT-4 vs Gemini performance: Gemini averaged within 2 mood-indices of target; GPT-4 remained 1-3 indices off</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">HabPet</h3>
                  <p className="text-sm text-primary mb-2">
                    <a href="https://bit.ly/HabpetYTDemo" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Demo
                    </a>
                    {" | "}
                    <a href="https://habit-bot.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Web
                    </a>
                    {" | "}
                    <a href="https://github.com/Sanyab8/habit-bot" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Repo
                    </a>
                  </p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Built an IoT habit tracker combining Arduino hardware with a web app featuring AI-powered habit detection via OpenCV and progressive milestone rewards</li>
                    <li>Engineered Node.js bridge for real-time Arduino-web communication using sensors and actuators (servos, LEDs, buzzers)</li>
                    <li>Deployed full-stack application using React/Vite/Zustand on the Vercel platform</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Pewter Platformer</h3>
                  <p className="text-sm text-primary mb-2">
                    <a href="https://pewter-classic-aaaaaaaaaaaaaaaaaa.vercel.app/?_vercel_share=Uq4de7RWU1nKA9oXpKS4JsaQC53AASZj" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Demo
                    </a>
                  </p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Diagnosed an LLM failure mode where the agent entered repetitive validation loops during level creation</li>
                    <li>Iterated the system prompt + interaction flow to enforce 'action-first' behavior and structured tool use</li>
                    <li>Benchmarked over 30 test prompts: loop-rate 78.7% → 46.3% in a HTML/JavaScript-based level generator</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">CopCuts – Barber LLM-based NPCs Unity Game</h3>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Built AI detective game with LLM-powered NPCs featuring dynamic conversations, memory systems, and personality adaptation</li>
                    <li>Implemented suspicion mechanics and relationship tracking where NPC responses vary based on player interrogation strategy</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recognition Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Recognition</h2>
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                  <h3 className="text-xl font-semibold text-foreground">Goldman Sachs Possibilities Summit 2025</h3>
                  <span className="text-muted-foreground font-mono text-sm">Jan 2025</span>
                </div>
                <p className="text-muted-foreground">Selected Delegate — 1 of 100 students selected nationally for leadership and career development program</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;