import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import type { BlogPost } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/content/blog/posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const readingTime = Math.ceil(content.split(/\s+/).length / 200) + ' min read';

  return {
    slug: realSlug,
    title: data.title,
    date: format(new Date(data.date), 'MMMM dd, yyyy'),
    excerpt: data.excerpt,
    content,
    tags: data.tags || [],
    readingTime,
  } as BlogPost;
}

export async function getAllPosts() {
    const slugs = getPostSlugs();

    // Use Promise.all to resolve all promises returned by getPostBySlug
    const posts = await Promise.all(
        slugs.map(async (slug) => {
        // Await the result of getPostBySlug for each slug
        const post = await getPostBySlug(slug);
        return post;
        })
    );

    // Sort the posts by date
    return posts.sort((post1, post2) => {
        return new Date(post2.date).getTime() - new Date(post1.date).getTime();
    });
}

export function sortByDate(posts: BlogPost[]): BlogPost[] {
    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}