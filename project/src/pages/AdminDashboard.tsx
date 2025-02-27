import React, { useState } from 'react';
import { pizzas } from '../data/pizzas';
import { Pizza } from '../types';
import { Edit, Trash2, Plus } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>(pizzas);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPizza, setCurrentPizza] = useState<Pizza | null>(null);
  
  const handleDelete = (id: number) => {
    if (window.confirm('Weet je zeker dat je deze pizza wilt verwijderen?')) {
      setPizzaList(prevPizzas => prevPizzas.filter(pizza => pizza.id !== id));
    }
  };
  
  const openEditModal = (pizza: Pizza) => {
    setCurrentPizza(pizza);
    setIsEditModalOpen(true);
  };
  
  const openAddModal = () => {
    setCurrentPizza(null);
    setIsAddModalOpen(true);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={openAddModal}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-1" />
          Nieuwe Pizza
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Pizza's Beheren</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Afbeelding
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Naam
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categorie
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prijs
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acties
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pizzaList.map(pizza => (
                <tr key={pizza.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img 
                      src={pizza.image} 
                      alt={pizza.name} 
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{pizza.name}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{pizza.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`
                      px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${pizza.category === 'vegetarian' ? 'bg-green-100 text-green-800' : ''}
                      ${pizza.category === 'meat' ? 'bg-red-100 text-red-800' : ''}
                      ${pizza.category === 'spicy' ? 'bg-orange-100 text-orange-800' : ''}
                      ${pizza.category === 'special' ? 'bg-purple-100 text-purple-800' : ''}
                    `}>
                      {pizza.category === 'vegetarian' ? 'Vegetarisch' : ''}
                      {pizza.category === 'meat' ? 'Vlees' : ''}
                      {pizza.category === 'spicy' ? 'Pittig' : ''}
                      {pizza.category === 'special' ? 'Speciaal' : ''}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    €{pizza.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openEditModal(pizza)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(pizza.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Note: In a real application, you would implement the add/edit modals here */}
      {/* For brevity, they are omitted in this example */}
    </div>
  );
};

export default AdminDashboard;