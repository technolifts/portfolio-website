// src/app/page.tsx
import Link from 'next/link';
import {
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

export default async function Home() {
  const featuredProjects = projects.filter((project) => project.featured);
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center items-center space-x-8">
            <h1 className="text-5xl font-semibold text-gray-800 dark:text-white">
              Hi, I&apos;m <span className="text-accent">Ryan Carroll</span>
            </h1>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Software Engineering / Cyber Security / Product</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Using my endless curiosity to make a big impact on peoples lives.
          </p>
        </section>

        {/* Featured Sections */}
        {/* About Section */}
        <section className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg mb-12">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            About Me
          </h2>

          {/* Intros */}
          <div className="mb-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              Looking for big opportunities that will put me in situations of exponential growth and learning. I&apos;m always ready for a challenge.
              I&apos;m inspired by the little wins, my mentors, and people I admire.
            </p>
          </div>

          {/* Areas of Interest */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Areas I&apos;m Interested In
            </h3>
            <div className="flex flex-wrap gap-4">
              {['AI Implementation', 'Cloud and AI Security', 'Building Web Apps'].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-accent text-white rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-4">
              {['Python', 'JavaScript', 'TypeScript', 'React', 'AWS', 'Terraform', 'Django', 'FastAPI', 'SQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-accent text-white rounded-full shadow-md hover:bg-accent-dark transition-transform transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Giving Back */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              How I&apos;m Giving Back
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md border border-accent hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800">
                <h5 className="text-xl font-semibold mb-2">Volunteer at Cyber Peace Institute:</h5>
                Helping NGOs improve their security posture.
              </div>
              <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md border border-accent hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800">
                <h5 className="text-xl font-semibold mb-2">Mentor at University of Washington&apos;s iSchool:</h5>
                Guiding university students to achieve their goals.
              </div>
              <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md border border-accent hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800">
                <h5 className="text-xl font-semibold mb-2">Vice President at Cloud Security Alliance:</h5>
                Building a community of cloud security practitioners.
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <CodeBracketIcon className="h-6 w-6 text-accent mr-2" />
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Featured Projects</h2>
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
            <h2 className="text-3xl font-semibold text-black dark:text-white">Blog</h2>
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
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Experience</h2>
          </div>
          <div className="max-w-6xl mx-auto">
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