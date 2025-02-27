import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Truck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">De lekkerste pizza's, vers gemaakt!</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">Bestel eenvoudig online en geniet van ambachtelijke pizza's, bereid met de beste ingrediënten.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/menu" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center">
              Bekijk menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/login" className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-6 rounded-lg transition-colors">
              Inloggen
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom kiezen voor A&K Pizza's?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kwaliteit</h3>
              <p className="text-gray-600">Wij gebruiken alleen de beste en versie ingrediënten voor onze pizza's.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Snel</h3>
              <p className="text-gray-600">Onze pizza's worden snel bereid en bezorgd, zodat je niet lang hoeft te wachten.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4">
                <Truck className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bezorging</h3>
              <p className="text-gray-600">Wij bezorgen in heel Nederland, zodat je overal kunt genieten van onze pizza's.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pizzas Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Populaire Pizza's</h2>
            <Link to="/menu" className="text-red-600 hover:text-red-700 font-medium flex items-center">
              Bekijk alle pizza's
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Margherita" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Margherita</h3>
                <p className="text-gray-600 text-sm mt-1">De klassieker met tomatensaus, mozzarella en verse basilicum</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-lg font-bold">€8.99</span>
                  <Link to="/pizza/1" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Bekijk
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Pepperoni" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Pepperoni</h3>
                <p className="text-gray-600 text-sm mt-1">Tomatensaus, mozzarella en pepperoni</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-lg font-bold">€10.99</span>
                  <Link to="/pizza/2" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Bekijk
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="A&K Special" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">A&K Special</h3>
                <p className="text-gray-600 text-sm mt-1">Onze specialiteit met tomatensaus, mozzarella, parmaham, rucola en parmezaanse kaas</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-lg font-bold">€13.99</span>
                  <Link to="/pizza/6" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Bekijk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Honger gekregen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Bestel nu je favoriete pizza's online en geniet van de beste smaak!</p>
          <Link to="/menu" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors inline-block">
            Bestel nu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home