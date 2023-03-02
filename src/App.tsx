import React from 'react';
import { Hero, Images, Nav } from './components';
const App = () => {
  return (
    <main className="min-h-[96vh] overflow-x-hidden bg-[#02000e]">
      <Nav />
      <Hero />
      <Images />
    </main>
  );
};

export default App;
