import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Import the Sidebar component

function Community() {
  // Fake posts data
  const initialPosts = [
    {
      id: 1,
      username: 'randomuser1',
      content: 'What are your thoughts on fractional ownership in real estate?',
      likes: 34,
      comments: 12,
    },
    {
      id: 2,
      username: 'randomuser2',
      content: 'BrikChain has made investing so easy for people like me!',
      likes: 56,
      comments: 20,
    },
    {
      id: 3,
      username: 'randomuser3',
      content: 'Do you think blockchain can completely change the real estate market?',
      likes: 78,
      comments: 15,
    },
    {
      id: 4,
      username: 'randomuser4',
      content: 'Here’s a question: How secure are ERC-20 tokens in BrikChain?',
      likes: 29,
      comments: 8,
    },
    {
      id: 5,
      username: 'randomuser5',
      content: 'Just started investing through BrikChain, and I’m loving it so far!',
      likes: 90,
      comments: 23,
    },
    {
      id: 6,
      username: 'randomuser6',
      content: 'Has anyone tried the AI valuation tool? It’s quite impressive!',
      likes: 65,
      comments: 14,
    },
    {
      id: 7,
      username: 'randomuser7',
      content: 'Does anyone have tips on managing a real estate investment portfolio?',
      likes: 42,
      comments: 10,
    },
    {
      id: 8,
      username: 'randomuser8',
      content: 'Fractional ownership seems to be the future. What do you guys think?',
      likes: 38,
      comments: 11,
    },
    {
      id: 9,
      username: 'randomuser9',
      content: 'Blockchain is the best thing to happen to real estate investment!',
      likes: 50,
      comments: 19,
    },
    {
      id: 10,
      username: 'randomuser10',
      content: 'Excited to see where BrikChain takes us in the next few years!',
      likes: 72,
      comments: 18,
    },
  ];

  // State for posts
  const [posts, setPosts] = useState(initialPosts);

  // Handle like button click
  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        {/* Header */}
        <div className="bg-blue-500 text-white py-6">
          <h1 className="text-center text-3xl font-bold">Community Feed</h1>
          <p className="text-center text-sm mt-2">
            Share your thoughts and explore posts from other users
          </p>
        </div>

        {/* Post Feed */}
        <div className="container mx-auto py-8 px-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200"
            >
              {/* Username */}
              <div className="flex items-center mb-2">
                <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  {post.username.charAt(0).toUpperCase()}
                </div>
                <h3 className="text-lg font-bold">{post.username}</h3>
              </div>

              {/* Post Content */}
              <p className="text-gray-700 text-sm mb-4">{post.content}</p>

              {/* Interactions */}
              <div className="flex items-center text-gray-500 text-sm">
                <button
                  onClick={() => handleLike(post.id)}
                  className="mr-4 flex items-center text-gray-500 hover:text-blue-500"
                >
                  <i className="fas fa-thumbs-up mr-1"></i> {post.likes}
                </button>
                <span className="flex items-center">
                  <i className="fas fa-comment mr-1"></i> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default Community;
