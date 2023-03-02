import React from 'react';
import { motion } from 'framer-motion';
import shared from '../shared.json';
import { Github } from 'lucide-react';

const Nav = () => {
  return (
    <motion.nav>
      <div className="mx-auto flex flex-row flex-wrap items-center justify-between border-b border-gray-800 py-3 md:max-w-[1100px]">
        <a
          href="/"
          className="self-center whitespace-nowrap text-xl font-bold text-white"
        >
          {shared.name}
        </a>
        <a
          href="https://www.github.com/francisamidu/avatar-gen"
          target="_blank"
          className="inline-flex items-center rounded-xl border-none bg-green-700 px-6 py-2.5 text-center text-sm font-medium text-inherit shadow-md outline-none hover:bg-green-500"
        >
          <Github color="#fff" size={20} />
          <span className="ml-2 text-white">Star on Github</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Nav;
