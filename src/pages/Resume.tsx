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
                    <h3 className="text-xl font-semibold text-foreground">B.Sc. Computer Science: Game Design</h3>
                    <span className="text-muted-foreground font-mono text-sm">Sept 2024 - June 2028</span>
                  </div>
                  <p className="text-primary mb-2">University of California, Santa Cruz</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Skills / Tech Stacks</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "LLMs/RAG",
                  "NNs/CNNs/PyTorch",
                  "LangChain",
                  "Procedural Content Generation",
                  "OpenCV",
                  "JavaScript",
                  "HTML/CSS",
                  "Git",
                  "APIs",
                  "English",
                  "Hindi"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono"
                  >
                    {skill}
                  </span>
                ))}
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
                    <li>Independent study focused on generating game levels through LLMs/PCG.</li>
                    <li>Working with Procedural content generation, through hierarchical wave function collapse.</li>
                    <li>Worked on Pewter Platformer (see Projects section).</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">Website Designer</h3>
                    <span className="text-muted-foreground font-mono text-sm">Jan 2025 - Present</span>
                  </div>
                  <p className="text-primary mb-2">Undergraduate Admissions Office, UCSC</p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Designed, edited, and maintained the company's website, ensuring a user-friendly interface and up-to-date content.</li>
                    <li>Managed and updated digital records, organizing and maintaining structured data for improved accessibility and efficiency.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-xl font-semibold text-foreground">Undergraduate Researcher</h3>
                    <span className="text-muted-foreground font-mono text-sm">April 2025 - June 2025</span>
                  </div>
                  <p className="text-primary mb-2">Artificial Intelligence Explainability Accountability Lab</p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Independent study focused on LLM safety, logic translation, and inconsistency detection.</li>
                    <li>Contributing to the LLM Logic project by setting up local environments (LLM API, SWI-Prolog).</li>
                    <li>Building a knowledge base and curating UCSC-specific questions.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Projects</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Pewter Platformer</h3>
                  <p className="text-sm text-primary mb-2">
                    <a href="https://pewter-classic-aaaaaaaaaaaaaaaaaa.vercel.app/?_vercel_share=Uq4de7RWU1nKA9oXpKS4JsaQC53AASZj" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Demo: pewter-classic.vercel.app
                    </a>
                  </p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Diagnosed an LLM failure mode where the agent entered repetitive validation loops during level creation.</li>
                    <li>Iterated the system prompt + interaction flow to enforce "action-first" behavior and structured tool use.</li>
                    <li>Implemented a lightweight conversation-state guardrail to limit repeated follow-up questions and reset on tool calls.</li>
                    <li>Benchmarked over 30 test prompts: loop-rate and avg questions/session 78.7% → 46.3%.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Woven - Mood-Based Storytelling LLM</h3>
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
                    <li>Developed a mood-guided LLM agent using system prompts + structured outputs to generate personalized interactive narratives.</li>
                    <li>Implemented session state + memory (story variables, user preferences, summaries) to maintain coherence in multi-turn sessions.</li>
                    <li>Integrated RAG (story rules / context retrieval) + output validation to reduce contradictions; demo UI prototyped with Lovable.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">ASL Decoder CNN Model</h3>
                  <p className="text-sm text-primary mb-2">
                    <a href="https://duashmita.github.io/sign-language-vision/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Demo: duashmita.github.io/sign-language-vision
                    </a>
                    {" | "}
                    <a href="https://bit.ly/ASLDecoder-CNN" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Repo
                    </a>
                  </p>
                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                    <li>Designed a CNN-based system for real-time American Sign Language (ASL) recognition using live video inputs.</li>
                    <li>Applied data augmentation and optimized CNN architecture to enhance accuracy.</li>
                    <li>Evaluated on webcam dataset to quantify domain shift; improved robustness via augmentation.</li>
                  </ul>
                </div>
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