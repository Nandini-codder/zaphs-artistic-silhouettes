
import { useState } from 'react';
import { SketchType } from '../data/sketches';
import ImageModal from './ImageModal';

interface SketchGalleryProps {
  items: SketchType[];
  category?: string;
}

const SketchGallery = ({ items, category }: SketchGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<SketchType | null>(null);
  
  // Filter by category if provided
  const filteredItems = category ? items.filter(item => item.category === category) : items;

  return (
    <div className="w-full">
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item"
            onClick={() => setSelectedImage(item)}
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-end">
              <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-playfair">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          type="sketch"
        />
      )}
    </div>
  );
};

export default SketchGallery;
