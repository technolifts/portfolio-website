import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import type { BlogPost } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/content/blog/posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
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

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (new Date(post2.date) as any) - (new Date(post1.date) as any));
  return posts;
}
