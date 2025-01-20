import Link from 'next/link'
import Header from '@/components/Header'
import { ArrowRightIcon, CodeBracketIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Security & Software Engineer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building secure, scalable solutions and sharing knowledge about cybersecurity and software development.
          </p>
        </section>

        {/* Featured Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Projects */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <CodeBracketIcon className="h-6 w-6 text-accent mr-2" />
              <h2 className="text-2xl font-semibold">Projects</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore my latest work in software development and security solutions.
            </p>
            <Link 
              href="/projects"
              className="inline-flex items-center text-accent hover:text-accent/80"
            >
              View Projects
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>

          {/* Experience */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="h-6 w-6 text-accent mr-2" />
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey through security engineering and software development.
            </p>
            <Link 
              href="/experience"
              className="inline-flex items-center text-accent hover:text-accent/80"
            >
              View Experience
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>

          {/* Blog */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <DocumentTextIcon className="h-6 w-6 text-accent mr-2" />
              <h2 className="text-2xl font-semibold">Blog</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Thoughts and insights on security, development, and best practices.
            </p>
            <Link 
              href="/blog"
              className="inline-flex items-center text-accent hover:text-accent/80"
            >
              Read Blog
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* About Section */}
        <section className="card max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I'm a Security and Software Engineer passionate about building secure, efficient solutions. 
            With expertise in both offensive and defensive security practices, I help organizations protect 
            their digital assets while delivering high-quality software.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link 
              href="/experience"
              className="button"
            >
              View My Experience
            </Link>
            <Link 
              href="/projects"
              className="button bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100"
            >
              Explore Projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}