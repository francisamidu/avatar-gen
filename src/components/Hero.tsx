import React, { useState } from 'react';
import Button from './Button';
import { TwitterIcon } from 'lucide-react';
import { toast } from 'react-toastify';
import shared from '../shared.json';
import generateImage from '../utils/generate-image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const generateWallpaper = async () => {
    try {
      if (!prompt) {
        toast.error('Please provide any image prompt');
        return;
      }
      const response = await generateImage(prompt);
      setImage(response.url);
      setPrompt('');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      toast.error(message);
    }
  };
  return (
    <section className="my-20 flex flex-1 flex-col items-center justify-center text-center">
      <div className="md:w-7/12">
        <a
          href="https://www.github.com/francisamidu/avatar-gen"
          target="_blank"
          className="mb-10 inline-flex items-center rounded-xl border-[1px] border-slate-900 px-5 py-2.5 text-center text-sm font-medium text-inherit shadow-md outline-none"
        >
          <TwitterIcon color="rgb(59,130,246)" size={20} />
          <span className="ml-2 text-gray-100">Introducing {shared.name}</span>
        </a>
        <h1 className="px-4 text-4xl font-bold capitalize text-white md:px-0 md:text-6xl md:leading-[4rem]">
          Revolutionize your wallpaper game with{' '}
          <span className="mx-1.5 border-b border-green-700 text-green-700">
            {shared.name}
          </span>{' '}
        </h1>
        <p className="mx-auto my-8 w-4/5 text-gray-500">
          Want a wallpaper that's unlike anything else? Let our AI-powered
          generator create a one-of-a-kind design just for you. Try it out now
          and see the magic for yourself.
        </p>
        <form className="mt-10 flex flex-col items-center justify-center">
          <textarea
            aria-label="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="mx-auto mt-3 w-3/5 rounded-md border-2 border-slate-700 bg-gray-800 p-2 text-gray-400 shadow-sm focus:outline-none"
            placeholder={'e.g. Generate a futuristic avatar for'}
          />
          <Button
            classNames="px-7 py-4 !rounded-3xl w-fit mt-5"
            text={`Start Generating`}
            onClick={generateWallpaper}
          />
        </form>
        <motion.div
          key={JSON.stringify(image)}
          className="my-2 max-w-[512px] rounded-md"
        >
          <img className="w-full" src={image}></img>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
