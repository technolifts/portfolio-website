// src/content.experiences.ts
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
      title: 'Engineering Program Manager / Head of Security GTM',
      company: 'Adobe',
      location: 'Seattle',
      startDate: '2023',
      endDate: 'Present',
      description: [
        'Security GTM strategist',
        'Customer zero for security tools and inititaives',
        'Head of Adobe Security Champion Program',
        'Various rotations with DevSecOps team, Red Team and Cloud Security Team'
      ],
      technologies: ['AWS', 'Python', 'Terraform', 'Wiz', 'Databricks', 'GitHub', 'SQL'],
      type: 'security'
    },
    {
      id: 'previous-adobe-role',
      title: 'Product Security Enablement Specialist',
      company: 'Adobe',
      location: 'Seattle',
      startDate: '2022',
      endDate: '2023',
      description: [
        'Security Evangelism through the business',
        'Security Developer Relations'
      ],
      technologies: ['Communications', 'Technical Writing'],
      type: 'security'
    },
    // Add more experiences as needed
  ];