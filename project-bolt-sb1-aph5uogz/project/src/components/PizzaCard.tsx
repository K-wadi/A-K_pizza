import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza } from '../types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(pizza, 1);
  };

  return (
    <Link to={`/pizza/${pizza.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={pizza.image} 
            alt={pizza.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2">
            <span className={`
              inline-block px-2 py-1 text-xs font-semibold rounded-full
              ${pizza.category === 'vegetarian' ? 'bg-green-500 text-white' : ''}
              ${pizza.category === 'meat' ? 'bg-red-500 text-white' : ''}
              ${pizza.category === 'spicy' ? 'bg-orange-500 text-white' : ''}
              ${pizza.category === 'special' ? 'bg-purple-500 text-white' : ''}
            `}>
              {pizza.category === 'vegetarian' ? 'Vegetarisch' : ''}
              {pizza.category === 'meat' ? 'Vlees' : ''}
              {pizza.category === 'spicy' ? 'Pittig' : ''}
              {pizza.category === 'special' ? 'Speciaal' : ''}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{pizza.name}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{pizza.description}</p>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-lg font-bold">€{pizza.price.toFixed(2)}</span>
            <button 
              onClick={handleAddToCart}
              className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PizzaCard;