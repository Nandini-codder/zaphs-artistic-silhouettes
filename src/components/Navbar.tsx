
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isTransparent?: boolean;
}

const Navbar = ({ isTransparent = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navClasses = isTransparent && !scrolled
    ? 'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 bg-transparent'
    : `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zaph-black/90 backdrop-blur-sm py-2' : 'py-4 bg-zaph-black'}`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-playfair text-2xl text-zaph-cream tracking-widest relative group overflow-hidden">
          <span className="relative z-10 group-hover:text-zaph-gold transition-colors duration-500">ZAPH</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-zaph-gold group-hover:w-full transition-all duration-700"></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2">
          {['Home', 'Photography', 'Sketches', 'About', 'Contact'].map((item, index) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className={`nav-link relative overflow-hidden ${isActive(item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-zaph-gold hover:w-full transition-all duration-500"></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-zaph-cream p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zaph-black/95 backdrop-blur-sm absolute top-full left-0 w-full border-t border-zaph-gray/20 animate-fade-in">
          <div className="flex flex-col py-4">
            {['Home', 'Photography', 'Sketches', 'About', 'Contact'].map((item, index) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link px-6 py-3 ${isActive(item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'active' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative">
                  {item}
                  {isActive(item === 'Home' ? '/' : `/${item.toLowerCase()}`) && (
                    <span className="absolute -bottom-1 left-0 w-8 h-[1px] bg-zaph-gold"></span>
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
