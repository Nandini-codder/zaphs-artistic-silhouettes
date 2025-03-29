
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import { photos } from '../data/photos';

const PhotographyPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'fine-nude-art', label: 'Fine Nude Art' },
    { id: 'boudoir', label: 'Boudoir' },
    { id: 'fashion', label: 'Fashion' },
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair text-center mb-2">Photography</h1>
          <p className="text-center text-zaph-cream/80 max-w-2xl mx-auto mb-12">
            Exploring the human form through light, shadow, and emotion.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id === 'all' ? null : category.id)}
                className={`px-4 py-2 text-sm transition-colors ${
                  (category.id === 'all' && activeCategory === null) || 
                  activeCategory === category.id
                    ? 'bg-zaph-gold text-zaph-black'
                    : 'bg-transparent border border-zaph-gray/30 text-zaph-cream/80 hover:border-zaph-gold/70 hover:text-zaph-gold'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <Gallery items={photos} category={activeCategory || undefined} />
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default PhotographyPage;
