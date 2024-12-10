import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold">
          BrikChain
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          <Link to="/marketplace" className="hover:text-gray-300">
            Marketplace
          </Link>
          <Link to="/community" className="hover:text-gray-300">
            Community
          </Link>
          <Link to="/wallet" className="hover:text-gray-300">
            Wallet
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
