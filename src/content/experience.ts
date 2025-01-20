export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string[];
    technologies: string[];
    type: 'security' | 'software' | 'both';
  }
  
  export const experiences: Experience[] = [
    {
      id: 'current-role',
      title: 'Senior Security Engineer',
      company: 'Tech Company',
      location: 'Remote',
      startDate: '2022',
      endDate: 'Present',
      description: [
        'Lead security architecture and implementation for cloud-native applications',
        'Developed automated security testing pipeline reducing vulnerability detection time by 60%',
        'Implemented zero-trust architecture across microservices infrastructure'
      ],
      technologies: ['AWS', 'Kubernetes', 'Python', 'Terraform', 'Docker'],
      type: 'security'
    },
    {
      id: 'previous-role',
      title: 'Software Engineer',
      company: 'Software Corp',
      location: 'San Francisco, CA',
      startDate: '2020',
      endDate: '2022',
      description: [
        'Built and maintained high-performance REST APIs serving 1M+ daily requests',
        'Architected and implemented microservices infrastructure',
        'Led team of 5 developers in modernizing legacy systems'
      ],
      technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'React'],
      type: 'software'
    },
    // Add more experiences as needed
  ];