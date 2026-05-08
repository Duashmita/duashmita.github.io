import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";

const BlogPreview = () => {
  const posts = blogPosts.slice(0, 2);

  return (
    <section id="blog-preview" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">blog / notes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={`glass-card rounded-2xl p-6 md:p-7 transition-all hover:-translate-y-2 hover:shadow-lg group block scroll-reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-center gap-2 mb-3 text-primary">
                <BookOpen className="h-4 w-4" />
                <span className="font-mono text-xs tracking-wider uppercase">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  <span className="mx-2">·</span>
                  <Clock className="inline h-3 w-3 mr-1" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs lowercase">
                    {tag.toLowerCase()}
                  </Badge>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            see all notes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
