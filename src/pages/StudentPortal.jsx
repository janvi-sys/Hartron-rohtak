import React from 'react';

export default function StudentPortal() {
  return (
    <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-blue-950 mb-6">Student Portal Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Roll Number / Registration No.</label>
          <input 
            type="text" 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:outline-none" 
            placeholder="Enter Roll No."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:outline-none" 
            placeholder="Enter Password"
          />
        </div>
        <button 
          type="button" 
          className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-colors font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}