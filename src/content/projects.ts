// src/content/projects.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    category: 'security' | 'software' | 'fullstack' | 'web-apps';
  }
  
  export const projects: Project[] = [
    {
        id: 'equipay',
        title: 'Equipay',
        description: 'Bring pay transparency across detailed user demographics such as gender and education with easy to comprehend visualizations',
        technologies: ['Python', 'R', 'Firebase', 'Plotly'],
        featured: false,
        category: 'web-apps'
    },
    {
        id: 'readyresume',
        title: 'Ready Resume',
        description: 'Building an AI native solution to help job seekers sell themselves on their resume so they can get past ATS systems and to an interview',
        technologies: ['AWS', 'Python', 'Django', 'PostreSQL'],
        featured: true,
        category: 'web-apps'
    },
    {
        id: 'aws-resume-challenge',
        title: 'AWS Resume Challenge',
        description: 'Utilized AWS Lambda, DynamoDB, API Gateway, and S3 to host an interactive online resume. Built a custom CI/CD pipeline for automated deployments and configured cloud infrastructure using Terraform.',
        technologies: ['AWS', 'GitHub Actions', 'Terraform', 'Python', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/aws-resume-challenge-org',
        liveUrl: 'https://www.linkedin.com/posts/ryanantioniocarroll_over-the-past-couple-of-months-i-have-been-activity-7206529134733271040-7fvI?utm_source=share&utm_medium=member_desktop',
        featured: true,
        category: 'software'
    },
    {
        id: 'ai-secure-code',
        title: 'AI Secure Code Experiment',
        description: 'Conducted an Experiment with ChatGPT and Co-Pilot to see if AI would product insecure code',
        technologies: ['Prompt Engineering', 'JavaScript', 'SQL', 'Django', 'Python'],
        githubUrl: 'https://github.com/technolifts/AISecureCodeExperiment',
        liveUrl: 'https://www.linkedin.com/posts/ryanantioniocarroll_does-ai-write-secure-code-ive-heard-this-activity-7251440011865178112-vukf?utm_source=share&utm_medium=member_desktop',
        featured: true,
        category: 'security'
    },
    {
        id: 'presence.ai',
        title: 'Presence AI - Your Personal AI Voice Agent',
        description: 'Most personal portfolios rely on static text and design to stand out. Presence ai transforms this experience by letting visitors interact with you through conversation — just like a phone call. Answer a few questions with audio recordings, and your custom AI agent responds to visitors’ questions using your voice, personality, and unique information.',
        technologies: ['Python', 'Anthropic', 'ElevenLabs', 'Flask'],
        githubUrl: 'https://github.com/technolifts/presence',
        featured: true,
        category: 'security'
    }
    
    // Add more projects as needed
  ];