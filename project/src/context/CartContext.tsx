import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Pizza } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (pizza: Pizza, quantity: number) => void;
  removeFromCart: (pizzaId: number) => void;
  updateQuantity: (pizzaId: number, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Calculate total price
    const total = cartItems.reduce((sum, item) => sum + (item.pizza.price * item.quantity), 0);
    setTotalPrice(total);
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (pizza: Pizza, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.pizza.id === pizza.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.pizza.id === pizza.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        return [...prevItems, { pizza, quantity }];
      }
    });
  };

  const removeFromCart = (pizzaId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.pizza.id !== pizzaId));
  };

  const updateQuantity = (pizzaId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(pizzaId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.pizza.id === pizzaId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};