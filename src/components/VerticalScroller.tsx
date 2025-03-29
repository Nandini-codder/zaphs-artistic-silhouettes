
import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface VerticalScrollerProps {
  children: ReactNode[];
  onSectionChange?: (index: number) => void;
}

const VerticalScroller: React.FC<VerticalScrollerProps> = ({ children, onSectionChange }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  
  // Initialize section refs
  useEffect(() => {
    sectionsRef.current = Array(children.length)
      .fill(null)
      .map((_, i) => sectionsRef.current[i] || React.createRef<HTMLDivElement>().current);
  }, [children.length]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if (e.key === 'ArrowDown' && currentSection < children.length - 1) {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, children.length, isScrolling]);
  
  // Handle mouse wheel events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      // Determine scroll direction
      if (e.deltaY > 0 && currentSection < children.length - 1) {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [currentSection, children.length, isScrolling]);
  
  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null || isScrolling) return;
    
    const touchEnd = e.touches[0].clientY;
    const diff = touchStart - touchEnd;
    
    // If the user has scrolled more than 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSection < children.length - 1) {
        // Scrolling down
        scrollToSection(currentSection + 1);
      } else if (diff < 0 && currentSection > 0) {
        // Scrolling up
        scrollToSection(currentSection - 1);
      }
      
      setTouchStart(null);
    }
  };
  
  // Scroll to a specific section
  const scrollToSection = (index: number) => {
    if (index < 0 || index >= children.length || isScrolling) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    
    if (onSectionChange) {
      onSectionChange(index);
    }
    
    // Prevent scrolling for the transition duration
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };
  
  // Create navigation dots
  const renderDots = () => {
    return (
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection
                ? 'bg-zaph-gold scale-125'
                : 'bg-zaph-cream/40 hover:bg-zaph-cream/70'
            }`}
            onClick={() => scrollToSection(index)}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div 
        className="transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        {children.map((child, index) => (
          <div 
            key={index}
            ref={(el) => el && (sectionsRef.current[index] = el)}
            className="h-screen w-full"
          >
            {child}
          </div>
        ))}
      </div>
      
      {renderDots()}
    </div>
  );
};

export default VerticalScroller;
