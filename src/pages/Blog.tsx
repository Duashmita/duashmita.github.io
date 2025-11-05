import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for building large-scale React applications with TypeScript",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Architecture"],
  },
  {
    title: "Modern CSS Techniques in 2024",
    excerpt: "Explore the latest CSS features and how to use them in production",
    date: "2024-03-10",
    readTime: "6 min read",
    tags: ["CSS", "Web Design", "Frontend"],
  },
  {
    title: "Introduction to Serverless Functions",
    excerpt: "Understanding serverless architecture and how to deploy your first function",
    date: "2024-03-05",
    readTime: "10 min read",
    tags: ["Serverless", "Backend", "Cloud"],
  },
  {
    title: "The Power of TypeScript",
    excerpt: "Why TypeScript is essential for modern web development",
    date: "2024-02-28",
    readTime: "7 min read",
    tags: ["TypeScript", "JavaScript", "Development"],
  },
  {
    title: "Optimizing Web Performance",
    excerpt: "Tips and tricks to make your web applications blazingly fast",
    date: "2024-02-20",
    readTime: "9 min read",
    tags: ["Performance", "Web", "Optimization"],
  },
  {
    title: "Design Systems 101",
    excerpt: "How to build and maintain a consistent design system",
    date: "2024-02-15",
    readTime: "12 min read",
    tags: ["Design", "UI/UX", "System"],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h1 className="mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts on development, design, and everything in between
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="glass group hover:shadow-xl transition-all duration-300 hover:border-primary/50 animate-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="ghost" className="group/btn shrink-0 hover-scale">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
