import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

function Header({ className = '' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className} ${
        isScrolled ? 'bg-primary-900/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-white">Nolan</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary-400 transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-white hover:text-primary-400 transition-colors">
              Blog
            </Link>
            <Link to="/projects" className="text-white hover:text-primary-400 transition-colors">
              Projects
            </Link>
            <a
              href="https://x.com/nofigg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-400 transition-colors"
            >
              Follow Me
            </a>
          </div>

          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden fixed top-16 left-0 right-0 bg-primary-900/90 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="px-4 py-4">
            <Link
              to="/"
              onClick={handleMobileLinkClick}
              className="block text-white hover:text-primary-400 transition-colors mb-4"
            >
              Home
            </Link>
            <Link
              to="/blog"
              onClick={handleMobileLinkClick}
              className="block text-white hover:text-primary-400 transition-colors mb-4"
            >
              Blog
            </Link>
            <Link
              to="/projects"
              onClick={handleMobileLinkClick}
              className="block text-white hover:text-primary-400 transition-colors mb-4"
            >
              Projects
            </Link>
            <a
              href="https://x.com/nofigg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileLinkClick}
              className="block text-white hover:text-primary-400 transition-colors"
            >
              Follow Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
