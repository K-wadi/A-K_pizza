import { Order } from '../types';

export const orders: Order[] = [
  {
    id: 1,
    items: [
      {
        pizza: {
          id: 1,
          name: 'Margherita',
          description: 'De klassieker met tomatensaus, mozzarella en verse basilicum',
          price: 8.99,
          image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          category: 'vegetarian',
          ingredients: ['tomatensaus', 'mozzarella', 'basilicum']
        },
        quantity: 2
      },
      {
        pizza: {
          id: 2,
          name: 'Pepperoni',
          description: 'Tomatensaus, mozzarella en pepperoni',
          price: 10.99,
          image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          category: 'meat',
          ingredients: ['tomatensaus', 'mozzarella', 'pepperoni']
        },
        quantity: 1
      }
    ],
    totalPrice: 28.97,
    status: 'pending',
    createdAt: '2025-04-01T14:30:00Z',
    address: 'Hoofdstraat 123, Amsterdam',
    userId: 1
  },
  {
    id: 2,
    items: [
      {
        pizza: {
          id: 6,
          name: 'A&K Special',
          description: 'Onze specialiteit met tomatensaus, mozzarella, parmaham, rucola en parmezaanse kaas',
          price: 13.99,
          image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          category: 'special',
          ingredients: ['tomatensaus', 'mozzarella', 'parmaham', 'rucola', 'parmezaanse kaas']
        },
        quantity: 1
      }
    ],
    totalPrice: 13.99,
    status: 'preparing',
    createdAt: '2025-04-01T15:45:00Z',
    address: 'Kerkstraat 45, Rotterdam',
    userId: 1
  },
  {
    id: 3,
    items: [
      {
        pizza: {
          id: 3,
          name: 'Quattro Formaggi',
          description: 'Tomatensaus en vier verschillende kazen',
          price: 11.99,
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          category: 'vegetarian',
          ingredients: ['tomatensaus', 'mozzarella', 'gorgonzola', 'parmezaan', 'provolone']
        },
        quantity: 2
      }
    ],
    totalPrice: 23.98,
    status: 'delivered',
    createdAt: '2025-03-31T18:20:00Z',
    address: 'Marktplein 7, Utrecht',
    userId: 2
  }
];

export const getOrdersByUserId = (userId: number): Order[] => {
  return orders.filter(order => order.userId === userId);
};

export const updateOrderStatus = (orderId: number, status: Order['status']): boolean => {
  const orderIndex = orders.findIndex(order => order.id === orderId);
  if (orderIndex !== -1) {
    orders[orderIndex].status = status;
    return true;
  }
  return false;
};

export const createOrder = (order: Omit<Order, 'id' | 'createdAt'>): Order => {
  const newOrder: Order = {
    ...order,
    id: orders.length + 1,
    createdAt: new Date().toISOString()
  };
  orders.push(newOrder);
  return newOrder;
};