import React from 'react';
import Image from 'next/image';

const RedesigningFintechDashboard = () => {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Redesigning a Fintech Dashboard</h1>
      <p className="text-gray-400 mb-8">
        Published on {new Date().toLocaleDateString()}
      </p>

      <div className="relative w-full h-64 mb-8">
        <Image
          src="/images/fintech-dashboard/hero.png"
          alt="Redesigned Fintech Dashboard Hero"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <p>
        When I was approached to redesign a financial trading platform&apos;s dashboard, I knew the challenge would be balancing complexity with usability. The existing dashboard was powerful but overwhelming, leading to user frustration and decreased productivity.
      </p>

      <h2 className="mb-4 mt-8 font-ibm-plex-sans text-3xl font-bold text-white">
        The Challenge
      </h2>

      <p className="mb-6">The original dashboard suffered from several issues:</p>

      <ul className="mb-6 list-disc pl-6">
        <li>Information overload with too many metrics displayed simultaneously</li>
        <li>Unclear hierarchy of information</li>
        <li>Inconsistent design patterns</li>
        <li>Poor mobile responsiveness</li>
      </ul>

      <h2 className="mb-4 mt-8 font-ibm-plex-sans text-3xl font-bold text-white">
        Research and Discovery
      </h2>

      <p className="mb-6">I spent two weeks conducting:</p>

      <ul className="mb-6 list-disc pl-6">
        <li>User interviews with 12 active traders</li>
        <li>Competitive analysis of 5 leading trading platforms</li>
        <li>Heatmap analysis of the existing dashboard</li>
        <li>Review of support tickets and user feedback</li>
      </ul>

      <h2 className="mb-4 mt-8 font-ibm-plex-sans text-3xl font-bold text-white">The Solution</h2>

      <h3 className="mb-3 mt-6 font-ibm-plex-sans text-2xl font-bold text-white">
        1. Information Architecture
      </h3>

      <p className="mb-6">I reorganized the dashboard into clear sections:</p>

      <ul className="mb-6 list-disc pl-6">
        <li>Market Overview</li>
        <li>Active Trades</li>
        <li>Portfolio Performance</li>
        <li>Alerts & Notifications</li>
      </ul>

      <h3 className="mb-3 mt-6 font-ibm-plex-sans text-2xl font-bold text-white">
        2. Visual Hierarchy
      </h3>

      <p className="mb-6">
        - Implemented a clear typographic scale
        <br />
        - Used color to indicate data importance
        <br />- Created distinct card-based layouts for different data types
      </p>

      <h3 className="mb-3 mt-6 font-ibm-plex-sans text-2xl font-bold text-white">
        3. Responsive Design
      </h3>

      <p className="mb-6">
        - Developed a fluid grid system
        <br />
        - Created collapsible sections for mobile
        <br />- Optimized touch targets for tablet users
      </p>

      <h2 className="mb-4 mt-8 font-ibm-plex-sans text-3xl font-bold text-white">Results</h2>

      <ul className="mb-6 list-disc pl-6">
        <li>42% reduction in support tickets</li>
        <li>35% increase in daily active users</li>
        <li>28% improvement in task completion rates</li>
      </ul>

      <p>
        This project reinforced the importance of user research and iterative design in creating effective financial tools.
      </p>
    </article>
  );
};

export default RedesigningFintechDashboard;
