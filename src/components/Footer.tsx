function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [{ text: 'Follow me', href: 'https://x.com/poweredbynolan' }];

  return (
    <footer className="mt-12 border-t border-gray-800 py-8">
      <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <div className="font-ibm-plex-sans text-sm font-light text-white opacity-80">
          © {currentYear} Nolan Figueroa. All rights reserved. 🎖️
        </div>
        <nav className="flex space-x-6">
          {links.map(({ text, href }) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center gap-1 font-ibm-plex-sans text-sm font-light text-white opacity-80 transition-opacity hover:opacity-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
