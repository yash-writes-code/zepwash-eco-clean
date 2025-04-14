import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white py-4 shadow-sm sticky top-0 z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-zep-blue-500">
              Zep<span className="text-zep-green-500">Wash</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <Link to="/" className="text-gray-700 hover:text-zep-blue-500 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-zep-blue-500 transition-colors">Services</Link>
              <Link to="/support" className="text-gray-700 hover:text-zep-blue-500 transition-colors">Support</Link>
              <Link to="/about" className="text-gray-700 hover:text-zep-blue-500 transition-colors">About</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg absolute left-0 right-0 top-16 p-4 z-50">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-zep-blue-500 transition-colors py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-zep-blue-500 transition-colors py-2" onClick={toggleMenu}>Services</Link>
              <Link to="/support" className="text-gray-700 hover:text-zep-blue-500 transition-colors py-2" onClick={toggleMenu}>Support</Link>
              <Link to="/about" className="text-gray-700 hover:text-zep-blue-500 transition-colors py-2" onClick={toggleMenu}>About</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
