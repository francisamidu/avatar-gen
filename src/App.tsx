import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Hero, Nav } from './components';
const App = () => {
  return (
    <main className="min-h-[96vh] overflow-x-hidden bg-[#02000e]">
      <ToastContainer />
      <Nav />
      <Hero />
    </main>
  );
};

export default App;
