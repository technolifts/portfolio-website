export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    category: 'security' | 'software' | 'fullstack';
  }
  
  export const projects: Project[] = [
    {
      id: 'security-scanner',
      title: 'Enterprise Security Scanner',
      description: 'Automated security assessment tool that performs vulnerability scanning, configuration analysis, and compliance checking for enterprise systems.',
      technologies: ['Python', 'Docker', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/yourusername/security-scanner',
      featured: true,
      category: 'security'
    },
    {
      id: 'api-gateway',
      title: 'Secure API Gateway',
      description: 'High-performance API gateway with built-in security features including rate limiting, JWT authentication, and request validation.',
      technologies: ['TypeScript', 'Node.js', 'Express', 'Redis'],
      githubUrl: 'https://github.com/yourusername/api-gateway',
      featured: true,
      category: 'software'
    },
    // Add more projects as needed
  ];