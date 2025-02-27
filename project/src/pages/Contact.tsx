import React from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    // In a real app, this would send the form data to a server
    console.log(data);
    alert('Bericht verzonden! We nemen zo snel mogelijk contact met je op.');
    reset();
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Neem contact met ons op</h2>
            <p className="text-gray-600 mb-6">
              Heb je vragen over je bestelling of wil je meer informatie? Vul het contactformulier in en we nemen zo snel mogelijk contact met je op.
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Naam is verplicht' })}
                  className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div className="mb-4">
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
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Onderwerp</label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Onderwerp is verplicht' })}
                  className={`w-full p-2 border rounded-md ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Bericht is verplicht' })}
                  className={`w-full p-2 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
              >
                Verstuur
              </button>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Contactgegevens</h2>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Adres</p>
                  <p className="text-gray-600">Pizzastraat 123<br />1234 AB Amsterdam</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-red-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Telefoon</p>
                  <p className="text-gray-600">020-123 4567</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-red-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">E-mail</p>
                  <p className="text-gray-600">info@akpizzas.nl</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Openingstijden</h2>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-red-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Maandag t/m vrijdag</p>
                  <p className="text-gray-600">12:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-red-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Zaterdag en zondag</p>
                  <p className="text-gray-600">14:00 - 23:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;