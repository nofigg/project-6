import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import TextScramble from '../components/TextScramble';
import Image from 'next/image';
import { posts } from '../data/blog';

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="mb-4 text-2xl font-semibold">Post not found</h1>
        <Link to="/" className="text-primary-400 hover:text-primary-300">
          Return to home
        </Link>
      </div>
    );
  }

  // Dynamically import the blog post component
  const PostComponent = React.lazy(() => import(`./blog/${slug}/index.tsx`));

  return (
    <article className="prose max-w-none dark:prose-invert">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1 font-ibm-plex-sans text-white opacity-80 transition-opacity hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to home
        </Link>
      </div>

      <div className="mb-8">
        <TextScramble text={post.title} className="mb-4 font-ibm-plex-sans text-4xl font-bold" />
        <div className="flex items-center space-x-2 font-ibm-plex-sans text-gray-500 dark:text-gray-400">
          <time dateTime={post.pubDate.toISOString()}>{format(post.pubDate, 'MMMM d, yyyy')}</time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
      </div>

      {post.image && (
        <div className="relative w-full h-64 mb-8">
          <Image
            src={post.image.url}
            alt={post.image.alt}
            fill
            className="object-cover rounded-lg"
            priority
          />
          {post.image.alt && (
            <p className="mt-2 text-center text-sm text-gray-400">{post.image.alt}</p>
          )}
        </div>
      )}

      <React.Suspense
        fallback={<div className="h-64 w-full animate-pulse rounded-lg bg-gray-200" />}
      >
        <PostComponent />
      </React.Suspense>
    </article>
  );
}

export default BlogPost;
