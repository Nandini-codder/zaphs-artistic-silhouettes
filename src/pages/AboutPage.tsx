
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair text-center">About</h1>
        </div>
      </section>
      
      {/* About Content */}
      <About />
      
      <Footer />
    </>
  );
};

export default AboutPage;
