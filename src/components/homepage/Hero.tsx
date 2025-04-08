import { Link } from 'react-router-dom'
import backgroundImage from "../../assets/images/IMG-20250319-WA0012.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mb-4 bg-black">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ><div className="absolute inset-0 bg-black/40"></div></div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white drop-shadow-lg mt-24">
      {/* Title with Gradient Effect */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-600 to-white text-transparent bg-clip-text animate-pulse">
        Braiiny Bear Educational and Training Society
      </h1>

      {/* Tagline */}
      {/* <p className="text-2xl md:text-3xl font-light my-4 py-4">
        <span className="bg-yellow-700 px-6 py-3 rounded-lg font-semibold text-black shadow-xl text-xl md:text-2xl transition-transform duration-300 hover:scale-105">
          Building Futures Through Trust
        </span>
      </p> */}

      {/* Description */}
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
        A trust-based community dedicated to empowering individuals through innovative education
        and transformative training initiatives that foster lifelong growth.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
        <Link
          to="/our-work"
          className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Explore Our Projects
        </Link>
        <Link
          to="/contact"
          className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-yellow-600"
        >
          Join Our Community
        </Link>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
  )
}

export default Hero