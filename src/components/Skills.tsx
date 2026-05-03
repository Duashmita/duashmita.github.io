import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "programming",
    skills: ["python", "sql", "html/css", "javascript", "react"],
  },
  {
    category: "ai/ml & tools",
    skills: ["pytorch", "keras", "neural networks", "cnns", "nlp", "rag", "langchain", "finetuning"],
  },
  {
    category: "design & languages",
    skills: ["graphic design", "english", "hindi", "german"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">skills & technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            technologies and tools i work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="outline"
                    className="text-sm py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
