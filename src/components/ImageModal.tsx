
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { PhotoType } from "../data/photos";
import { SketchType } from "../data/sketches";

interface ImageModalProps {
  image: PhotoType | SketchType;
  onClose: () => void;
  type: 'photo' | 'sketch';
}

const ImageModal = ({ image, onClose, type }: ImageModalProps) => {
  const isSketch = type === 'sketch';
  const sketch = isSketch ? (image as SketchType) : null;

  return (
    <Dialog open={!!image} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl bg-zaph-black/95 border-zaph-gray/30 p-0 overflow-hidden">
        <div className="relative flex flex-col md:flex-row gap-4 max-h-[90vh]">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="flex-1 md:max-w-[60%] h-full overflow-hidden">
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-contain max-h-[70vh] md:max-h-[80vh]"
            />
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto">
            <h2 className="text-2xl font-playfair text-zaph-cream mb-2">
              {image.title}
            </h2>
            <p className="text-zaph-cream/80 mb-1 text-sm">
              {image.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | {image.year}
            </p>
            {isSketch && sketch && (
              <p className="text-zaph-cream/80 mb-4 text-sm">
                Medium: {sketch.medium}
              </p>
            )}
            <div className="w-12 h-1 bg-zaph-gold mb-4"></div>
            <p className="text-zaph-cream/90 leading-relaxed">
              {image.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
