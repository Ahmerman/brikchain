import React from 'react';
import Sidebar from '../components/Sidebar';

function Notifications() {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        {/* Page Header */}
        <div className="bg-blue-500 text-white py-6">
          <h1 className="text-center text-3xl font-bold">Notifications</h1>
          <p className="text-center text-sm mt-2">
            Stay updated with the latest activity
          </p>
        </div>

        {/* Notifications List */}
        <div className="container mx-auto py-8 px-4">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <p className="text-gray-700">
              <strong>User123</strong> liked your post.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <p className="text-gray-700">
              <strong>randomuser5</strong> commented: "Great insights!"
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default Notifications;
