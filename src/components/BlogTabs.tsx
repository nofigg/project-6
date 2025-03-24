import { useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useHash } from '../hooks/useHash';

function BlogTabs() {
  const hash = useHash();
  const tabsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLAnchorElement>(null);

  const tabs = [
    { name: 'Recent Work', href: '#recent', current: hash === '#recent' },
    { name: 'Archive', href: '#archive', current: hash === '#archive' },
  ];

  useEffect(() => {
    if (activeTabRef.current && backgroundRef.current) {
      const activeTab = activeTabRef.current;
      const background = backgroundRef.current;

      // Set background width and position to match active tab
      background.style.width = `${activeTab.offsetWidth}px`;
      background.style.left = `${activeTab.offsetLeft}px`;
    }
  }, [hash]);

  return (
    <div className="relative">
      {/* Mobile dropdown */}
      <div className="grid grid-cols-1 sm:hidden">
        <select
          defaultValue={tabs.find((tab) => tab.current)?.href}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 font-ibm-plex-mono text-base font-semibold italic text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          onChange={(e) => (window.location.hash = e.target.value.replace('#', ''))}
        >
          {tabs.map((tab) => (
            <option key={tab.href} value={tab.href}>
              {tab.name}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>

      {/* Desktop tabs */}
      <div className="hidden sm:block" ref={tabsRef}>
        <nav aria-label="Tabs" className="relative flex">
          {/* Background element */}
          <div
            ref={backgroundRef}
            className="absolute h-full rounded-md bg-white transition-all duration-300 ease-in-out"
            aria-hidden="true"
          />

          {/* Tab buttons */}
          {tabs.map((tab) => (
            <a
              key={tab.href}
              ref={tab.current ? activeTabRef : null}
              href={tab.href}
              aria-current={tab.current ? 'page' : undefined}
              className={`
                relative z-10 px-4 py-2 font-ibm-plex-mono text-sm font-semibold italic
                transition-colors duration-300
                ${tab.current ? 'text-gray-900' : 'text-white hover:text-gray-300'}
              `}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default BlogTabs;
