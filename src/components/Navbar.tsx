
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, DropletIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent py-4 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white/90 rounded-full p-2 shadow-lg">
              <DropletIcon className="text-zep-blue-500 h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-white">Zep<span className="text-zep-green-400">Wash</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <Link to="/" className="text-white hover:text-zep-green-300 transition-colors font-medium">Home</Link>
              <Link to="/services" className="text-white hover:text-zep-green-300 transition-colors font-medium">Services</Link>
              <Link to="/support" className="text-white hover:text-zep-green-300 transition-colors font-medium">Support</Link>
              <Link to="/about" className="text-white hover:text-zep-green-300 transition-colors font-medium">About</Link>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-zep-blue-600 rounded-full">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-white text-zep-blue-600 hover:bg-zep-green-400 hover:text-white rounded-full">Sign Up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 absolute left-0 right-0 top-16 p-4 z-50">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-zep-green-300 transition-colors py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/services" className="text-white hover:text-zep-green-300 transition-colors py-2" onClick={toggleMenu}>Services</Link>
              <Link to="/support" className="text-white hover:text-zep-green-300 transition-colors py-2" onClick={toggleMenu}>Support</Link>
              <Link to="/about" className="text-white hover:text-zep-green-300 transition-colors py-2" onClick={toggleMenu}>About</Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-white/20">
                <Link to="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-zep-blue-600 rounded-full">Login</Button>
                </Link>
                <Link to="/signup" onClick={toggleMenu}>
                  <Button className="w-full bg-white text-zep-blue-600 hover:bg-zep-green-400 hover:text-white rounded-full">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
