export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  readTime: string;
  tags: string[];
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for building large-scale React applications with TypeScript",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Architecture"],
    content:
      "Scaling a React codebase is less about adding tooling, and more about enforcing clarity.\n\nIn this post, we cover component boundaries, folder structure, type-driven APIs, and how to keep your UI consistent as your app grows.",
  },
];
