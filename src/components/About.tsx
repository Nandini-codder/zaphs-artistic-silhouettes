
import React from 'react';
import { Instagram } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-12">About the Artist</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="aspect-[3/4] rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1612993228243-a1bcfd78242d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8cGhvdG9ncmFwaGVyLXBvcnRyYWl0fHx8fHx8MTcxNzYyMDc3Nw&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Zaph - Fine Art Photographer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
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
              
              <div className="flex items-center gap-4 mt-8">
                <a href="https://instagram.com/zaaviyen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zaph-cream hover:text-zaph-gold transition-colors">
                  <Instagram size={20} />
                  <span>@zaaviyen</span>
                </a>
                <div className="text-zaph-cream/60">|</div>
                <span className="text-zaph-cream/80">Snapchat: @izaaviyen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
