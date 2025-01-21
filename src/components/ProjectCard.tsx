// src/components/ProjectCard.tsx
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Project } from '@/content/projects';

interface ProjectCardProps {
project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
return (
    <div className="card hover:shadow-lg transition-all">
    {project.imageUrl && (
        <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
        <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
        />
        </div>
    )}
    
    <div className="space-y-4">
        <div>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-300 mt-2">
            {project.description}
        </p>
        </div>

        <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
            <span
            key={tech}
            className="px-3 py-1 text-sm bg-gray-700 rounded-full"
            >
            {tech}
            </span>
        ))}
        </div>

        <div className="flex gap-4 pt-4">
        {project.githubUrl && (
            <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accent/80"
            >
            <CodeBracketIcon className="h-5 w-5 mr-1" />
            Code
            </Link>
        )}
        {project.liveUrl && (
            <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accent/80"
            >
            <GlobeAltIcon className="h-5 w-5 mr-1" />
            Learn More
            </Link>
        )}
        </div>
    </div>
    </div>
);
}