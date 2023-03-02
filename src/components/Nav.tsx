import React from 'react';
import { motion } from 'framer-motion';
import shared from '../shared.json';
import { Github } from 'lucide-react';

const Nav = () => {
  return (
    <motion.nav>
      <div className="border-b-200 mx-auto flex flex-row flex-wrap items-center justify-between border-b py-4 md:max-w-[1100px]">
        <a href="/" className="self-center whitespace-nowrap text-xl font-bold">
          {shared.name}
        </a>
        <a
          href="https://www.github.com/francisamidu/avatar-gen"
          target="_blank"
          className="inline-flex items-center rounded-3xl border-none bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white text-inherit shadow-md outline-none hover:bg-blue-500"
        >
          <span>Star on Github</span>
          <Github color="#334155" size={20} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Nav;
