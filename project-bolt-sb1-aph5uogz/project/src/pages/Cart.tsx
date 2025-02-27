import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();
  
  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Je winkelwagen is leeg</h2>
          <p className="text-gray-600 mb-6">Voeg wat heerlijke pizza's toe aan je winkelwagen!</p>
          <Link 
            to="/menu"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-block"
          >
            Bekijk menu
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Winkelwagen</h1>
      
      <div className="lg:flex lg:gap-6">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <ul className="divide-y divide-gray-200">
              {cartItems.map(item => (
                <li key={item.pizza.id} className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0">
                      <img 
                        src={item.pizza.image} 
                        alt={item.pizza.name} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="sm:ml-6 flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-semibold">{item.pizza.name}</h3>
                        <p className="font-bold">€{(item.pizza.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{item.pizza.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.pizza.id, item.quantity - 1)}
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.pizza.id, item.quantity + 1)}
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.pizza.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-between mb-8">
            <Link 
              to="/menu"
              className="text-red-600 hover:text-red-800 font-medium flex items-center"
            >
              Verder winkelen
            </Link>
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Bestelling</h2>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotaal</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Bezorgkosten</span>
                <span>€2.50</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                <span>Totaal</span>
                <span>€{(totalPrice + 2.50).toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors mt-6 flex items-center justify-center"
            >
              Afrekenen
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;