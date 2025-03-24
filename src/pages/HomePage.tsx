import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import TextScramble from '../components/TextScramble';
import FloatingBanner from '../components/FloatingBanner';
import { posts } from '../data/blog';

function HomePage() {
  const allPosts = Object.values(posts);
  // Sort posts by date in descending order (newest first)
  const sortedPosts = allPosts.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  const recentPosts = sortedPosts.slice(0, 5);

  return (
    <section className="space-y-8">
      <FloatingBanner />
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <TextScramble
            text="Recent Work"
            className="font-ibm-plex-sans text-2xl font-semibold text-white"
          />
          <svg
            className="hidden h-5 w-5 text-white lg:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v13m0 0l-5-5m5 5l5-5"
            />
          </svg>
        </div>

        <div className="space-y-8">
          {recentPosts.map((post, index) => (
            <article key={post.slug} className="group">
              <Link to={`/blog/${post.slug}`} className="block space-y-2">
                <div className="flex items-center space-x-2 font-ibm-plex-sans text-sm text-white">
                  <TextScramble text={format(post.pubDate, 'MMMM d, yyyy')} delay={index * 50} />
                  <span>•</span>
                  <TextScramble text={`${post.readTime} min read`} delay={index * 50} />
                </div>
                <TextScramble
                  text={post.title}
                  className="font-ibm-plex-sans text-xl font-semibold text-primary-400 underline-offset-4 transition-all duration-300 group-hover:underline"
                  delay={index * 50}
                />
                <TextScramble
                  text={post.description}
                  className="font-ibm-plex-sans text-gray-400 line-clamp-3"
                  delay={index * 50}
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
