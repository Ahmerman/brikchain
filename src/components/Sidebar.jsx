import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  // Determine if a tab is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-gray-200 w-64 h-screen sticky top-0 bottom-0 flex flex-col">
      <div className="p-6">
        {/* User Info */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-700">
            <i className="fa-solid fa-user"></i> Haris
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="space-y-4">
          {/* Feed Tab */}
          <button
            onClick={() => navigate('/community')}
            className={`flex items-center w-full text-gray-700 hover:bg-gray-300 p-2 rounded ${
              isActive('/community') ? 'bg-blue-500 text-white' : ''
            }`}
          >
            <i className="fas fa-home mr-3"></i>Feed
          </button>

          {/* My Page Tab */}
          <button
            onClick={() => navigate('/community/my-posts')}
            className={`flex items-center w-full text-gray-700 hover:bg-gray-300 p-2 rounded ${
              isActive('/community/my-posts') ? 'bg-blue-500 text-white' : ''
            }`}
          >
            <i className="fas fa-user mr-3"></i>My Page
          </button>

          {/* Notifications Tab */}
          <button
            onClick={() => navigate('/community/notifications')}
            className={`flex items-center w-full text-gray-700 hover:bg-gray-300 p-2 rounded ${
              isActive('/community/notifications') ? 'bg-blue-500 text-white' : ''
            }`}
          >
            <i className="fas fa-bell mr-3"></i>Notifications
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
