import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createOrder } from '../data/orders';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  notes: string;
};

const Checkout: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
    }
  });
  
  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }
  
  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Create a new order
    const order = createOrder({
      items: cartItems,
      totalPrice: totalPrice + 2.50, // Including delivery fee
      status: 'pending',
      address: `${data.address}, ${data.postalCode} ${data.city}`,
      userId: user?.id || 0
    });
    
    // Simulate API call
    setTimeout(() => {
      clearCart();
      navigate('/order-confirmation', { state: { order } });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Afrekenen</h1>
      
      <div className="lg:flex lg:gap-6">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Bezorggegevens</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Voornaam</label>
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName', { required: 'Voornaam is verplicht' })}
                    className={`w-full p-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Achternaam</label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName', { required: 'Achternaam is verplicht' })}
                    className={`w-full p-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'E-mail is verplicht',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Ongeldig e-mailadres'
                      }
                    })}
                    className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefoonnummer</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { required: 'Telefoonnummer is verplicht' })}
                    className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adres</label>
                <input
                  type="text"
                  id="address"
                  {...register('address', { required: 'Adres is verplicht' })}
                  className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                  <input
                    type="text"
                    id="postalCode"
                    {...register('postalCode', { required: 'Postcode is verplicht' })}
                    className={`w-full p-2 border rounded-md ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>}
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Plaats</label>
                  <input
                    type="text"
                    id="city"
                    {...register('city', { required: 'Plaats is verplicht' })}
                    className={`w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Opmerkingen (optioneel)</label>
                <textarea
                  id="notes"
                  rows={3}
                  {...register('notes')}
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? 'Bestelling plaatsen...' : 'Bestelling plaatsen'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Bestelling</h2>
            
            <ul className="divide-y divide-gray-200 mb-4">
              {cartItems.map(item => (
                <li key={item.pizza.id} className="py-3 flex justify-between">
                  <div>
                    <span className="font-medium">{item.quantity}x </span>
                    <span>{item.pizza.name}</span>
                  </div>
                  <span>€{(item.pizza.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotaal</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Bezorgkosten</span>
                <span>€2.50</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                <span>Totaal</span>
                <span>€{(totalPrice + 2.50).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;