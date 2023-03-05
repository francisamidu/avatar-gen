import { motion } from 'framer-motion';
import React, { useState } from 'react';

import logo from '../assets/images/logo.svg';
import powered from '../assets/images/powered-by-vitawind-bright.png';

const Images = () => {
  const [images, setImages] = useState([logo, powered]);
  return (
    <motion.section className="my-5 flex flex-row items-center justify-center">
      {images.map((image) => (
        <motion.div
          key={JSON.stringify(image)}
          className="mr-2 max-w-[375px] rounded-md last-of-type:mr-0"
        >
          <img className="w-full" src={image}></img>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Images;
