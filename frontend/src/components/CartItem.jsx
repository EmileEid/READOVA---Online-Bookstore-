function CartItem({ item, onUpdateQuantity, onRemove }) {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1 && newQuantity <= 99) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const handleIncrement = () => {
    if (item.quantity < 99) {
      onUpdateQuantity(item.id, item.quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 hover:-translate-y-1">
      {/* Book Image */}
      <div className="w-24 h-32 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Book Details */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">{item.title}</h3>
        <p className="text-gray-500 text-sm mb-2 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {item.author}
        </p>
        <p className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">${item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-1 bg-gray-100 rounded-xl p-1">
        <button
          onClick={handleDecrement}
          className="w-9 h-9 rounded-lg bg-white hover:bg-primary-50 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 shadow-sm hover:shadow"
          aria-label="Decrease quantity"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        
        <input
          type="number"
          min="1"
          max="99"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-12 h-9 text-center bg-white border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 font-semibold text-gray-800"
        />
        
        <button
          onClick={handleIncrement}
          className="w-9 h-9 rounded-lg bg-white hover:bg-primary-50 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200 shadow-sm hover:shadow"
          aria-label="Increase quantity"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      {/* Item Total */}
      <div className="text-right min-w-[100px] bg-primary-50 rounded-xl p-3">
        <p className="text-xs text-primary-600 font-medium mb-1">Subtotal</p>
        <p className="text-xl font-bold text-primary-700">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="p-3 text-gray-400 hover:text-white hover:bg-red-500 rounded-xl transition-all duration-200 hover:scale-110 hover:shadow-lg"
        aria-label="Remove item"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
