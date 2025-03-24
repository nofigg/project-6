export interface Post {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  readingTime: number;
  image?: {
    url: string;
    alt: string;
  };
}

export const posts: Record<string, Post> = {
  'redesigning-fintech-dashboard': {
    slug: 'redesigning-fintech-dashboard',
    title: 'Redesigning a Fintech Dashboard: A UX Case Study',
    description:
      'An in-depth look at how I transformed a complex financial dashboard into an intuitive and powerful tool for traders.',
    pubDate: new Date('2024-02-15'),
    readingTime: 15,
    image: {
      url: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2000&auto=format&fit=crop',
      alt: 'Modern financial dashboard interface showing market data and trading information',
    },
  },
  'e-commerce-mobile-app': {
    slug: 'e-commerce-mobile-app',
    title: 'Designing a Mobile-First E-commerce Experience',
    description:
      'How I redesigned an e-commerce app to achieve a 40% increase in mobile conversions through user-centered design principles.',
    pubDate: new Date('2024-02-10'),
    readingTime: 12,
    image: {
      url: 'https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?q=80&w=2000&auto=format&fit=crop',
      alt: 'Mobile e-commerce app interface showing product listings',
    },
  },
  'saas-platform-redesign': {
    slug: 'saas-platform-redesign',
    title: 'Modernizing a SaaS Platform: From Legacy to Contemporary',
    description:
      'A comprehensive case study of how I led the redesign of a legacy SaaS platform, improving user satisfaction and reducing churn rate.',
    pubDate: new Date('2024-02-05'),
    readingTime: 18,
  },
  'healthcare-portal': {
    slug: 'healthcare-portal',
    title: 'Designing an Accessible Healthcare Portal',
    description:
      'How I created an inclusive and accessible healthcare portal that serves over 50,000 patients while meeting WCAG 2.1 standards.',
    pubDate: new Date('2024-01-28'),
    readingTime: 14,
  },
  'design-system-creation': {
    slug: 'design-system-creation',
    title: 'Building a Design System from Scratch',
    description:
      'A detailed look at how I created and implemented a comprehensive design system for a growing tech company.',
    pubDate: new Date('2024-01-20'),
    readingTime: 16,
  },
  'ai-chatbot-design': {
    slug: 'ai-chatbot-design',
    title: 'Designing Human-Centered AI Chatbot Experiences',
    description:
      'A deep dive into creating human-centered AI chatbot experiences that effectively serve users while maintaining a natural conversation flow.',
    pubDate: new Date('2024-01-21'),
    readingTime: 16,
  },
  'design-tokens-architecture': {
    slug: 'design-tokens-architecture',
    title: 'Implementing Design Tokens at Scale',
    description:
      'How I architected a design token system that powers consistent experiences across multiple platforms and products.',
    pubDate: new Date('2024-01-10'),
    readingTime: 15,
  },
  'animation-system-design': {
    slug: 'animation-system-design',
    title: 'Creating a Scalable Animation System',
    description:
      'Building a comprehensive animation system that brings consistency and delight to user interactions.',
    pubDate: new Date('2024-01-05'),
    readingTime: 12,
  },
  'security-psychology': {
    slug: 'security-psychology',
    title: 'The Psychology of Security: How a Simple Lock Icon Builds User Trust',
    description:
      'Explore how a simple lock icon can significantly impact user trust and conversion rates in financial applications.',
    pubDate: new Date('2025-03-22'),
    readingTime: 12,
    image: {
      url: 'https://images.unsplash.com/photo-1557867874-92b7222c5883?q=80&w=1000&auto=format&fit=crop',
      alt: 'Secure interface with lock icon',
    },
  },
};
