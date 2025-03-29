
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import SketchGallery from '../components/SketchGallery';
import About from '../components/About';
import Contact from '../components/Contact';
import { photos } from '../data/photos';
import { sketches } from '../data/sketches';

const Index = () => {
  // Get featured items (first 3 from each category)
  const featuredPhotos = photos.slice(0, 3);
  const featuredSketches = sketches.slice(0, 3);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-[100vh] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-zaph-black">
          <img 
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8YmxhY2stcGhvdG9ncmFwaHl8fHx8fHwxNzE3NjIwNTkx&ixlib=rb-4.0.3&q=80&w=1080" 
            alt="Fine Art Photography" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-zaph-cream animate-fade-in">
            Artistic Expressions
          </h1>
          <p className="text-zaph-cream/90 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in">
            Fine art photography and sketches celebrating the beauty of human form
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link 
              to="/photography" 
              className="px-6 py-3 border border-zaph-gold text-zaph-gold hover:bg-zaph-gold hover:text-zaph-black transition-colors"
            >
              View Photography
            </Link>
            <Link 
              to="/sketches" 
              className="px-6 py-3 border border-zaph-cream/70 text-zaph-cream/90 hover:border-zaph-cream hover:text-zaph-cream transition-colors"
            >
              View Sketches
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Photography */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair">Featured Photography</h2>
            <Link to="/photography" className="flex items-center text-zaph-cream/80 hover:text-zaph-gold transition-colors">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <Gallery items={featuredPhotos} />
        </div>
      </section>
      
      {/* Featured Sketches */}
      <section className="py-20 px-4 bg-zaph-black/50">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair">Featured Sketches</h2>
            <Link to="/sketches" className="flex items-center text-zaph-cream/80 hover:text-zaph-gold transition-colors">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <SketchGallery items={featuredSketches} />
        </div>
      </section>
      
      {/* About Section */}
      <About />
      
      {/* Contact Section */}
      <Contact />
      
      <Footer />
    </>
  );
};

export default Index;
