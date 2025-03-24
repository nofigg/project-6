import React from 'react';

const SaasPlatformRedesign = () => {
  return (
    <div className="prose-lg font-ibm-plex-sans">
      <section>
        <p className="mb-6">
          When I was tasked with redesigning a legacy SaaS platform, I knew the challenge would be
          balancing modern design principles with enterprise requirements. The existing platform was
          functional but outdated, leading to user frustration and decreased productivity.
        </p>

        <h2 className="mb-4 mt-8 font-ibm-plex-sans text-3xl font-bold text-white">
          The Challenge
        </h2>

        <p className="mb-6">The original platform had several critical issues:</p>

        <ul className="mb-6 list-disc pl-6">
          <li>Outdated UI components</li>
          <li>Poor mobile responsiveness</li>
          <li>Inconsistent navigation patterns</li>
          <li>Slow performance</li>
        </ul>

        <h2 className="mb-4 mt-8 font-ibm-plex-sans text-3xl font-bold text-white">
          Research and Discovery
        </h2>

        <p className="mb-6">I spent three weeks conducting:</p>

        <ul className="mb-6 list-disc pl-6">
          <li>User interviews with 20 enterprise customers</li>
          <li>Competitive analysis of 8 leading SaaS platforms</li>
          <li>Usage analytics review</li>
          <li>Technical architecture assessment</li>
        </ul>

        <h2 className="mb-4 mt-8 font-ibm-plex-sans text-3xl font-bold text-white">
          Design Solutions
        </h2>

        <h3 className="mb-3 mt-6 font-ibm-plex-sans text-2xl font-bold text-white">
          1. Modern UI System
        </h3>

        <p className="mb-6">
          - Implemented a design system with consistent components
          <br />
          - Created a responsive grid layout
          <br />
          - Developed a new color palette
          <br />- Updated typography hierarchy
        </p>

        <h3 className="mb-3 mt-6 font-ibm-plex-sans text-2xl font-bold text-white">
          2. Performance Optimization
        </h3>

        <p className="mb-6">
          - Implemented lazy loading for components
          <br />
          - Optimized image assets
          <br />
          - Reduced bundle size
          <br />- Improved server response times
        </p>

        <h3 className="mb-3 mt-6 font-ibm-plex-sans text-2xl font-bold text-white">
          3. Enterprise Features
        </h3>

        <p className="mb-6">
          - Added multi-tenant support
          <br />
          - Implemented role-based access control
          <br />
          - Created custom dashboard widgets
          <br />- Added audit logging
        </p>

        <h2 className="mb-4 mt-8 font-ibm-plex-sans text-3xl font-bold text-white">Results</h2>

        <ul className="mb-6 list-disc pl-6">
          <li>55% increase in user satisfaction scores</li>
          <li>42% reduction in support tickets</li>
          <li>38% improvement in page load times</li>
          <li>25% increase in feature adoption rates</li>
        </ul>

        <h2 className="mb-4 mt-8 font-ibm-plex-sans text-3xl font-bold text-white">
          Key Learnings
        </h2>

        <ol className="mb-6 list-decimal pl-6">
          <li>Enterprise users value consistency and reliability</li>
          <li>Performance is just as important as features</li>
          <li>Security and compliance must be prioritized</li>
          <li>Customization options are crucial for adoption</li>
        </ol>

        <p>
          This project demonstrated that a successful SaaS platform redesign requires careful
          consideration of both modern design principles and enterprise-specific requirements. By
          balancing these needs, we created a platform that not only looks modern but also meets the
          complex needs of enterprise users.
        </p>
      </section>
    </div>
  );
};

export default SaasPlatformRedesign;
