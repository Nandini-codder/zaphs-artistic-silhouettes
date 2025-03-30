
import { useState } from 'react';
import { PhotoType } from '../data/photos';
import ImageModal from './ImageModal';

interface GalleryProps {
  items: PhotoType[];
  category?: string;
}

const Gallery = ({ items, category }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<PhotoType | null>(null);
  
  // Filter by category if provided
  const filteredItems = category ? items.filter(item => item.category === category) : items;

  return (
    <div className="w-full">
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item group"
            data-orientation={item.width > item.height ? 'landscape' : 'portrait'}
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
          type="photo"
        />
      )}
    </div>
  );
};

export default Gallery;
