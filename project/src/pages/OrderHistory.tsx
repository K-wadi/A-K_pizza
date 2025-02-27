import React from 'react';
import { useAuth } from '../context/AuthContext';
import { getOrdersByUserId } from '../data/orders';
import { OrderStatus } from '../types';
import { Clock, CheckCircle, Truck, AlertCircle } from 'lucide-react';

const OrderHistory: React.FC = () => {
  const { user } = useAuth();
  const orders = user ? getOrdersByUserId(user.id) : [];
  
  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'preparing':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'ready':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'delivered':
        return <Truck className="h-5 w-5 text-gray-500" />;
      default:
        return null;
    }
  };
  
  const getStatusText = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return 'In afwachting';
      case 'preparing':
        return 'In bereiding';
      case 'ready':
        return 'Klaar voor bezorging';
      case 'delivered':
        return 'Bezorgd';
      default:
        return '';
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Bestelgeschiedenis</h1>
      
      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 mb-4">Je hebt nog geen bestellingen geplaatst.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">Bestelling #{order.id}</h2>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleString('nl-NL')}
                  </p>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <span className="ml-2 text-sm font-medium">
                    {getStatusText(order.status)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-medium mb-3">Bestelde items:</h3>
                <ul className="divide-y divide-gray-200">
                  {order.items.map((item, index) => (
                    <li key={index} className="py-3 flex justify-between">
                      <div className="flex">
                        <img 
                          src={item.pizza.image} 
                          alt={item.pizza.name} 
                          className="h-12 w-12 rounded-md object-cover mr-4"
                        />
                        <div>
                          <p className="font-medium">{item.pizza.name}</p>
                          <p className="text-sm text-gray-500">{item.quantity} x €{item.pizza.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <p className="font-medium">€{(item.pizza.price * item.quantity).toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="font-medium">Totaal:</span>
                    <span className="font-bold">€{order.totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="font-medium mb-2">Bezorgadres:</h3>
                  <p className="text-gray-600">{order.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;