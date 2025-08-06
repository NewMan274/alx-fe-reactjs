// src/App.jsx

import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-3xl font-bold mb-6 text-blue-800">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
};

export default App;
