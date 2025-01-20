import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/content/projects';

export default function ProjectsPage() {
  const categories = ['all', 'security', 'software', 'fullstack'] as const;
  const featured = projects.filter(project => project.featured);
  
  return (
    <div>
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Highlighting my work in security and software engineering
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">All Projects</h2>
          
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