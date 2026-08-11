import React, { useState } from 'react';

export default function StudentLogin() {
  const [credentials, setCredentials] = useState({ rollNo: '', dob: '' });

  return (
    <div className="max-w-md mx-auto my-12 p-6 bg-white shadow-md rounded-xl border">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">🔐 Student Login Portal</h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Roll / Registration Number</label>
          <input 
            type="text" 
            onChange={(e) => setCredentials({...credentials, rollNo: e.target.value})}
            placeholder="Enter Roll Number"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Date of Birth / Password</label>
          <input 
            type="password" 
            onChange={(e) => setCredentials({...credentials, dob: e.target.value})}
            placeholder="Enter Date of Birth"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-[#0066b2] text-white py-2 rounded-md font-semibold hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}