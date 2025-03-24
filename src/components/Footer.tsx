function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [{
    text: 'Project Archive',
    href: '/projects'
  }];

  return (
    <footer className="mt-12 border-t border-gray-800 py-8">
      <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <div className="font-ibm-plex-sans text-sm font-light text-white opacity-80">
          {currentYear} Nolan Figueroa. All rights reserved. 🎖️
        </div>
        <nav className="flex space-x-6">
          {links.map(({ text, href }) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center gap-1 font-ibm-plex-sans text-sm font-light text-white opacity-80 transition-opacity hover:opacity-100"
              target="_self"
              rel="noopener noreferrer"
            >
              {text}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
