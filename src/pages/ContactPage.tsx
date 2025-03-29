
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair text-center">Contact</h1>
        </div>
      </section>
      
      {/* Contact Content */}
      <Contact />
      
      <Footer />
    </>
  );
};

export default ContactPage;
