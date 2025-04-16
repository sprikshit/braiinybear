import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import your images - you'll need to adjust these paths
import backgroundImage1 from "../../assets/images/IMG-20250319-WA0012.jpg";
import backgroundImage2 from "../../assets/images/IMG_4001.JPG";
import backgroundImage3 from "../../assets/images/IMG_4003.JPG";

const Hero = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-[500px] h-screen flex items-center justify-center overflow-hidden mb-4 bg-black">
      {/* Background Image Slider */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center scale-105 transition-all duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </div>
      ))}

      {/* Slider Navigation Arrows */}
      <button 
        className="absolute left-2 sm:left-4 z-20 text-white/70 hover:text-white transition-colors" 
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <svg className="w-2 h-2 sm:w-8 sm:h-8 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button 
        className="absolute right-2 sm:right-4 z-20 text-white/70 hover:text-white transition-colors" 
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8  md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-yellow-500 w-4 sm:w-6" : "bg-white/50 w-2 sm:w-3"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto text-white drop-shadow-lg mt-6 sm:mt-12 md:mt-16 lg:mt-24">
        {/* Title with Gradient Effect */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-white via-yellow-600 to-white text-transparent bg-clip-text animate-pulse">
          Braiiny Bear Educational and Training Society
        </h1>
 
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 text-white/90">
          A trust-based community dedicated to empowering individuals through innovative education
          and transformative training initiatives that foster lifelong growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
          <Link
            to="/our-work"
            className="bg-yellow-500 text-black px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Explore Our Projects
          </Link>
          <Link
            to="/contact"
            className="bg-white text-black px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-yellow-600"
          >
            Join Our Community
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;