
import React from 'react';
import { Instagram } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const portfolioImages = [
    "/lovable-uploads/c4fb00dc-60df-45f4-98e7-4c4470d9fee4.png",
    "/lovable-uploads/90330d0e-9ef9-4173-a73f-6bb7e7a51986.png",
    "/lovable-uploads/e5454670-6faa-4efa-b090-1685b9dbd8e2.png",
    "/lovable-uploads/cbca9fda-a185-47c7-b5df-37b0ed5d62ed.png",
    "/lovable-uploads/6ceaa8ce-453c-4dd4-b786-17c869bbc6fa.png"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-12">About the Artist</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left column with profile image */}
          <div className="md:col-span-4">
            <div className="space-y-8">
              <div className="aspect-[3/4] rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612993228243-a1bcfd78242d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8cGhvdG9ncmFwaGVyLXBvcnRyYWl0fHx8fHx8MTcxNzYyMDc3Nw&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="Zaph - Fine Art Photographer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col gap-4 mt-6">
                <a href="https://instagram.com/zaaviyen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zaph-cream hover:text-zaph-gold transition-colors group">
                  <Instagram size={20} className="group-hover:text-zaph-gold transition-colors" />
                  <span>@zaaviyen</span>
                </a>
                <span className="text-zaph-cream/80">Snapchat: @izaaviyen</span>
              </div>
            </div>
          </div>
          
          {/* Right column with text and carousel */}
          <div className="md:col-span-8 flex flex-col gap-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl font-light mb-4">
                My name is Zaph, and I am a fine art portrait photographer from India, currently based in Romania. I specialize in boudoir, fine nude art, and fashion photography, capturing intimate and artistic expressions of the human form.
              </p>
              
              <p className="mb-4">
                My work is a blend of emotion, aesthetics, and storytelling, focused on creating visually compelling and deeply personal images. I strive to capture the beauty and vulnerability of my subjects, creating artwork that resonates on a deeply human level.
              </p>
              
              <p className="mb-4">
                In addition to photography, I am a dedicated sketch artist. I create figure sketches in fine artistic nudes and semi nudes, celebrating the beauty and form of the human body through drawing.
              </p>
              
              <p className="mb-6">
                I am always open to working with new people for photoshoots, creative collaborations, and custom projects. If you're interested in a custom painting or a personalized shoot, please reach out for rates. Additionally, I occasionally draw people for free to expand my portfolio.
              </p>
            </div>
            
            {/* Portfolio carousel */}
            <div className="mt-8">
              <h3 className="text-2xl font-playfair mb-6">Selected Work</h3>
              <Carousel className="w-full">
                <CarouselContent>
                  {portfolioImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                      <div className="p-1">
                        <AspectRatio ratio={3/4} className="bg-zaph-black/20 overflow-hidden">
                          <img
                            src={image}
                            alt={`Portfolio work ${index + 1}`}
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                          />
                        </AspectRatio>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-zaph-black/70 hover:bg-zaph-black border-zaph-gray/30 text-zaph-cream" />
                <CarouselNext className="right-2 bg-zaph-black/70 hover:bg-zaph-black border-zaph-gray/30 text-zaph-cream" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
