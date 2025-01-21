// src/app/blog/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog'; // Assuming your blog type
import { sortByDate } from '@/lib/blog'

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(filename => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data } = matter(fileContents);

    return {
       slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      readingTime: data.readingTime,
      tags: data.tags
    } as BlogPost
  });
    return sortByDate(posts)
}