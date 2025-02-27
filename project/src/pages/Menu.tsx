import React, { useState, useEffect } from 'react';
import PizzaCard from '../components/PizzaCard';
import PizzaFilter from '../components/PizzaFilter';
import { Pizza } from '../types';
import { pizzas, getPizzasByCategory, searchPizzas } from '../data/pizzas';

const Menu: React.FC = () => {
  const [filteredPizzas, setFilteredPizzas] = useState<Pizza[]>(pizzas);
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let result = pizzas;
    
    // Apply category filter
    if (category !== 'all') {
      result = getPizzasByCategory(category);
    }
    
    // Apply search filter
    if (searchQuery) {
      result = searchPizzas(searchQuery);
      // If category is also selected, filter the search results by category
      if (category !== 'all') {
        result = result.filter(pizza => pizza.category === category);
      }
    }
    
    setFilteredPizzas(result);
  }, [category, searchQuery]);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Ons Menu</h1>
      
      <PizzaFilter 
        onFilterChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      
      {filteredPizzas.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Geen pizza's gevonden die aan je zoekcriteria voldoen.</p>
          <button 
            onClick={() => {
              setCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Toon alle pizza's
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPizzas.map(pizza => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;