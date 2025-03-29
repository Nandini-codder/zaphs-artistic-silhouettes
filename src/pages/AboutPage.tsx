
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen relative bg-zaph-black">
      <Navbar />
      
      {/* Artistic Header */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/cbca9fda-a185-47c7-b5df-37b0ed5d62ed.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Vertical text on left */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 transform -rotate-90 origin-left">
          <h2 className="text-zaph-gold/70 text-xl tracking-[0.5em] uppercase">Artist</h2>
        </div>
        
        {/* Main title */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-7xl md:text-9xl font-playfair text-zaph-cream mb-6">Zaph</h1>
          <div className="w-16 h-1 bg-zaph-gold mx-auto mb-10"></div>
          <p className="text-zaph-cream/80 max-w-xl mx-auto text-xl md:text-2xl italic font-light">
            Exploring the human form through photography and traditional media
          </p>
        </div>
      </div>
      
      {/* About Content with Artistic Layout */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left column with profile image */}
            <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-32">
              <div className="space-y-8">
                <div className="aspect-[3/4] rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1612993228243-a1bcfd78242d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8cGhvdG9ncmFwaGVyLXBvcnRyYWl0fHx8fHx8MTcxNzYyMDc3Nw&ixlib=rb-4.0.3&q=80&w=1080" 
                    alt="Zaph - Fine Art Photographer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex flex-col gap-4 mt-6">
                  <a href="https://instagram.com/zaaviyen" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="flex items-center gap-2 text-zaph-cream hover:text-zaph-gold transition-colors">
                      <span className="font-bold">Instagram</span>
                      <span className="text-zaph-cream/80 group-hover:text-zaph-gold transition-colors">@zaaviyen</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-zaph-cream">Snapchat</span>
                    <span className="text-zaph-cream/80">@izaaviyen</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column with text and image gallery */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-16">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-2xl font-light mb-6 leading-relaxed">
                  My name is Zaph, and I am a fine art portrait photographer from India, currently based in Romania. I specialize in boudoir, fine nude art, and fashion photography, capturing intimate and artistic expressions of the human form.
                </p>
                
                <p className="mb-6">
                  My work is a blend of emotion, aesthetics, and storytelling, focused on creating visually compelling and deeply personal images. I strive to capture the beauty and vulnerability of my subjects, creating artwork that resonates on a deeply human level.
                </p>
                
                <div className="w-16 h-0.5 bg-zaph-gold/50 my-10"></div>
                
                <p className="mb-6">
                  In addition to photography, I am a dedicated sketch artist. I create figure sketches in fine artistic nudes and semi nudes, celebrating the beauty and form of the human body through drawing.
                </p>
                
                <p className="mb-10">
                  I am always open to working with new people for photoshoots, creative collaborations, and custom projects. If you're interested in a custom painting or a personalized shoot, please reach out for rates. Additionally, I occasionally draw people for free to expand my portfolio.
                </p>
              </div>
              
              {/* Portfolio preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "/lovable-uploads/c4fb00dc-60df-45f4-98e7-4c4470d9fee4.png",
                  "/lovable-uploads/90330d0e-9ef9-4173-a73f-6bb7e7a51986.png",
                  "/lovable-uploads/e5454670-6faa-4efa-b090-1685b9dbd8e2.png",
                  "/lovable-uploads/6ceaa8ce-453c-4dd4-b786-17c869bbc6fa.png"
                ].map((image, index) => (
                  <div 
                    key={index} 
                    className={`aspect-[3/4] overflow-hidden ${index % 3 === 0 ? 'md:col-span-2' : ''}`}
                  >
                    <img 
                      src={image} 
                      alt={`Portfolio piece ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
