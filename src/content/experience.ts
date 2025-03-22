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
      title: 'Engineering Program Manager',
      company: 'Adobe',
      location: 'Seattle',
      startDate: '2024',
      endDate: 'Present',
      description: [
        'Automated the process for enrolling engineers in technical security training. Helping 20,000 learners get enrolled in role-based security training in 10% of the time it would take manually.',
        'Managed Adobe’s Security Champion Program consisting of over 400 champions across all solutions at Adobe to effectively scale security across the company. ',
        'Established a unified security-developer relations relations by effectively portraying why security matters, and how to impliment security in different engineering teams across Adobe',
        'Collaborated with the Cloud Security Team to identify high-impact areas, recommend effective policies, and respond to real-time threats.'
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
      endDate: '2024',
      description: [
        'Created and managed a Security Evangelism program to educate product engineers on top-of-mind Security topics and the Security orgs upcoming initiatives. ',
        'Developed and deployed two POCs to reduce security specialist response times to security questionaires by 60% and increase deal velocity by 25%. ',
        'Contributed to the Red Team by operating in Orange Team Campaigns'
      ],
      technologies: ['Communications', 'Technical Writing'],
      type: 'security'
    },
    // Add more experiences as needed
  ];