import { Link, useParams, useNavigate } from 'react-router-dom';
import { getBookById } from '../data/books';

function BookDetails({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = getBookById(id);

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Not Found</h2>
          <p className="text-gray-600 mb-6">The book you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/books"
            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Browse Books
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(book);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb with animation */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm animate-fade-in">
            <Link to="/" className="text-gray-500 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/books" className="text-gray-500 hover:text-primary-600 transition-colors">
              Books
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary-600 font-medium truncate max-w-[200px]">
              {book.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Book Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={handleGoBack}
            className="group inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors duration-200 animate-fade-in"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Books
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Book Image */}
            <div className="relative animate-fade-in-left">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 group hover:shadow-3xl transition-shadow duration-500">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Category Badge */}
              <span className="absolute top-12 left-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg animate-bounce-slow">
                {book.category}
              </span>
            </div>

            {/* Book Info */}
            <div className="animate-fade-in-right">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                ⭐ Bestseller
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-serif mb-4">
                {book.title}
              </h1>

              <p className="text-xl text-gray-600 mb-4">
                by <span className="font-semibold text-gray-800">{book.author}</span>
              </p>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.floor(book.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {book.rating} out of 5
                </span>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary-700">
                  ${book.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  {book.description}
                </p>
              </div>

              {/* Book Details */}
              <div className="bg-gray-100 rounded-xl p-6 mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Book Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Publisher</p>
                    <p className="font-medium text-gray-800">{book.publisher}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium text-gray-800">{book.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pages</p>
                    <p className="font-medium text-gray-800">{book.pages}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ISBN</p>
                    <p className="font-medium text-gray-800">{book.isbn}</p>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-secondary-500 hover:bg-secondary-600 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <Link
                  to="/cart"
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $35</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Quality Guaranteed</h3>
                <p className="text-sm text-gray-600">100% authentic books</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Easy Returns</h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookDetails;
