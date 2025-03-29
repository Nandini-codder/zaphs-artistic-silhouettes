
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/lovable-uploads/cbca9fda-a185-47c7-b5df-37b0ed5d62ed.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair text-center mb-4">About</h1>
          <div className="w-16 h-1 bg-zaph-gold mx-auto mb-6"></div>
          <p className="text-center text-zaph-cream/80 max-w-2xl mx-auto">
            Exploring the human form through photography and traditional media
          </p>
        </div>
      </section>
      
      {/* About Content */}
      <About />
      
      <Footer />
    </>
  );
};

export default AboutPage;
