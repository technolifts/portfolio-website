import Link from 'next/link';
import {
  ArrowRightIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import ProjectCard from '@/components/ProjectCard';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import BlogCard from '@/components/BlogCard';
import { projects } from '@/content/projects';
import { experiences } from '@/content/experience';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Security & Software Engineer
          </h1>
          <h1 className="text-5xl font-bold text-accent">
            Ryan Carroll
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building secure, scalable solutions and sharing knowledge about
            cybersecurity and software development.
          </p>
        </section>

        {/* Featured Sections */}
        {/* About Section */}
        <section className="card max-w-5xl mx-auto mb-4">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I'm a Security and Software Engineer passionate about building secure,
            efficient solutions. With expertise in both offensive and defensive
            security practices, I help organizations protect their digital assets
            while delivering high-quality software.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/experience" className="button">
              View My Experience
            </Link>
            <Link
              href="/projects"
              className="button bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100">
              Explore Projects
            </Link>
          </div>
        </section>


        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <CodeBracketIcon className="h-6 w-6 text-accent mr-2" />
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
           <div className="mt-6 text-center">
                <Link
                   href="/projects"
                   className="button"
                >
                    View All Projects
                </Link>
           </div>
        </section>

        {/* Blog Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <DocumentTextIcon className="h-6 w-6 text-accent mr-2" />
            <h2 className="text-3xl font-semibold">Blog</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-6 text-center">
              <Link
                href="/blog"
                className="button"
              >
                View All Posts
              </Link>
           </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <ShieldCheckIcon className="h-6 w-6 text-accent mr-2" />
            <h2 className="text-3xl font-semibold">Experience</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline experiences={experiences} />
          </div>
           <div className="mt-6 text-center">
                <Link
                   href="/experience"
                   className="button"
                >
                    View All Experience
                </Link>
           </div>
        </section>
      </main>
    </div>
  );
}