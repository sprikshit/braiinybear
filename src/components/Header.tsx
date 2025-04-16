import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const currentPath = window.location.pathname;
    setActiveItem(currentPath);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about", // Added path to fix TypeScript error
      children: [
        { name: "Overview", path: "/overview" },
        { name: "Our People", path: "/about/our-people" },
        { name: "Achievements", path: "/about/achievements" },
      ],
    },
    { name: "Our Work", path: "/our-work" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-black to-gray-900 shadow-lg py-2"
          : "bg-gradient-to-r from-black/60 to-gray-800/60 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo with subtle animation */}
        <Link
          to="/"
          className="flex items-center group"
          onClick={() => setActiveItem("/")}
        >
          <div className="overflow-hidden shadow-lg transform transition-all duration-300 ml-2 sm:ml-8 group-hover:scale-105">
            <img src={Logo} alt="Logo" className="h-10 sm:h-12 md:h-14 w-auto" />
          </div>
          <div className="ml-2">
            <span className="block text-[var(--primary-main)] font-bold text-xl sm:text-2xl">
              Braiiny Bear
            </span>
            <span className="block text-[#FFD782] text-sm sm:text-lg">
              Educational and Training Society
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.path}
                onClick={() => setActiveItem(item.path)}
                className={`relative text-lg font-medium transition-all duration-300 group-hover:text-[var(--primary-main)] ${
                  activeItem === item.path ? "text-[var(--primary-main)]" : "text-white"
                } flex items-center`}
              >
                {item.name}
                {item.children && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-[var(--primary-main)] transition-all duration-300 ${
                    activeItem === item.path ? "w-full" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>

              {item.children && (
                <div className="absolute left-0 mt-2 bg-gray-900 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible z-50 min-w-[180px]">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setActiveItem(child.path)}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-[var(--primary-main)] transition-all duration-200"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="ml-4 bg-gradient-to-r from-[var(--primary-main)] to-yellow-600 text-black font-bold py-2 px-6 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Join Us
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
              <li key={item.name} className="w-full text-center">
                {item.children ? (
                  <details className="w-full px-4">
                    <summary
                      className={`cursor-pointer py-2 px-2 text-lg font-medium text-white hover:text-yellow-400 hover:bg-gray-800/20 rounded-md flex items-center justify-center`}
                    >
                      {item.name}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="pl-4 flex flex-col text-left mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => {
                            setActiveItem(child.path);
                            setIsMenuOpen(false);
                          }}
                          className="py-2 px-2 text-white text-sm hover:text-yellow-400 hover:bg-gray-800/20 rounded-md"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-2 px-4 text-lg font-medium transition-all duration-300 ${
                      activeItem === item.path
                        ? "text-[var(--primary-main)] bg-gray-800/30"
                        : "text-white hover:text-yellow-400 hover:bg-gray-800/20"
                    }`}
                    onClick={() => {
                      setActiveItem(item.path);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="w-full px-8 pt-2">
              <button className="w-full bg-gradient-to-r from-[var(--primary-main)] to-yellow-600 text-black font-bold py-3 rounded-md transform transition-all duration-300 hover:from-yellow-400 hover:to-[var(--primary-main)]">
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