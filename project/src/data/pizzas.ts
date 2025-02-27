import { Pizza } from '../types';

export const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    description: 'De klassieker met tomatensaus, mozzarella en verse basilicum',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'vegetarian',
    ingredients: ['tomatensaus', 'mozzarella', 'basilicum']
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'Tomatensaus, mozzarella en pepperoni',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'meat',
    ingredients: ['tomatensaus', 'mozzarella', 'pepperoni']
  },
  {
    id: 3,
    name: 'Quattro Formaggi',
    description: 'Tomatensaus en vier verschillende kazen',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'vegetarian',
    ingredients: ['tomatensaus', 'mozzarella', 'gorgonzola', 'parmezaan', 'provolone']
  },
  {
    id: 4,
    name: 'Diavola',
    description: 'Pittige pizza met tomatensaus, mozzarella, pikante salami en chilipeper',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'spicy',
    ingredients: ['tomatensaus', 'mozzarella', 'pikante salami', 'chilipeper']
  },
  {
    id: 5,
    name: 'Vegetariana',
    description: 'Tomatensaus, mozzarella en diverse groenten',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'vegetarian',
    ingredients: ['tomatensaus', 'mozzarella', 'paprika', 'champignons', 'ui', 'olijven']
  },
  {
    id: 6,
    name: 'A&K Special',
    description: 'Onze specialiteit met tomatensaus, mozzarella, parmaham, rucola en parmezaanse kaas',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'special',
    ingredients: ['tomatensaus', 'mozzarella', 'parmaham', 'rucola', 'parmezaanse kaas']
  },
  {
    id: 7,
    name: 'Calzone',
    description: 'Gevouwen pizza met tomatensaus, mozzarella, ham en champignons',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'special',
    ingredients: ['tomatensaus', 'mozzarella', 'ham', 'champignons']
  },
  {
    id: 8,
    name: 'Hawaii',
    description: 'Tomatensaus, mozzarella, ham en ananas',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4fe0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'meat',
    ingredients: ['tomatensaus', 'mozzarella', 'ham', 'ananas']
  }
];

export const getPizzaById = (id: number): Pizza | undefined => {
  return pizzas.find(pizza => pizza.id === id);
};

export const getPizzasByCategory = (category: string): Pizza[] => {
  if (category === 'all') return pizzas;
  return pizzas.filter(pizza => pizza.category === category);
};

export const searchPizzas = (query: string): Pizza[] => {
  const lowercaseQuery = query.toLowerCase();
  return pizzas.filter(pizza => 
    pizza.name.toLowerCase().includes(lowercaseQuery) || 
    pizza.description.toLowerCase().includes(lowercaseQuery) ||
    pizza.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowercaseQuery))
  );
};