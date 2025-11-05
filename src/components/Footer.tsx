import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              © 2024 Portfolio. Built with Lovable.
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            Designed & Developed with ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
