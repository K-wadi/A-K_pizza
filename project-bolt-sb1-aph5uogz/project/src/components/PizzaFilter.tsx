import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface PizzaFilterProps {
  onFilterChange: (category: string) => void;
  onSearchChange: (query: string) => void;
}

const PizzaFilter: React.FC<PizzaFilterProps> = ({ onFilterChange, onSearchChange }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Zoek pizza's..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-2">
          <Filter className="h-5 w-5 mr-2 text-red-600" />
          <h3 className="font-medium">Filter op categorie</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeCategory === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Alle
          </button>
          <button
            onClick={() => handleCategoryChange('vegetarian')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeCategory === 'vegetarian'
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Vegetarisch
          </button>
          <button
            onClick={() => handleCategoryChange('meat')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeCategory === 'meat'
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Vlees
          </button>
          <button
            onClick={() => handleCategoryChange('spicy')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeCategory === 'spicy'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Pittig
          </button>
          <button
            onClick={() => handleCategoryChange('special')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeCategory === 'special'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Speciaal
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaFilter;