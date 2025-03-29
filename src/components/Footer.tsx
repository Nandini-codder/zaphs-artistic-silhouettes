
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zaph-black border-t border-zaph-gray/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-playfair text-2xl text-zaph-cream">
              ZAPH
            </Link>
            <p className="text-zaph-cream/60 text-sm mt-2">
              Fine Art Photography & Sketches
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="https://instagram.com/zaaviyen" target="_blank" rel="noopener noreferrer" className="text-zaph-cream/80 hover:text-zaph-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            
            <p className="text-sm text-zaph-cream/60">
              © {currentYear} Zaph. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
