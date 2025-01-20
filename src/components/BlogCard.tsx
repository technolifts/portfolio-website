import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import type { BlogPost } from '@/types/blog';

interface BlogCardProps {
post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
return (
    <Link href={`/blog/${post.slug}`}>
    <article className="card hover:shadow-lg transition-shadow cursor-pointer">
        <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
        <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            {post.date}
            </span>
            <span className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            {post.readingTime}
            </span>
        </div>
        </div>
        
        <p className="text-gray-300 mb-4">
        {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
            <span
            key={tag}
            className="px-3 py-1 text-sm bg-gray-700 rounded-full"
            >
            {tag}
            </span>
        ))}
        </div>
    </article>
    </Link>
);
}