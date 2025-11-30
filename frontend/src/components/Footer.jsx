/**
 * Footer.jsx - READOVA Online Bookstore Footer Component
 * Contains site navigation, contact info, and social links
 * 
 * @author CSCI426 Student
 * @version 1.0.0
 */
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-primary-300 to-secondary-500 bg-clip-text text-transparent">READOVA</span>
                <p className="text-xs text-gray-500">Online Bookstore</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Your premier destination for discovering new worlds through books. 
              We believe every book has the power to transform lives and inspire minds.
            </p>
            <div className="flex space-x-3">
              {/* Social Media Icons */}
              <a 
                href="#" 
                className="w-11 h-11 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.5,3.44,9.5,5.32v2.15H7v4h2.5v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44,4.83c-.81.36-1.68.61-2.59.72a4.48,4.48,0,0,0,2-2.5,8.94,8.94,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11A12.79,12.79,0,0,1,3,3.79a4.52,4.52,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.06A4.52,4.52,0,0,0,6,13.65a4.53,4.53,0,0,1-2,.08,4.52,4.52,0,0,0,4.22,3.14A9.06,9.06,0,0,1,2,18.58a12.78,12.78,0,0,0,6.92,2c8.34,0,12.9-6.92,12.9-12.91,0-.2,0-.39,0-.59A9.22,9.22,0,0,0,24,4.59"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07a6.64,6.64,0,0,1,2.23.41,4,4,0,0,1,2.28,2.28,6.64,6.64,0,0,1,.41,2.23c.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85a6.64,6.64,0,0,1-.41,2.23,4,4,0,0,1-2.28,2.28,6.64,6.64,0,0,1-2.23.41c-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07a6.64,6.64,0,0,1-2.23-.41,4,4,0,0,1-2.28-2.28,6.64,6.64,0,0,1-.41-2.23C2.17,15.58,2.16,15.2,2.16,12s0-3.58.07-4.85a6.64,6.64,0,0,1,.41-2.23A4,4,0,0,1,4.92,2.64a6.64,6.64,0,0,1,2.23-.41C8.42,2.17,8.8,2.16,12,2.16M12,0C8.74,0,8.33,0,7.05.07A8.81,8.81,0,0,0,4.14.63,6.07,6.07,0,0,0,.63,4.14,8.81,8.81,0,0,0,.07,7.05C0,8.33,0,8.74,0,12s0,3.67.07,4.95a8.81,8.81,0,0,0,.56,2.91,6.07,6.07,0,0,0,3.51,3.51,8.81,8.81,0,0,0,2.91.56C8.33,24,8.74,24,12,24s3.67,0,4.95-.07a8.81,8.81,0,0,0,2.91-.56,6.07,6.07,0,0,0,3.51-3.51,8.81,8.81,0,0,0,.56-2.91C24,15.67,24,15.26,24,12s0-3.67-.07-4.95a8.81,8.81,0,0,0-.56-2.91A6.07,6.07,0,0,0,19.86.63,8.81,8.81,0,0,0,17,0C15.67,0,15.26,0,12,0ZM12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm7.84-10.4a1.44,1.44,0,1,1-1.44-1.44A1.44,1.44,0,0,1,19.84,5.6Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/books" className="hover:text-primary-400 transition-colors duration-200">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-primary-400 transition-colors duration-200">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@readova.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Book Street<br />Reading City, RC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} READOVA. All rights reserved. Built for CSCI426.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
