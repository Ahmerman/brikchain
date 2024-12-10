import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeImage from '../assets/home.jpg'; // Importing the main homepage image

function Home() {
  const navigate = useNavigate();

  // Fake properties data
  const properties = [
    {
      id: 1,
      name: 'Skyline Tower',
      aliasImage: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      expectedIncome: '7%',
      capitalRow: '6%',
    },
    {
      id: 2,
      name: 'Palm Paradise',
      aliasImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      expectedIncome: '8%',
      capitalRow: '5%',
    },
    {
      id: 3,
      name: 'Sunset Villa',
      aliasImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      expectedIncome: '6%',
      capitalRow: '4%',
    },
    {
      id: 4,
      name: 'Downtown Lofts',
      aliasImage: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      expectedIncome: '7.5%',
      capitalRow: '5.5%',
    },
  ];
  

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <div className="relative w-full h-full">
          <img
            src={homeImage}
            alt="Real Estate Blockchain"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded-lg">
            <h1 className="text-xl md:text-3xl text-white font-bold mb-2">
              Fractional ownership of real estate using blockchain
            </h1>
            <h1 className='text-xl md:text-1xl text-blue-500 font-semibold mb-2'>
              Real Estate Reinvented
            </h1>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>

      {/* Hottest Properties Section */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Hottest Properties</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              {/* Income and Capital Rows */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between text-gray-700 font-medium mb-2">
                  <span>Expected Income:</span>
                  <span>{property.expectedIncome}</span>
                </div>
                <div className="flex justify-between text-gray-700 font-medium">
                  <span>Capital Row:</span>
                  <span>{property.capitalRow}</span>
                </div>
              </div>
              {/* Property Image */}
              <img
                src={property.aliasImage}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              {/* Property Name */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">{property.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
