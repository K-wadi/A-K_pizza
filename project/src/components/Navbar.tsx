import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Pizza, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Pizza className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">A&K Pizza's</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-red-700">Home</Link>
            <Link to="/menu" className="px-3 py-2 rounded-md hover:bg-red-700">Menu</Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-red-700">Contact</Link>
            
            {isAuthenticated ? (
              <>
                {user?.role === 'baker' && (
                  <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-red-700">Dashboard</Link>
                )}
                {user?.role === 'admin' && (
                  <Link to="/admin" className="px-3 py-2 rounded-md hover:bg-red-700">Admin</Link>
                )}
                <Link to="/order-history" className="px-3 py-2 rounded-md hover:bg-red-700">Bestellingen</Link>
                <button 
                  onClick={logout}
                  className="px-3 py-2 rounded-md hover:bg-red-700"
                >
                  Uitloggen
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-3 py-2 rounded-md hover:bg-red-700">Inloggen</Link>
                <Link to="/register" className="px-3 py-2 rounded-md hover:bg-red-700">Registreren</Link>
              </>
            )}
            
            <Link to="/cart" className="relative px-3 py-2 rounded-md hover:bg-red-700">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative px-3 py-2 mr-2">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-red-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md hover:bg-red-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="block px-3 py-2 rounded-md hover:bg-red-700"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md hover:bg-red-700"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                {user?.role === 'baker' && (
                  <Link 
                    to="/dashboard" 
                    className="block px-3 py-2 rounded-md hover:bg-red-700"
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </Link>
                )}
                {user?.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="block px-3 py-2 rounded-md hover:bg-red-700"
                    onClick={toggleMenu}
                  >
                    Admin
                  </Link>
                )}
                <Link 
                  to="/order-history" 
                  className="block px-3 py-2 rounded-md hover:bg-red-700"
                  onClick={toggleMenu}
                >
                  Bestellingen
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-red-700"
                >
                  Uitloggen
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 rounded-md hover:bg-red-700"
                  onClick={toggleMenu}
                >
                  Inloggen
                </Link>
                <Link 
                  to="/register" 
                  className="block px-3 py-2 rounded-md hover:bg-red-700"
                  onClick={toggleMenu}
                >
                  Registreren
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;