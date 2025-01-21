// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import Link from 'next/link';

// Update the props interface to match Next.js requirements
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Update the generateMetadata function with the correct Props type
export async function generateMetadata(
    { params }: Props): Promise<Metadata> {
  try {
    const slug = (await params).slug
    const post = await getPostBySlug(slug);
    return {
      title: `${post.title} | Your Name`,
      description: post.excerpt,
    };
  } catch {
    return {
      title: 'Post Not Found | Your Name',
      description: 'The requested blog post could not be found.',
    };
  }
}

// Static params generation remains the same
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Update the page component with the correct Props type
export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    const slug = (await params).slug
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="max-w-3xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center text-accent hover:text-accent/80 mb-8"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-1" />
                {post.readingTime}
              </span>
            </div>
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}