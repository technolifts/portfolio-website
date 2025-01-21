// src/app/blog/page.tsx
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thoughts and insights on security, software development, and technology
          </p>
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}