import React from 'react';
import { Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full text-slate-300">
      <div className="flex max-w-screen-lg  flex-row items-center justify-center py-4 md:mx-auto">
        <p>
          Made by{' '}
          <a
            className="font-bold"
            href="https://francis-amidu.netlify.app"
            target="_blank"
          >
            Francis Amidu
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
