import React, { useState } from 'react';

export default function VerifyCertificate() {
  const [certNum, setCertNum] = useState('');

  return (
    <div className="max-w-md mx-auto my-12 p-6 bg-white shadow-md rounded-xl border border-slate-200 text-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">🎓 Verify Certificate</h2>
      <p className="text-sm text-slate-500 mb-6">Enter details below to check verification status</p>
      
      <div className="space-y-4">
        <input 
          type="text" 
          value={certNum} 
          onChange={(e) => setCertNum(e.target.value)}
          placeholder="Enter Registration / Roll No."
          className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <button 
          onClick={() => alert(`Verifying: ${certNum}`)} 
          className="w-full bg-[#0066b2] text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Verify Now
        </button>
      </div>
    </div>
  );
}