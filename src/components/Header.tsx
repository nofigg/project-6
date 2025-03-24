import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const emailSubject = "Nolan, let's get to work. 🚀";
  const emailLink = `mailto:nfigueroa06@gmail.com?subject=${encodeURIComponent(emailSubject)}`;

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="py-4">
      <nav className="relative flex items-center justify-between">
        <a
          href="/"
          onClick={handleLogoClick}
          className="rounded-sm font-['Smooch'] text-4xl text-white transition-colors duration-300 ease-in-out hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-[#0A0118]"
          aria-label="Go to homepage"
        >
          Nolan
        </a>

        <a
          href={emailLink}
          className="rounded-md bg-gray-800 px-3 py-2 font-ibm-plex-mono text-sm font-semibold italic text-white transition-colors hover:bg-gray-700 hover:text-gray-300"
        >
          Contact Me
        </a>
      </nav>
      <div
        className="absolute left-0 right-0 border-t border-gray-800"
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          marginTop: '1rem',
        }}
      />
    </header>
  );
}

export default Header;
