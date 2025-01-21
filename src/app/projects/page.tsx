// src/app/projects/page.tsx
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/content/projects';

export default function ProjectsPage() {
  
  return (
    <div>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">All Projects</h1>
           <p className="text-xl text-terminal-text-light dark:text-terminal-text-light-dark mb-8"> {/* Apply Terminal Text color */}
            Highlighting my work in security and software engineering
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}