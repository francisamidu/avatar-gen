import React from 'react';
import { Hero, Nav } from './components';
const App = () => {
  return (
    <main className="min-h-[96vh] overflow-x-hidden bg-[#02000e]">
      <Nav />
      <Hero />
    </main>
  );
};

export default App;
