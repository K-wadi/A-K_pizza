import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ChevronLeft, Plus, Minus } from 'lucide-react';
import { getPizzaById } from '../data/pizzas';
import { useCart } from '../context/CartContext';

const PizzaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const pizza = getPizzaById(Number(id));
  
  if (!pizza) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Pizza niet gevonden</h2>
        <p className="mb-6">De pizza die je zoekt bestaat niet of is niet meer beschikbaar.</p>
        <button 
          onClick={() => navigate('/menu')}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Terug naar menu
        </button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(pizza, quantity);
    navigate('/cart');
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => navigate('/menu')}
        className="flex items-center text-gray-600 hover:text-red-600 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Terug naar menu
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={pizza.image} 
              alt={pizza.name} 
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">{pizza.name}</h1>
                <span className={`
                  inline-block px-2 py-1 text-xs font-semibold rounded-full mt-2
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
              <span className="text-2xl font-bold">€{pizza.price.toFixed(2)}</span>
            </div>
            
            <p className="text-gray-600 mt-4">{pizza.description}</p>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Ingrediënten:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center mb-4">
                <button 
                  onClick={decreaseQuantity}
                  className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="mx-4 text-xl font-semibold">{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                In winkelwagen (€{(pizza.price * quantity).toFixed(2)})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;