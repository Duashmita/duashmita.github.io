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
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">resume</h1>
            <Button variant="default" size="lg" className="gap-2" asChild>
              <a href="/Ashmita_Dua_Resume.pdf" download="Ashmita_Dua_Resume.pdf">
                <Download size={20} />
                download pdf
              </a>
            </Button>
          </div>

          <div className="space-y-12">
            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">education</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">b.sc. computer science</h3>
                    <span className="text-muted-foreground font-mono text-sm">sept 2024 - june 2028</span>
                  </div>
                  <p className="text-primary mb-2">university of california, santa cruz | gpa 3.71/4.0 (dean's honor list)</p>
                  <p className="text-muted-foreground text-sm">relevant coursework: cse101 (data structures/algorithms), cmpm80k (game engines), cse40 (ai/ml)</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">skills / tech stacks</h2>
              <div className="space-y-3">
                <div>
                  <span className="text-foreground font-semibold">game development:</span>{" "}
                  <span className="text-muted-foreground">unity/c#, procedural content generation (wfc), level design, godot</span>
                </div>
                <div>
                  <span className="text-foreground font-semibold">programming languages:</span>{" "}
                  <span className="text-muted-foreground">python, c/c++, javascript/typescript, html/css</span>
                </div>
                <div>
                  <span className="text-foreground font-semibold">tools & frameworks:</span>{" "}
                  <span className="text-muted-foreground">git, langchain/langgraph, opencv, apis, cursor, kubernetes, claude code, multi-agent envs</span>
                </div>
                <div>
                  <span className="text-foreground font-semibold">ai/ml:</span>{" "}
                  <span className="text-muted-foreground">llms (gemini, claude), rag, pytorch, cnns, reinforcement learning, fine-tuning, neurosymbolic ai</span>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">experience</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">open-source contributor</h3>
                    <span className="text-muted-foreground font-mono text-sm">march 2026 - present</span>
                  </div>
                  <p className="text-primary mb-2">terraforma by overture</p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>building an agentic ai pipeline that corrects stale location data in the overture maps foundation places dataset using llm-powered web cross-referencing</li>
                    <li>developing confidence scoring system to flag closures, moved businesses, and outdated entries across geographic regions</li>
                    <li>engineering full-stack review dashboard (react + fastapi + postgresql) with interactive map view for human-in-the-loop correction approval</li>
                    <li>designing neurosymbolic layer to complement llm agent reasoning with structured logical rules for data quality verification</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">undergraduate researcher</h3>
                    <span className="text-muted-foreground font-mono text-sm">sept 2025 - present</span>
                  </div>
                  <p className="text-primary mb-2">augmented design lab</p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>reduced llm validation loop errors by 42% (78.7% → 46.3%) in the level generation system by redesigning system prompts to enforce action-first behavior and structured tool use, in pewter platformer</li>
                    <li>led a study focused on generating game levels through llms/pcg and hierarchical wave function collapse</li>
                    <li>implemented action-first behavioral constraints, reducing repetitive agent loops across 30+ test scenarios</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">undergraduate researcher</h3>
                    <span className="text-muted-foreground font-mono text-sm">april 2025 - present</span>
                  </div>
                  <p className="text-primary mb-2">artificial intelligence explainability accountability lab</p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>leading a study focused on episodic memory using neuro symbolic layers, and query agnostic kv</li>
                    <li>configured local llm api memory management and retrieval models and integrated swi-prolog for logical reasoning verification</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">website designer</h3>
                    <span className="text-muted-foreground font-mono text-sm">dec 2024 - present</span>
                  </div>
                  <p className="text-primary mb-2">undergraduate admissions office, ucsc</p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>maintain university admissions website serving 50,000+ prospective students annually</li>
                    <li>redesigned 15+ web pages improving mobile responsiveness and navigation</li>
                    <li>managed structured data systems supporting admissions cycle workflows</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">ai/ml intern</h3>
                    <span className="text-muted-foreground font-mono text-sm">june 2025 - july 2025</span>
                  </div>
                  <p className="text-primary mb-2">sowiz</p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>engineered rag workflows using langchain to create an intelligent agent system for dealer support and product knowledge</li>
                    <li>designed and implemented gamified sales platform with a milestone-based reward system to incentivize unit sales performance</li>
                    <li>integrated ai-powered information retrieval system enabling dealers to access real-time product specs and pricing</li>
                    <li>improved dealer conversion rates by providing comprehensive, accessible resources through an automated workflow system</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Publications Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">publications</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">pewter: a mixed-initiative system for natural language tilemap design</h3>
                  <p className="text-sm text-primary mb-2">under review at uist '26 conference | augmented design lab (w. prof. jim whitehead)</p>
                  <p className="text-muted-foreground leading-relaxed">a mixed-initiative system enabling natural language-driven tilemap level design, combining llm agents with hierarchical wave function collapse to reduce validation loop errors by 42% across 30+ test scenarios.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">engram: personality-parameterized schema memory for npc cognitive diversity</h3>
                  <p className="text-sm text-primary mb-2">
                    under review at fdg '26 | co-authored w. devesh kriplani |{" "}
                    <a href="https://bit.ly/engramPersonalityNPC" target="_blank" rel="noopener noreferrer" className="hover:underline">demo</a>
                  </p>
                  <p className="text-muted-foreground leading-relaxed">parameterizes ocean (big five) personality traits with prolog-based memory encoding rules, enabling npcs to form structurally different memories from identical experiences and producing trait-consistent cognitive diversity without scripting.</p>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">projects</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">woven – mood-based storytelling llm</h3>
                  <p className="text-sm text-primary mb-2">
                    <a href="https://duashmita.github.io/woven/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      demo: duashmita.github.io/woven
                    </a>
                    {" | "}
                    <a href="https://bit.ly/woven-intoyou" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      repo
                    </a>
                  </p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>designed llm-powered narrative system guiding users from current emotion to target mood across 8-10 turn interactive stories</li>
                    <li>achieved 87% emotional arc accuracy by implementing rule-based validation with a 10-emotion nlp classifier</li>
                    <li>compared gpt-4 vs gemini performance: gemini averaged within 2 mood-indices of target; gpt-4 remained 1-3 indices off</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">habpet</h3>
                  <p className="text-sm text-primary mb-2">
                    <a href="https://bit.ly/HabpetYTDemo" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      demo
                    </a>
                    {" | "}
                    <a href="https://habit-bot.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      web
                    </a>
                    {" | "}
                    <a href="https://github.com/Sanyab8/habit-bot" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      repo
                    </a>
                  </p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>built an iot habit tracker combining esp32 hardware with a web app featuring ai-powered habit detection via opencv and progressive milestone rewards</li>
                    <li>engineered node.js bridge for real-time esp32-web communication using sensors and actuators (servos, leds, buzzers)</li>
                    <li>deployed full-stack application using react/vite/zustand on the vercel platform</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">pewter platformer</h3>
                  <p className="text-sm text-primary mb-2">
                    <a href="https://pewter-classic-aaaaaaaaaaaaaaaaaa.vercel.app/?_vercel_share=Uq4de7RWU1nKA9oXpKS4JsaQC53AASZj" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      demo
                    </a>
                  </p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>diagnosed an llm failure mode where the agent entered repetitive validation loops during level creation</li>
                    <li>iterated the system prompt + interaction flow to enforce 'action-first' behavior and structured tool use</li>
                    <li>benchmarked over 30 test prompts: loop-rate 78.7% → 46.3% in a html/javascript-based level generator</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">copcuts – barber llm-based npcs unity game</h3>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>built ai detective game with llm-powered npcs featuring dynamic conversations, memory systems, and personality adaptation</li>
                    <li>implemented suspicion mechanics and relationship tracking where npc responses vary based on player interrogation strategy</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recognition Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">recognition</h2>
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                  <h3 className="text-xl font-semibold text-foreground">goldman sachs possibilities summit 2025</h3>
                  <span className="text-muted-foreground font-mono text-sm">jan 2025</span>
                </div>
                <p className="text-muted-foreground">selected delegate — 1 of 100 students selected nationally for leadership and career development program</p>
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
