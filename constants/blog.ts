export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai-in-software-development",
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is reshaping the coding landscape, from automated testing to intelligent code completion.",
    category: "AI & Technology",
    date: "August 15, 2026",
    readTime: "5 min read",
    gradient: "from-brand-blue to-brand-cyan"
  },
  {
    id: "2",
    slug: "mastering-web-performance",
    title: "Mastering Web Performance in 2026",
    excerpt: "A deep dive into modern performance metrics and how to optimize your web applications for maximum speed and user retention.",
    category: "Web Development",
    date: "August 10, 2026",
    readTime: "7 min read",
    gradient: "from-brand-purple to-brand-green"
  },
  {
    id: "3",
    slug: "shift-left-testing",
    title: "Why 'Shift-Left' Testing is Non-Negotiable",
    excerpt: "Discover why integrating testing early in the software development lifecycle reduces bugs, cuts costs, and improves team morale.",
    category: "Software Testing",
    date: "August 5, 2026",
    readTime: "6 min read",
    gradient: "from-brand-cyan to-brand-blue"
  },
  {
    id: "4",
    slug: "hyper-automation-business",
    title: "Scaling Your Business with Hyper-Automation",
    excerpt: "How combining RPA, machine learning, and advanced analytics can automate complex business processes end-to-end.",
    category: "Automation",
    date: "July 28, 2026",
    readTime: "8 min read",
    gradient: "from-brand-green to-brand-purple"
  },
  {
    id: "5",
    slug: "digital-transformation-guide",
    title: "A Leader's Guide to Digital Transformation",
    excerpt: "Navigating the pitfalls of enterprise modernization. Key strategies for aligning technology investments with business goals.",
    category: "Digital Transformation",
    date: "July 20, 2026",
    readTime: "10 min read",
    gradient: "from-brand-cyan to-brand-purple"
  },
  {
    id: "6",
    slug: "microservices-vs-monoliths",
    title: "Microservices vs. Monoliths: A 2026 Perspective",
    excerpt: "Revisiting the architectural debate. When does it make sense to split your application, and when is a majestic monolith better?",
    category: "Business Technology",
    date: "July 12, 2026",
    readTime: "6 min read",
    gradient: "from-brand-blue to-brand-green"
  }
];
