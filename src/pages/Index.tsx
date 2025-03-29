
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { photos } from '../data/photos';
import { sketches } from '../data/sketches';
import VerticalScroller from '../components/VerticalScroller';

const Index = () => {
  // Get featured items (first 3 from each category)
  const featuredPhotos = photos.slice(0, 3);
  const featuredSketches = sketches.slice(0, 3);
  
  // Ref for the scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Handle scroll events to determine active section
  const handleScroll = (sectionIndex: number) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    setActiveSection(sectionIndex);
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className="h-screen overflow-hidden bg-zaph-black">
      <Navbar isTransparent={true} />
      
      <VerticalScroller onSectionChange={handleScroll}>
        {/* Hero Section */}
        <section className="h-screen relative flex items-center justify-center">
          <div className="absolute inset-0 bg-zaph-black">
            <img 
              src="/lovable-uploads/cbca9fda-a185-47c7-b5df-37b0ed5d62ed.png" 
              alt="Fine Art Photography" 
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-zaph-cream animate-fade-in">
              ZAPH
            </h1>
            <p className="text-zaph-cream/90 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in">
              Fine art photography and sketches celebrating the beauty of human form
            </p>
            
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown size={32} className="text-zaph-gold" />
            </div>
          </div>
        </section>
        
        {/* Photography Preview */}
        <section className="h-screen relative flex items-center">
          <div className="absolute inset-0 bg-zaph-black/90">
            <div className="absolute inset-0 bg-gradient-to-r from-zaph-black via-transparent to-zaph-black"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-zaph-cream">Fine Art Photography</h2>
                <p className="text-zaph-cream/80 mb-8">
                  Exploring the human form through light, shadow, and emotion. Each piece tells a unique story of beauty and vulnerability.
                </p>
                <Link to="/photography" className="group flex items-center text-zaph-gold hover:text-zaph-cream transition-colors duration-300">
                  <span className="mr-2">Explore the collection</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              <div className="order-1 md:order-2 grid grid-cols-2 gap-4 h-[70vh] max-h-[600px]">
                <div className="h-full transform translate-y-12">
                  <img 
                    src="/lovable-uploads/c4fb00dc-60df-45f4-98e7-4c4470d9fee4.png" 
                    alt="Photography preview" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-full transform -translate-y-12">
                  <img 
                    src="/lovable-uploads/90330d0e-9ef9-4173-a73f-6bb7e7a51986.png" 
                    alt="Photography preview" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sketches Preview */}
        <section className="h-screen relative flex items-center">
          <div className="absolute inset-0 bg-zaph-black/90">
            <div className="absolute inset-0 bg-gradient-to-r from-zaph-black via-transparent to-zaph-black"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="grid grid-cols-2 gap-4 h-[70vh] max-h-[600px]">
                  <div className="h-full transform -translate-y-12">
                    <img 
                      src="/lovable-uploads/e5454670-6faa-4efa-b090-1685b9dbd8e2.png" 
                      alt="Sketch preview" 
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-full transform translate-y-12">
                    <img 
                      src="/lovable-uploads/6ceaa8ce-453c-4dd4-b786-17c869bbc6fa.png" 
                      alt="Sketch preview" 
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              
              <div className="order-2">
                <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-zaph-cream">Artistic Sketches</h2>
                <p className="text-zaph-cream/80 mb-8">
                  Hand-crafted sketches celebrating the beauty of the human form. Each sketch captures the essence of its subject with delicate lines and subtle shading.
                </p>
                <Link to="/sketches" className="group flex items-center text-zaph-gold hover:text-zaph-cream transition-colors duration-300">
                  <span className="mr-2">View the sketches</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Preview */}
        <section className="h-screen relative flex items-center justify-center">
          <div className="absolute inset-0 bg-zaph-black/70">
            <img 
              src="https://images.unsplash.com/photo-1612993228243-a1bcfd78242d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8cGhvdG9ncmFwaGVyLXBvcnRyYWl0fHx8fHx8MTcxNzYyMDc3Nw&ixlib=rb-4.0.3&q=80&w=1080" 
              alt="Zaph - Artist" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-zaph-cream">About the Artist</h2>
            <p className="text-zaph-cream/90 text-lg max-w-2xl mx-auto mb-8">
              Fine art portrait photographer from India, currently based in Romania, specializing in boudoir and fine nude art.
            </p>
            <Link to="/about" className="inline-block px-6 py-3 border border-zaph-gold text-zaph-gold hover:bg-zaph-gold hover:text-zaph-black transition-colors duration-300">
              Learn more
            </Link>
          </div>
        </section>
        
        {/* Contact Preview */}
        <section className="h-screen relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-zaph-black to-zaph-black/70"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-zaph-cream">Get in Touch</h2>
            <p className="text-zaph-cream/90 text-lg max-w-2xl mx-auto mb-8">
              For collaborations, custom artwork, or any inquiries
            </p>
            <Link to="/contact" className="inline-block px-6 py-3 border border-zaph-cream/70 text-zaph-cream hover:border-zaph-cream transition-all duration-300">
              Contact me
            </Link>
          </div>
        </section>
        
        <Footer />
      </VerticalScroller>
    </div>
  );
};

export default Index;
