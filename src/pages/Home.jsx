import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeImage from '../assets/home.jpg'; // Importing the image from assets

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={homeImage}
        alt="Real Estate Blockchain"
        className="w-full h-1/3 object-cover"
      />
      {/* Overlay Text and Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center mb-6">
          Fractional ownership of real estate using blockchain
        </h1>
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          Join Us
        </button>
      </div>
    </div>
  );
}

export default Home;
