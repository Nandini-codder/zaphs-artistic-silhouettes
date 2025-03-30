
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Camera, PenTool } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { photos } from '../data/photos';
import { sketches } from '../data/sketches';
import VerticalScroller from '../components/VerticalScroller';

const Index = () => {
  // Get featured items (first 3 from each category)
  const featuredPhotos = photos.slice(0, 3);
  const featuredSketches = sketches.slice(0, 3);
  
  // Ref for the scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle scroll events to determine active section
  const handleScroll = (sectionIndex: number) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    setActiveSection(sectionIndex);
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create noise texture for grain effect
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    canvas.setAttribute('id', 'noise-canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = '0.035';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9995';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (ctx) {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
      }
      
      ctx.putImageData(imageData, 0, 0);
    }

    return () => {
      const noiseCanvas = document.getElementById('noise-canvas');
      if (noiseCanvas) {
        document.body.removeChild(noiseCanvas);
      }
    };
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };

    const growCursor = () => {
      cursor.style.width = '48px';
      cursor.style.height = '48px';
      cursor.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
    };

    const shrinkCursor = () => {
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      cursor.style.backgroundColor = 'transparent';
    };

    document.addEventListener('mousemove', moveCursor);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', growCursor);
      link.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', growCursor);
        link.removeEventListener('mouseleave', shrinkCursor);
      });
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-zaph-black">
      <Navbar isTransparent={true} />
      
      <VerticalScroller onSectionChange={handleScroll}>
        {/* Hero Section with creative elements */}
        <section className="h-screen relative flex items-center justify-center">
          <div className="absolute inset-0 bg-zaph-black">
            <img 
              src="/lovable-uploads/cover.png"
              alt="Fine Art Photography" 
              className="w-full h-full object-cover opacity-40"
              style={{
                transform: `scale(1.1) translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zaph-black via-transparent to-zaph-black/90"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto overflow-hidden">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-zaph-cream animate-fade-in reveal-up relative">
              <span className="inline-block relative art-text">Z</span>
              <span className="inline-block relative art-text delay-100">A</span>
              <span className="inline-block relative art-text delay-200">P</span>
              <span className="inline-block relative art-text delay-300">H</span>
            </h1>
            <p className="text-zaph-cream/90 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in reveal-left overflow-hidden">
              <span className="block transform transition-transform duration-1000 delay-500">
                Fine art photography and sketches celebrating 
              </span>
              <span className="block transform transition-transform duration-1000 delay-700">
                the beauty of human form
              </span>
            </p>
            
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown size={32} className="text-zaph-gold" />
            </div>
          </div>

          {/* Creative side elements */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="flex flex-col items-center gap-6">
              <div className="h-40 w-[1px] bg-gradient-to-b from-transparent via-zaph-gold/30 to-transparent"></div>
              <div className="text-zaph-gold/60 text-xs tracking-widest transform -rotate-90 whitespace-nowrap">
                FINE ART PHOTOGRAPHY
              </div>
            </div>
          </div>
          
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="flex flex-col items-center gap-6">
              <div className="h-40 w-[1px] bg-gradient-to-b from-transparent via-zaph-gold/30 to-transparent"></div>
              <div className="text-zaph-gold/60 text-xs tracking-widest transform rotate-90 whitespace-nowrap">
                ARTISTIC SKETCHES
              </div>
            </div>
          </div>
        </section>
        
        {/* Photography Preview with creative elements */}
        <section className="h-screen relative flex items-center">
          <div className="absolute inset-0 bg-zaph-black/90">
            <div className="absolute inset-0 bg-gradient-to-r from-zaph-black via-transparent to-zaph-black"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative overflow-hidden reveal-left">
                  <div className="mb-2 flex items-center">
                    <Camera size={18} className="text-zaph-gold mr-2" />
                    <span className="text-zaph-gold/90 tracking-widest text-xs uppercase">Photography Collection</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-zaph-cream relative">
                    Fine Art Photography
                    <span className="absolute -bottom-1 left-0 w-16 h-[1px] bg-zaph-gold/50"></span>
                  </h2>
                  <p className="text-zaph-cream/80 mb-8">
                    Exploring the human form through light, shadow, and emotion. Each piece tells a unique story of beauty and vulnerability.
                  </p>
                  <Link to="/photography" className="group flex items-center text-zaph-gold hover:text-zaph-cream transition-colors duration-300 artistic-hover inline-block p-1">
                    <span className="mr-2">Explore the collection</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              
              <div className="order-1 md:order-2 grid grid-cols-2 gap-4 h-[70vh] max-h-[600px]">
                <div 
                  className="h-full transform translate-y-12 artistic-hover hover-filter"
                  style={{
                    transform: `translateY(3rem) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                    transition: 'transform 0.2s ease-out'
                  }}
                >
                  <img 
                    src="/lovable-uploads/set-1/486062794_650411307909313_3849816689233517024_n.jpg"
                    alt="Photography preview" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div 
                  className="h-full transform -translate-y-12 artistic-hover hover-filter"
                  style={{
                    transform: `translateY(-3rem) translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
                    transition: 'transform 0.2s ease-out'
                  }}
                >
                  <img 
                    src="/lovable-uploads/rando/487122763_1824961904967722_4019071035002266637_n.jpg"
                    alt="Photography preview" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sketches Preview with creative elements */}
        <section className="h-screen relative flex items-center">
          <div className="absolute inset-0 bg-zaph-black/90">
            <div className="absolute inset-0 bg-gradient-to-r from-zaph-black via-transparent to-zaph-black"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="grid grid-cols-2 gap-4 h-[70vh] max-h-[600px]">
                  <div 
                    className="h-full transform -translate-y-12 artistic-hover hover-filter"
                    style={{
                      transform: `translateY(-3rem) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                      transition: 'transform 0.2s ease-out'
                    }}
                  >
                    <img 
                      src="/lovable-uploads/sketch/487297929_9455492637877916_2166289416928223757_n.jpg"
                      alt="Sketch preview" 
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div 
                    className="h-full transform translate-y-12 artistic-hover hover-filter"
                    style={{
                      transform: `translateY(3rem) translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
                      transition: 'transform 0.2s ease-out'
                    }}
                  >
                    <img 
                      src="/lovable-uploads/sketch/485652704_669393119076437_85855511625150372_n.jpg"                      
                      alt="Sketch preview" 
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              
              <div className="order-2">
                <div className="relative overflow-hidden reveal-right">
                  <div className="mb-2 flex items-center">
                    <PenTool size={18} className="text-zaph-gold mr-2" />
                    <span className="text-zaph-gold/90 tracking-widest text-xs uppercase">Sketch Collection</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-zaph-cream relative">
                    Artistic Sketches
                    <span className="absolute -bottom-1 left-0 w-16 h-[1px] bg-zaph-gold/50"></span>
                  </h2>
                  <p className="text-zaph-cream/80 mb-8">
                    Hand-crafted sketches celebrating the beauty of the human form. Each sketch captures the essence of its subject with delicate lines and subtle shading.
                  </p>
                  <Link to="/sketches" className="group flex items-center text-zaph-gold hover:text-zaph-cream transition-colors duration-300 artistic-hover inline-block p-1">
                    <span className="mr-2">View the sketches</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Preview with creative elements */}
        <section className="h-screen relative flex items-center justify-center">
          <div className="absolute inset-0 bg-zaph-black/70">
            <img 
              src="https://images.unsplash.com/photo-1612993228243-a1bcfd78242d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8cGhvdG9ncmFwaGVyLXBvcnRyYWl0fHx8fHx8MTcxNzYyMDc3Nw&ixlib=rb-4.0.3&q=80&w=1080" 
              alt="Zaph - Artist" 
              className="w-full h-full object-cover opacity-30"
              style={{
                transform: `scale(1.05) translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
                transition: 'transform 0.4s ease-out'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zaph-black via-transparent to-zaph-black"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="reveal-up">
              <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-zaph-cream">About the Artist</h2>
              <div className="w-12 h-[1px] bg-zaph-gold mx-auto mb-6"></div>
              <p className="text-zaph-cream/90 text-lg max-w-2xl mx-auto mb-8 art-reveal">
                Fine art portrait photographer from India, currently based in Romania, specializing in boudoir and fine nude art.
              </p>
              <Link to="/about" className="group inline-block px-6 py-3 border border-zaph-gold text-zaph-gold hover:bg-zaph-gold hover:text-zaph-black transition-colors duration-500 relative overflow-hidden">
                <span className="relative z-10">Learn more</span>
                <span className="absolute inset-0 bg-zaph-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              </Link>
            </div>
          </div>
          
          {/* Creative framing elements */}
          <div className="absolute left-10 top-10 w-48 h-48 border-l border-t border-zaph-gold/30 hidden md:block"></div>
          <div className="absolute right-10 bottom-10 w-48 h-48 border-r border-b border-zaph-gold/30 hidden md:block"></div>
        </section>
        
        {/* Contact Preview with creative elements */}
        <section className="h-screen relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-zaph-black to-zaph-black/70"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="reveal-down">
              <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-zaph-cream">Get in Touch</h2>
              <div className="w-12 h-[1px] bg-zaph-cream/30 mx-auto mb-6"></div>
              <p className="text-zaph-cream/90 text-lg max-w-2xl mx-auto mb-8 art-reveal">
                For collaborations, custom artwork, or any inquiries
              </p>
              <Link to="/contact" className="inline-block px-6 py-3 border border-zaph-cream/70 text-zaph-cream hover:border-zaph-cream transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Contact me</span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-zaph-cream/10 group-hover:h-full transition-all duration-300 ease-out"></span>
              </Link>
            </div>
          </div>
          
          {/* Floating social icons */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-6 opacity-70 hover:opacity-100 transition-opacity">
            <a href="https://instagram.com/zaaviyen" target="_blank" rel="noopener noreferrer" 
               className="text-zaph-cream/70 hover:text-zaph-gold transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" 
               className="text-zaph-cream/70 hover:text-zaph-gold transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.166 2.001c.275.013.527.047.777.089.248.042.467.094.686.161a7.84 7.84 0 011.139.44 6.138 6.138 0 011.346.917c.388.36.723.773 1.002 1.22.285.459.498.947.652 1.453.154.507.244 1.033.278 1.57.035.514.025 1.019.028 1.519.001.219.013.406.02.595.011.306.023.621.035.928.006.166.012.331.019.497.003.072.006.143.01.215.012.214.033.425.082.634.064.274.199.545.404.782.278.324.675.605 1.191.802.257.098.531.174.812.227a.99.99 0 01.555.275.925.925 0 01.223.841.947.947 0 01-.141.336.954.954 0 01-.449.346c-.284.125-.578.218-.878.284-1.162.258-2.035.707-2.624 1.303-.268.271-.463.565-.577.875a1.482 1.482 0 00-.1.682c.009.092.033.182.068.267a.744.744 0 00.126.223c.089.114.208.218.351.308.362.226.925.381 1.651.454.245.025.507.039.782.04.229.001.468-.007.709-.027.241-.02.485-.054.723-.099.431-.084.845-.232 1.207-.432.363-.199.677-.442.914-.723.215-.254.375-.54.466-.838.071-.233.091-.476.047-.701a.723.723 0 00-.289-.449 1.377 1.377 0 00-.538-.244 8.631 8.631 0 01-.711-.196 5.522 5.522 0 01-.788-.329 3.742 3.742 0 01-.699-.468 2.86 2.86 0 01-.533-.602 2.88 2.88 0 01-.324-.723 3.243 3.243 0 01-.131-.828c-.009-.304.01-.616.059-.926.049-.315.125-.618.225-.903.086-.245.188-.489.309-.731a8.89 8.89 0 01.374-.701c.144-.247.3-.483.463-.705a9.67 9.67 0
 0 01.525-.644c.172-.194.35-.382.536-.566.186-.185.384-.367.597-.548.213-.182.432-.361.654-.531.223-.169.445-.325.664-.464.219-.139.437-.262.654-.374.217-.113.434-.218.655-.319a16.702 16.702 0 01.666-.271c.194-.072.391-.14.592-.201.202-.061.404-.114.603-.157.199-.043.391-.078.578-.107.186-.029.369-.053.551-.071.183-.018.365-.03.549-.034.201-.005.405.003.605.023.2.021.393.051.576.088a4.63 4.63 0 01.518.15c.16.057.31.119.45.187.14.067.271.143.398.229.127.087.251.189.372.312a2.86 2.86 0 01.308.403 2.18 2.18 0 01.212.427c.052.142.084.285.092.428a.992.992 0 01-.066.442.968.968 0 01-.241.379 1.042 1.042 0 01-.358.255 1.15 1.15 0 01-.408.104 1.024 1.024 0 01-.409-.044 3.574 3.574 0 00-1.033-.106c-.392.02-.739.086-1.037.178a2.204 2.204 0 00-.446.182 1.416 1.416 0 00-.319.209c-.092.077-.163.16-.212.245a.585.585 0 00-.09.27 1.751 1.751 0 00.396.271c.072.042.148.08.228.114.159.069.33.124.509.169.18.044.366.079.556.11.19.031.383.056.577.08.193.023.386.044.578.069.314.042.626.094.932.159.306.066.604.145.891.241a8.714 8.714 0 012.931 1.864 8.114 8.114 0 011.125 1.291 6.93 6.93 0 01.776 1.433c.107.276.191.555.25.833a4.84 4.84 0 01.101.788c.007.244-.002.488-.029.73a4.422 4.422 0 01-.131.756 5.833 5.833 0 01-.279.892 7.66 7.66 0 01-.387.87 7.998 7.998 0 01-.447.781 8.767 8.767 0 01-.5.726c-.256.344-.523.67-.801.977-.277.307-.564.598-.861.872-.295.274-.597.53-.901.765a9.913 9.913 0 01-.929.62 9.312 9.312 0 01-.933.492c-.308.144-.615.27-.92.377-.305.108-.612.199-.918.275-.306.077-.615.141-.929.194a13.61 13.61 0 01-.992.126c-.368.032-.739.047-1.11.042a12.02 12.02 0 01-1.133-.061 11.926 11.926 0 01-1.125-.16 10.98 10.98 0 01-1.112-.259 11.16 11.16 0 01-1.104-.361c-.368-.139-.731-.294-1.09-.468a11.205 11.205 0 01-1.064-.586 11.98 11.98 0 01-1.01-.697 11.564 11.564 0 01-.901-.758 9.812 9.812 0 01-.761-.764 8.28 8.28 0 01-.648-.813 7.085 7.085 0 01-.544-.896 6.653 6.653 0 01-.421-.974 6.555 6.555 0 01-.247-.972 6.417 6.417 0 01-.083-.998c.003-.284.025-.57.07-.856a6.87 6.87 0 01.183-.873c.075-.283.167-.558.274-.824.107-.267.232-.528.374-.78.143-.252.303-.494.476-.725a7.454 7.454 0 011.081-1.21c.193-.174.394-.337.601-.49.208-.153.422-.297.642-.432.221-.134.446-.26.676-.376.23-.115.462-.222.695-.322.234-.1.47-.194.706-.284a13.98 13.98 0 011.418-.492c.235-.07.471-.135.709-.198.238-.063.477-.124.718-.183.242-.06.484-.119.728-.176.245-.057.49-.113.738-.166.247-.053.497-.105.749-.155.252-.05.505-.098.76-.145.255-.047.511-.093.768-.138.28-.049.561-.096.842-.14.281-.044.561-.083.84-.116.279-.033.558-.061.837-.084.279-.023.561-.042.849-.058.292-.017.587-.03.884-.04.297-.01.595-.016.894-.017a18.43 18.43 0 011.735.085c.265.025.522.057.769.092.247.036.486.078.718.123.232.045.459.095.682.148.223.053.443.11.663.168.22.059.438.119.653.182.214.063.423.128.629.197.206.069.408.143.608.226.201.083.4.177.595.285.195.107.383.228.559.361.176.133.335.276.476.427.14.151.262.31.366.476.103.166.188.339.254.517.066.179.112.361.137.548.025.186.03.374.019.566-.012.19-.037.382-.08.575a5.655 5.655 0 01-.46 1.469 5.76 5.76 0 01-.321.558 5.524 5.524 0 01-.369.5 4.845 4.845 0 01-.408.438c-.139.134-.282.256-.429.366-.147.11-.296.21-.45.3-.152.089-.308.169-.468.244a7.304 7.304 0 01-.936.358 9.213 9.213 0 01-.973.257 10.762 10.762 0 01-.996.17c-.332.044-.669.08-1.01.109-.343.029-.69.051-1.037.065-.347.014-.693.021-1.038.019-.344-.002-.684-.011-1.02-.025a18.396 18.396 0 01-.989-.058 15.798 15.798 0 01-.968-.107c-.322-.044-.643-.098-.96-.161a14.215 14.215 0 01-.942-.221c-.158-.043-.316-.087-.472-.133a10.286 10.286 0 01-.456-.14c-.146-.05-.287-.103-.422-.159-.135-.056-.264-.116-.387-.177-.123-.062-.239-.124-.347-.188-.108-.064-.208-.129-.3-.196a2.704 2.704 0 01-.251-.201 1.698 1.698 0 01-.208-.214 1.408 1.408 0 01-.157-.227 1.3 1.3 0 01-.105-.252 1.413 1.413 0 01-.044-.285 1.4 1.4 0 01.05-.426c.036-.141.088-.28.15-.414a3.22 3.22 0 01.212-.4 4.9 4.9 0 01.246-.383c.09-.136.186-.268.29-.398a5.978 5.978 0 01.327-.398c.112-.129.227-.255.347-.378.12-.123.241-.242.367-.357.186-.171.381-.334.588-.489.206-.155.421-.301.644-.437a9.026 9.026 0 011.323-.682c.229-.095.463-.183.698-.264.235-.081.472-.156.711-.226.239-.069.479-.131.721-.189.243-.058.486-.11.73-.159.245-.049.491-.094.738-.136.248-.042.496-.083.744-.121.249-.039.499-.077.748-.116a18.06 18.06 0 00.744-.126c.241-.044.474-.09.697-.135.223-.045.437-.089.643-.133s.403-.088.593-.133c.19-.045.371-.091.543-.135.171-.044.333-.087.486-.127.152-.04.295-.079.431-.115.135-.036.261-.07.381-.101.119-.031.232-.06.341-.084.108-.024.213-.045.315-.064.101-.018.201-.033.3-.044.099-.01.196-.018.291-.023.095-.005.188-.008.28-.008.092 0 .179.002.261.005.082.003.159.007.231.012.072.005.139.01.201.015s.119.01.172.015c.053.005.102.01.149.018.048.008.095.018.139.032.052.016.1.035.14.057.04.022.071.048.092.076.22.28.033.058.035.091.2.32.002.066-.005.102a.68.68 0 01-.055.169.938.938 0 01-.086.155c-.35.051-.73.1-.113.148a1.304 1.304 0 01-.136.139 1.387 1.387 0 01-.151.123c-.053.037-.106.072-.16.105a1.73 1.73 0 01-.332.164c-.116.047-.235.09-.359.13-.124.039-.252.076-.385.111-.133.035-.271.067-.413.099-.142.031-.289.06-.438.089-.149.028-.305.056-.467.085-.162.029-.331.056-.505.081-.173.025-.352.048-.535.068-.183.02-.369.038-.559.053-.19.014-.383.026-.58.035a13.52 13.52 0 01-.609.022c-.204.005-.411.007-.619.006-.207-.001-.414-.005-.62-.013-.205-.008-.408-.019-.609-.033a12.4 12.4 0 01-.589-.057 9.482 9.482 0 01-.564-.084 8.013 8.013 0 01-.54-.114 6.757 6.757 0 01-.518-.146 5.74 5.74 0 01-.494-.178 4.915 4.915 0 01-.465-.21 4.292 4.292 0 01-.421-.236 3.529 3.529 0 01-.64-.518 3.163 3.163 0 01-.472-.652 4.137 4.137 0 01-.341-.833 5.848 5.848 0 01-.204-.93 7.645 7.645 0 01-.075-.932 8.341 8.341 0 01.076-.946c.05-.329.126-.66.226-.988a7.615 7.615 0 01.36-.963c.145-.32.311-.634.495-.941.184-.307.385-.6.6-.878.215-.277.443-.538.684-.782.241-.244.493-.47.756-.678a9.485 9.485 0 01.823-.575c.143-.088.288-.173.434-.254.146-.082.297-.16.459-.238.16-.078.326-.152.501-.223.174-.071.355-.138.544-.201.188-.063.385-.121.596-.178a13.788 13.788 0 011.387-.296 19.906 19.906 0 011.54-.193c.258-.022.512-.038.76-.048.249-.01.49-.015.721-.015.232 0 .459.004.678.012.219.008.432.02.639.036.207.016.408.036.604.062.195.025.385.055.571.093.185.037.367.082.548.137.18.055.358.12.524.196.166.075.321.159.464.251.144.093.276.193.394.299.118.107.222.221.311.339a2.272 2.272 0 01.229.37c.61.126.111.253.15.382.38.13.066.258.084.387.17.129.025.257.023.385a2.268 2.268 0 01-.039.381c-.2.123-.049.244-.084.363a2.752 2.752 0 01-.125.351 3.35 3.35 0 01-.154.337 3.837 3.837 0 01-.179.319c-.63.104-.128.207-.196.31-.69.102-.139.203-.211.302a5.57 5.57 0 01-.47.585 6.04 6.04 0 01-.549.554c-.193.172-.396.333-.608.481a7.106 7.106 0 01-.657.41c-.219.123-.448.236-.683.34-.235.104-.477.2-.724.289-.247.089-.497.17-.752.246a12.437 12.437 0 01-.778.201c-.26.06-.52.115-.779.166-.261.051-.519.097-.777.142-.257.045-.51.087-.763.13-.253.043-.503.087-.752.134-.248.047-.493.097-.737.15-.243.054-.485.111-.724.173-.24.062-.475.128-.709.198a9.64 9.64 0 00-.686.225c-.224.082-.443.169-.657.26a6.477 6.477 0 00-.616.302c-.2.111-.394.23-.579.357a3.807 3.807 0 00-.506.418c-.157.152-.305.312-.44.479-.135.167-.258.342-.368.522a3.77 3.77 0 00-.283.567c-.078.193-.143.39-.194.591-.051.201-.088.406-.112.616a4.368 4.368 0 00-.027.639c.009.134.026.266.047.397.022.13.046.259.073.385.027.125.057.249.088.371a4.8 4.8 0 00.345.991c.134.294.291.569.47.824.178.254.378.487.598.696.221.21.466.395.734.552.268.158.56.288.878.387.316.1.652.167.996.202a8.3 8.3 0 001.211.071c.226-.006.452-.019.677-.039.225-.02.448-.047.668-.078.22-.031.437-.067.651-.106.214-.039.425-.083.633-.132.209-.05.414-.106.617-.168.203-.063.405-.135.608-.216.202-.082.402-.175.6-.276.198-.102.392-.213.581-.331.189-.119.371-.245.545-.377.174-.131.338-.269.491-.412a4.536 4.536 0 00.737-.876c.099-.157.188-.32.266-.488.079-.168.143-.341.197-.522.054-.181.097-.37.128-.563a3.53 3.53 0 00.047-.591 2.482 2.482 0 00-.028-.484 1.895 1.895 0 00-.102-.42 1.348 1.348 0 00-.173-.354.963.963 0 00-.244-.273 1.13 1.13 0 00-.326-.186 2.287 2.287 0 00-.365-.102 3.564 3.564 0 00-.384-.052 3.623 3.623 0 00-.384-.021h-.363c-.179.006-.37.014-.57.022a8.325 8.325 0 00-.572.048 5.725 5.725 0 00-.547.083 3.758 3.758 0 00-.493.125c-.149.048-.279.102-.39.164a1.761 1.761 0 00-.267.201c-.73.072-.13.148-.174.225a1.248 1.248 0 00-.105.245 1.174 1.174 0 00-.022.257c.014.125.044.232.091.324.047.092.107.168.18.233.073.065.155.12.244.165.089.046.183.082.28.11.197.057.403.089.618.099.215.01.435.003.657-.02.111-.012.222-.029.334-.05.112-.021.224-.047.36-.08.137-.033.292-.07.458-.114.166-.043.328-.088.482-.135.155-.048.303-.098.444-.149.141-.052.278-.106.411-.165a9.74 9.74 0 00.392-.188c.126-.064.245-.129.359-.194a6.097 6.097 0 00.323-.2c.102-.066.199-.133.292-.201.092-.069.182-.138.27-.209.087-.071.173-.144.257-.22.084-.076.166-.156.244-.239a5.67 5.67 0 00.388-.457c.118-.151.225-.306.322-.466a4.25 4.25 0 00.254-.47c.07-.154.13-.312.181-.474.05-.162.091-.327.123-.497a4.24 4.24 0 00.065-.519c.006-.169.005-.334-.006-.497a3.862 3.862 0 00-.075-.493 2.997 2.997 0 00-.142-.478 2.409 2.409 0 00-.205-.452 2.235 2.235 0 00-.267-.414 2.271 2.271 0 00-.329-.371 2.292 2.292 0 00-.386-.311 2.557 2.557 0 00-.445-.242 3.196 3.196 0 00-.506-.173 4.394 4.394 0 00-.569-.106 6.436 6.436 0 00-.636-.046c-.21-.005-.413-.004-.61.008-.196.012-.389.033-.578.065-.189.031-.376.072-.563.126-.187.053-.371.118-.553.195-.183.077-.362.164-.539.261-.177.097-.35.204-.521.321-.17.117-.336.243-.5.378-.163.135-.324.278-.484.431-.16.153-.316.314-.47.485a8.2 8.2 0 00-.454.539c-.146.187-.288.383-.425.589-.137.205-.267.419-.391.643-.124.224-.242.454-.355.691-.112.237-.218.48-.318.728-.1.249-.193.502-.279.759a16.162 16.162 0 00-.235.77c-.71.258-.137.515-.197.768-.61.253-.116.503-.166.748-.5.245-.094.483-.133.716a16.15 16.15 0 00-.1.678 13.294 13.294 0 00-.08.67c-.22.228-.041.455-.057.681-.16.226-.028.45-.035.67-.8.22-.011.433-.009.641.2.208.009.412.022.611.14.199.033.394.059.585.25.191.057.379.095.565.38.186.083.369.134.551.52.182.109.36.172.536.63.175.13.347.203.516.73.169.15.335.234.5.84.165.174.327.27.486.97.158.199.312.306.465.106.153.215.301.328.445.112.145.225.284.339.419.114.135.228.265.341.391.114.125.226.248.338.371.111.122.223.244.336.366.114.122.229.245.346.369.117.123.236.247.36.37.127.125.257.249.392.372.136.122.276.242.421.359.145.117.295.23.448.338.153.109.31.213.47.311.16.098.322.191.487.277.164.086.332.166.502.239.170.073.343.14.519.198.175.058.354.109.536.152.182.044.366.081.555.112.189.031.383.056.584.075.201.02.41.034.628.043.219.009.451.013.694.013a16.13 16.13 0 00.763-.021c.257-.017.514-.046.77-.083a10.44 10.44 0 00.752-.153c.249-.061.494-.131.737-.213.242-.082.479-.174.711-.277a6.96 6.96 0 00.68-.359 6.153 6.153 0 00.646-.441c.204-.155.397-.321.58-.495.183-.174.356-.356.519-.546.163-.19.315-.388.458-.593.143-.205.275-.418.398-.638a5.391 5.391 0 00.339-.69c.096-.233.181-.47.255-.713.073-.243.136-.491.187-.743.05-.252.09-.508.118-.769.027-.26.044-.523.05-.791a7.373 7.373 0 00-.028-.756 6.337 6.337 0 00-.121-.747 5.296 5.296 0 00-.215-.712 4.341 4.341 0 00-.308-.649 3.565 3.565 0 00-.403-.56 3.142 3.142 0 00-.498-.443 3.154 3.154 0 00-.589-.319 3.39 3.39 0 00-.64-.182 3.614 3.614 0 00-.664-.063c-.196 0-.391.017-.586.05a2.713 2.713 0 00-.543.145c-.169.063-.328.139-.477.232-.15.092-.291.2-.423.325a2.202 2.202 0 00-.345.433 2.123 2.123 0 00-.244.544 2.075 2.075 0 00-.077.625c.009.249.06.47.154.662.094.193.218.355.371.486.152.131.328.231.522.299.194.067.399.103.61.107.172.003.347-.008.524-.032.157-.023.304-.055.441-.096-.015-.111.01-.199.075-.263.064-.064.148-.097.25-.097.102 0 .223.03.363.092.145.064.303.156.475.276.172.12.343.256.509.407.165.15.318.31.456.48.139.17.26.348.36.534.101.186.178.378.229.575a2.246 2.246 0 01.045 1.015 2.097 2.097 0 01-.184.529 2.102 2.102 0 01-.304.441c-.12.135-.255.25-.402.345-.148.095-.307.17-.475.224-.168.055-.348.091-.541.116-.193.026-.396.041-.608.047-.219.006-.437.002-.652-.01-.215-.011-.429-.03-.642-.056a10.68 10.68 0 01-.635-.095 9.232 9.232 0 01-.622-.132 7.825 7.825 0 01-.603-.171 6.742 6.742 0 01-.579-.209 5.768 5.768 0 01-.55-.244c-.173-.085-.334-.175-.483-.268s-.289-.19-.416-.288a3.434 3.434 0 01-.345-.306 2.495 2.495 0 01-.23-.271 1.615 1.615 0 01-.173-.339 1.59 1.59 0 01-.098-.31 1.645 1.645 0 01-.036-.32c.001-.101.01-.2.026-.294a1.59 1.59 0 01.068-.264 1.524 1.524 0 01.098-.223c.038-.07.078-.136.122-.199.045-.062.092-.123.142-.181.05-.059.102-.116.157-.173a3.79 3.79 0 01.171-.163 3.93 3.93 0 01.172-.147 2.633 2.633 0 01.35-.241 3.01 3.01 0 01.409-.204 3.28 3.28 0 01.441-.146 3.422 3.422 0 01.947-.109c.195.008.38.028.554.061.174.033.337.077.49.134.153.057.296.128.429.211.133.084.257.182.372.294.116.112.221.238.316.377.095.139.178.29.248.454.71.163.129.34.172.53.43.19.072.396.086.618.015.221.016.447.004.677a10.954 10.954 0 01-.058.733c-.033.26-.076.529-.128.802-.052.273-.114.542-.186.802-.071.261-.153.516-.245.764-.091.249-.194.49-.307.724a4.763 4.763 0 01-.745 1.12c-.148.172-.306.33-.474.476a4.403 4.403 0 01-.541.371 5.359 5.359 0 01-.594.284 6.282 6.282 0 01-.637.208 7.49 7.49 0 01-.673.149c-.228.043-.458.078-.69.102-.231.024-.466.038-.703.04-.188.002-.383-.002-.584-.013a4.907 4.907 0 01-.563-.058 2.962 2.962 0 01-.503-.118 1.96 1.96 0 01-.434-.191 1.637 1.637 0 01-.372-.288 2.02 2.02 0 01-.268-.338 1.913 1.913 0 01-.176-.371 1.982 1.982 0 01-.097-.394 1.373 1.373 0 01-.005-.257.957.957 0 01.051-.219.757.757 0 01.1-.177.735.735 0 01.143-.138.725.725 0 01.253-.122.906.906 0 01.361-.042c.111.007.203.031.275.071.071.04.127.089.165.146.039.058.066.122.08.195.014.072.02.15.012.234a1.414 1.414 0 01-.44.275 1.169 1.169 0 01-.128.23.884.884 0 01-.176.179c-.064.047-.13.085-.2.113a.883.883 0 01-.205.066 1.108 1.108 0 01-.22.017c-.115 0-.223-.018-.322-.054a.68.68 0 01-.243-.148.64.64 0 01-.153-.224.763.763 0 01-.051-.279 1.324 1.324 0 01.242-.729 1.493 1.493 0 01.513-.439c.158-.075.333-.122.527-.141.195-.019.404-.007.63.035.182.034.343.088.484.164.14.076.263.167.368.274.105.107.193.227.266.362.073.134.133.28.18.436.074.25.11.521.11.813 0 .284-.037.578-.112.878a4.736 4.736 0 01-.306.868 5.02 5.02 0 01-.456.794c-.173.259-.364.496-.571.699-.208.204-.43.375-.663.508a3.38 3.38 0 01-.726.297c-.25.072-.502.114-.757.124a3.307 3.307 0 01-.789-.07c-.274-.052-.55-.138-.824-.256a3.242 3.242 0 01-.683-.392 3.21 3.21 0 01-.558-.5 3.429 3.429 0 01-.415-.551 3.74 3.74 0 01-.282-.568 3.916 3.916 0 01-.165-.563 3.943 3.943 0 01-.075-.545 4.477 4.477 0 01.077-.919c.051-.305.13-.607.235-.905.105-.298.236-.585.389-.859.153-.274.326-.528.518-.76.191-.234.404-.443.636-.628.232-.185.484-.345.756-.48.271-.135.562-.243.871-.325.309-.083.637-.139.983-.17.346-.032.697-.036 1.054-.018.287.015.585.044.893.086.308.042.62.1.935.174.315.075.628.167.935.276.307.109.606.236.898.381a7.47 7.47 0 011.576 1.004c.232.19.445.394.638.608.194.214.368.44.527.676.158.236.3.481.426.735.126.254.237.514.334.779.096.265.177.535.246.81.069.275.123.554.164.838.041.284.07.57.087.86.017.289.022.577.017.865a8.611 8.611 0 01-.048.797 6.926 6.926 0 01-.108.777c-.046.261-.104.527-.175.796-.07.27-.154.539-.252.805a5.81 5.81 0 01-.329.755 4.76 4.76 0 01-.406.655 3.876 3.876 0 01-.489.553c-.18.167-.375.318-.585.453-.21.135-.435.253-.674.353-.24.1-.485.183-.733.248-.248.065-.493.112-.734.141-.241.029-.479.041-.713.037" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </section>
        
        <Footer />
      </VerticalScroller>
      
      {/* Artistic grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-20 mix-blend-multiply" style={{ 
        backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wNC0xOVQxNDozMTozOSswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDQtMTlUMTQ6MzQ6MTQrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDQtMTlUMTQ6MzQ6MTQrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTNhZmJlNDktOGMxMi03ODRhLWI2NDUtOWE0NjU5NmY0ZTQ4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzYWZiZTQ5LThjMTItNzg0YS1iNjQ1LTlhNDY1OTZmNGU0OCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjUzYWZiZTQ5LThjMTItNzg0YS1iNjQ1LTlhNDY1OTZmNGU0OCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTNhZmJlNDktOGMxMi03ODRhLWI2NDUtOWE0NjU5NmY0ZTQ4IiBzdEV2dDp3aGVuPSIyMDIwLTA0LTE5VDE0OjMxOjM5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppll8BsAAAb+SURBVGiB3ZpbiJ1XGYaf9c/e+5wzSSbJJGmTpknTmo6mF8a2iKKFgFAEMfbCgnjRC0XRqhUKIl6JF3rhjaJeFaQULAURBWu9UwmITdNKKIm1idGkTTKZJJOZyXFm9tn/54WZmq2ZmdQyMYV+82MG1lrwvu/61vrWf9bc3Nzc17335BP3d07nx7fuXDlS76ZjyXXoqILgAkiAMegVWC3Z4bqd+caV4dFPLdfYtb6cGRSvXo/XizcK+LFS7XcbKzs/Rl0KAQKDRRAAWQQXQoCQwN0AHImYZg+fqyv5dz9tpXrQWDcbZq4UgnS1cGKe+cW5XJyIWV/P8d5j7dp/rVWKRKQQQRQQRIxkQcyACUICLCDgXIzduLrJ4BdX23NfO9C79qqDCDnf9BPz3PZSzkKvT3tYsF5C02zAKyJGGBikMJIFUIQEEAEIJZ4mftHfO9Iv4KvAI9cMxCc6G2q+W2n7YuRohwLLG+BjCEoMFJrCkBAijIQBMChEYABJ4APCkJG3GnP2tPjW7nLxg6sD4Q3PfYM01VzU6xXSWnBu2YJ4IogIgkIUBAMQYKQEoysFQilBiQEEKRQMiRgvz9rxHaN+aHtT3n6JJycn2TF8JbDY8PHVX2yzzVzL1lOAXjWWlIAIKClBgggSYAQoMMQGEAAxERKh4n5n9MZ2GvUm+XKavefg2JUCMRcWX9lWbpjpOUNLRDQDhEACDLXS1QBRiFEEAUgQQZIEEgQgGCKhApOgGSQpCWnS+Ytz5ftY5Zl3HKRbdKdnayPTL+akJY2RmMQgg2RBVqaAERGIgINURbAggACIRZIiCRIhQWxTl+GGW+3FiZnRv71jIGvlpfnN89vL/X6CdwlFtIgwFFgZfUsGAI0IFBIjhEUSRhIMQRCCCMEiCUgiqMpIQkKSgutOTuGfPstD7whIsXz+3KGl2U8ul06MQkNRCiBCAMGDFGvrKMAgMBBqkCQ0IAkoEA8EUEjcAFCrFAnKoRXdFt4o5GrgxO8DpA6EHhQzLzUrsbQuGUEECBZETUCCICGQALGmRnQJUksJjBgVCPEajkQFSFCWQpGqlAmFSYx2N25K+9/5xsGJSwI5P3/umfXqcHNdI3oeD7jgAGOEI4gClwgkggSSYAEwakBEQEAAwQGBCAQIIJgRj0JCJkkFl6Sdcrt87Pho9lvAW1ayCQCRdD5+PnDmF6SxhgQhhhAQBIEhBAiCQoxY9xEhAFoAFrCgJU9BzADOoXVT5eizNafK89nmW8/VL50ZdJ9ggmfXzfv74J4MR3d2XTofC3ypUEFUiJVRwBiJCaCQKEAx4IRQsImDoiAQQ5a/k/yg+nw+vV07w4Uofjt45FnjuK8vNyVbwwOHDnPHf+bJHrgdNpwk2wTVX2sn0yc2jw6+4E7c+lhyIXmI4F8Cfb/YcaFfXnp2W1ZV5VigjJJJRISgNgAlQgwCQYi0oeRZn0jXp/Ll4YFZOyO5QImMtY0+m378DXZuUuoPvp/6tg8z2Dmd9pf++PBsbHzvYrx7BQTAJ+7pZPe+Sjt+Ddr2OhQBITX3m9I0QLAFBJASj5NYAaA5jmCUmoDFN54gfPf3VP94HI2HSI8dxR88xJ5Xf81NG/gR8Mg7Jdb6xIVl8f5H6C38jq0vPI01QKg4v5ib2oDQCqkAA2IAOYQYxNr/xJv0Io/Lh5irPsGxRzpXLLa36HnQnHv+2RtrW27A9XqUSWQwiHiVMh5WGCdhhCQJgYYEpKQJIZwCAzC2HM/Lj0RtX0ofu3/mSkEA7JnlOwcXFr7QP3ONHZ3Dj0dUZZEoMQokVjAhWTK6ASVggqXYoH4iDKKV5Hp2rUAAqubvnW1Hd6TbDsKZGe766TfYt3OWXDd5/M7P8NSdB3j+E5/jyQOfIPYX0ORs8Y2/fP1agVy45dOfPvSZs5xdmODm+XO0dnXYN97jyJbNfH7fPuZbDkzIRumd/CftI3/k7pVvdwRwzecjVgv1cGvzh27j+w/txaUprZkZKrU65eYoaVJjsDBHw1fYvWgfgvTOlYL7f1kj/9MPPj6wMaON3WRBKaREo0RU2vTqDQb1JsYKs9rIE3/kO9cD5MK9Pz75s0dP/eBWW5ulyAbUnJAUJXUjJK2IJBuhWStJ65EiLvHEQ/zxeoAAsLDwvadanV/+zdYqeF9mrI41jcN3RhpBZkH1tCqLdDL7pX+uPnq9QADOrJz55I3jL95U0lZQ1oJFqrUyiTZFwlQrjDXGxGzIPXzhXa7/gT0+t/CjONr53Kmzfy+dX9rIc9mAYtG2KytMTLTdkbf44bZJbcvCd/YKDC4SZKwGtVpVUt9OL3WiK1Mmp2Zt9oYfcfe78Oz/AcdHIkFaIQVQAAAAAElFTkSuQmCC')"
      }}>
      </div>
    </div>
  );
};

export default Index;
