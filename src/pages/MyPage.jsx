import React from 'react';
import Sidebar from '../components/Sidebar';

function MyPage() {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        {/* Page Header */}
        <div className="bg-blue-500 text-white py-6">
          <h1 className="text-center text-3xl font-bold">My Page</h1>
          <p className="text-center text-sm mt-2">View and manage your posts</p>
        </div>

        {/* User Posts */}
        <div className="container mx-auto py-8 px-4">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold">My First Post</h3>
            <p className="text-gray-700 mt-2">
              This is an example of a post I created.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold">Another Post</h3>
            <p className="text-gray-700 mt-2">
              Here’s another example of a post I made!
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default MyPage;
