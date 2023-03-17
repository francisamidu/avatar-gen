import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Hero, Images, Nav } from './components';
const App = () => {
  return (
    <main className="min-h-[96vh] overflow-x-hidden bg-[#02000e]">
      <ToastContainer />
      <Nav />
      <Hero />
      <Images />
    </main>
  );
};

export default App;
