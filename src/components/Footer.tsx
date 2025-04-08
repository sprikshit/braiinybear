import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
        {/* Logo and Brief Description */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center mb-4">
            <img 
              src={Logo} 
              alt="Brainy Bear Logo" 
              className="h-16 w-16" 
            />
          </div>
          <p className="text-sm text-center md:text-left">
            Empowering communities through innovative education and transformative training initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {footerItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className="hover:text-primary-light">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <div className="space-y-2">
            <p>Email: braiinybear@gmail.com</p>
            <p>Phone: +91 9520770813</p>
            <p>Address: 15, New Cantonment Road, Dehradun</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p className="text-sm">&copy; {currentYear} Brainy Bear Educational Society. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer