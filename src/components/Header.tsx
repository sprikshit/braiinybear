import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Set active item based on current path
    setActiveItem(window.location.pathname);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Work", path: "/our-work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-gradient-to-r from-black to-gray-900 shadow-lg py-2" 
          : "bg-gradient-to-r from-black/20 to-gray-900/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo with subtle animation */}
        <Link 
          to="/" 
          className="flex items-center group"
          onClick={() => setActiveItem("/")}
        >
          <div className="overflow-hidden shadow-lg transform transition-all duration-300 ml-8 group-hover:scale-105">
            <img src={Logo} alt="Logo" className="h-12 md:h-14 w-auto" />
          </div>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setActiveItem(item.path)}
              className={`relative text-lg font-medium transition-all duration-300 group ${
                activeItem === item.path ? "text-yellow-500" : "text-white hover:text-yellow-500"
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 ${
                activeItem === item.path ? "w-full" : "group-hover:w-full"
              }`}></span>
            </Link>
          ))}
          <button className="ml-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-2 px-6 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Toggle with animation */}
        <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden text-white focus:outline-none bg-gray-800/50 p-2 rounded-md transition-all duration-300 hover:bg-gray-700/70"
  aria-label="Toggle menu"
>
  <div className="w-6 h-6 relative flex items-center justify-center">
    <span
      className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
        isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
      }`}
    ></span>
    <span
      className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
        isMenuOpen ? "opacity-0 w-0" : "opacity-100 w-full top-3"
      }`}
    ></span>
    <span
      className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
        isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
      }`}
    ></span>
  </div>
</button>


        {/* Mobile Navigation with improved animation */}
        <div
          className={`absolute top-full left-0 w-full bg-gradient-to-b from-gray-900 to-black transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 shadow-xl" : "max-h-0 opacity-0 pointer-events-none"
          } md:hidden overflow-hidden`}
        >
          <ul className="flex flex-col items-center space-y-5 py-6">
            {navItems.map((item) => (
              <li key={item.path} className="w-full text-center">
                <Link
                  to={item.path}
                  className={`block py-2 px-4 text-lg font-medium transition-all duration-300 ${
                    activeItem === item.path 
                      ? "text-yellow-500 bg-gray-800/30" 
                      : "text-white hover:text-yellow-400 hover:bg-gray-800/20"
                  }`}
                  onClick={() => {
                    setActiveItem(item.path);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="w-full px-8 pt-2">
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 rounded-md transform transition-all duration-300 hover:from-yellow-400 hover:to-yellow-500">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;