import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);

  const navLinks = [
    { name: 'Clubs', path: '/clubs' },
    { name: 'Fests', path: '/fests' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">LifeAtNIT</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Home link */}
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Home
            </Link>

            {/* Accommodation Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccommodationOpen(!accommodationOpen)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center gap-1"
              >
                Accommodation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {accommodationOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  {/* ^ Added z-50 class to make it appear on top */}
                  <div className="py-1">
                    <Link
                      to="/accommodation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setAccommodationOpen(false)}
                    >
                      Guest House
                    </Link>
                    <a
                      href="https://hostel-page-module-nit-sgr.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setAccommodationOpen(false)}
                    >
                      Hostel
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Other navigation links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Home link for mobile */}
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Accommodation Dropdown for mobile */}
            <div className="relative">
              <button
                onClick={() => setAccommodationOpen(!accommodationOpen)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
              >
                Accommodation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {accommodationOpen && (
                <div className="pl-4">
                  <Link
                    to="/accommodation"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => {
                      setIsOpen(false);
                      setAccommodationOpen(false);
                    }}
                  >
                    Guest House
                  </Link>
                  <a
                    href="https://hostel-page-module-nit-sgr.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => {
                      setIsOpen(false);
                      setAccommodationOpen(false);
                    }}
                  >
                    Hostel
                  </a>
                </div>
              )}
            </div>

            {/* Other navigation links for mobile */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;