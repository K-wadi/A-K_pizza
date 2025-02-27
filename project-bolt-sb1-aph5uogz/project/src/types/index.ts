export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'baker' | 'admin';
};

export type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'meat' | 'vegetarian' | 'spicy' | 'special';
  ingredients: string[];
};

export type CartItem = {
  pizza: Pizza;
  quantity: number;
};

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'delivered';

export type Order = {
  id: number;
  items: CartItem[];
  totalPrice: number;
  status: OrderStatus;
  createdAt: string;
  address: string;
  userId: number;
};