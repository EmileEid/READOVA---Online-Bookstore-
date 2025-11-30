/**
 * Home Page Component - Landing page for READOVA Online Bookstore
 * CSCI426: Advanced Web Programming - Phase 1
 * 
 * Features:
 * - Animated hero section with floating elements
 * - Stats counter section
 * - Featured books grid with staggered animations
 * - Category browsing with hover effects
 * - Why choose us section
 * - Newsletter subscription
 * 
 * All code is original work.
 */

import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { getFeaturedBooks, categories } from '../data/books';

function Home({ onAddToCart }) {
  const featuredBooks = getFeaturedBooks();

  // Category icons mapping
  const categoryIcons = {
    'Fiction': '📖',
    'Self-Help': '🌟',
    'Thriller': '🔍',
    'Memoir': '📝',
    'Science Fiction': '🚀',
  };

  // Category colors for visual variety
  const categoryColors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-orange-500 to-red-500',
    'from-green-500 to-teal-500',
    'from-indigo-500 to-purple-500',
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Enhanced Design */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 md:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-400/20 rounded-full blur-3xl animate-float delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          
          {/* Floating Book Icons */}
          <div className="absolute top-20 left-10 text-4xl animate-float opacity-20">📚</div>
          <div className="absolute top-40 right-20 text-3xl animate-float delay-200 opacity-20">📖</div>
          <div className="absolute bottom-20 left-1/4 text-2xl animate-float delay-400 opacity-20">✨</div>
          <div className="absolute bottom-40 right-1/4 text-3xl animate-float delay-100 opacity-20">🌟</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-sm px-4 py-2 rounded-full mb-6 animate-fade-in-down">
                📚 Welcome to READOVA
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight animate-fade-in-up">
                Discover Your Next
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500 animate-gradient">
                  Favorite Book
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                Welcome to READOVA, your premier online destination for discovering 
                amazing books. Explore our curated collection and find stories that 
                will inspire, entertain, and transform your world.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <Link
                  to="/books"
                  className="group inline-flex items-center justify-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
                >
                  Browse Books
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 animate-fade-in-up delay-400">
                <div className="flex items-center gap-2 text-primary-100">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-primary-100">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Secure Payment</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Hero Illustration */}
            <div className="hidden lg:block animate-fade-in-right delay-300">
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl h-40 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                      <span className="text-5xl">📚</span>
                    </div>
                    <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl h-40 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                      <span className="text-5xl">❤️</span>
                    </div>
                    <div className="bg-gradient-to-br from-pink-400 to-rose-600 rounded-xl h-40 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                      <span className="text-5xl">✨</span>
                    </div>
                    <div className="bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl h-40 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                      <span className="text-5xl">🌟</span>
                    </div>
                  </div>
                  
                  {/* Stats overlay */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 rounded-2xl px-8 py-4 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">5K+</div>
                        <div className="text-xs text-gray-500">Books</div>
                      </div>
                      <div className="w-px h-10 bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary-600">1K+</div>
                        <div className="text-xs text-gray-500">Readers</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 rounded-2xl px-4 py-2 shadow-lg animate-bounce-slow">
                  <span className="font-bold">New!</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg animate-float">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5000+', label: 'Books Available', icon: '📚', color: 'from-purple-500 to-pink-500' },
              { value: '1000+', label: 'Happy Readers', icon: '😊', color: 'from-blue-500 to-cyan-500' },
              { value: '50+', label: 'Categories', icon: '📂', color: 'from-orange-500 to-red-500' },
              { value: '24/7', label: 'Support', icon: '💬', color: 'from-green-500 to-teal-500' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 animate-fade-in">
              ✨ Handpicked for You
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-serif mb-4 animate-fade-in-up">
              Featured Books
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up delay-100">
              Discover our handpicked selection of must-read books that are captivating readers everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredBooks.map((book, index) => (
              <div 
                key={book.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <BookCard book={book} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up delay-500">
            <Link
              to="/books"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              View All Books
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-secondary-100 text-secondary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              📖 Explore Genres
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-serif mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find your perfect read by exploring our diverse collection of book categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category}
                to={`/books?category=${encodeURIComponent(category)}`}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${categoryColors[index % categoryColors.length]} text-white text-center overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {categoryIcons[category] || '📚'}
                  </div>
                  <h3 className="font-semibold text-lg">{category}</h3>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              💪 Why READOVA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-serif mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're committed to providing the best book-buying experience for our readers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚚',
                title: 'Fast Delivery',
                description: 'Get your books delivered quickly with our efficient shipping service. Same-day delivery available in select areas.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🔒',
                title: 'Secure Shopping',
                description: 'Shop with confidence knowing your personal information is protected with state-of-the-art security.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: '💬',
                title: '24/7 Support',
                description: 'Our dedicated support team is always here to help you with any questions or concerns.',
                color: 'from-orange-500 to-red-500'
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - NEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              ⭐ Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-serif mb-4">
              What Our Readers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'Amazing selection of books! Fast delivery and great prices. READOVA is now my go-to bookstore.', rating: 5 },
              { name: 'John D.', text: 'Love the user-friendly interface and the personalized recommendations. Found so many hidden gems!', rating: 5 },
              { name: 'Emily R.', text: 'Excellent customer service and the books always arrive in perfect condition. Highly recommend!', rating: 5 },
            ].map((review, index) => (
              <div 
                key={review.name}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{review.name}</div>
                    <div className="text-sm text-gray-500">Verified Buyer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              📧 Stay Connected
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and book recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
              />
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                Subscribe
              </button>
            </div>

            <p className="text-primary-200 text-sm mt-4">
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
