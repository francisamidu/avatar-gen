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
  const [loading, setLoading] = useState(false);
  const generateWallpaper = async () => {
    try {
      if (!prompt) {
        toast.error('Please provide any image prompt');
        return;
      }
      setLoading(true);
      const response = await generateImage(prompt);
      setImage(response.url);
      setPrompt('');
      setLoading(false);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setLoading(false);
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
            icon={
              <svg
                className="ml-3 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            }
            iconShow={loading}
            text={`Start Generating`}
            onClick={generateWallpaper}
          />
        </form>
        <div
          className={`my-5 mx-auto flex max-w-[512px] flex-col items-center justify-center rounded-md ${
            !image ? 'hidden' : ''
          }`}
        >
          <h3 className="mb-1 text-lg font-medium text-slate-300">
            Generated Wallpaper
          </h3>
          <img
            alt="Original photo of a room with roomGPT.io"
            src={image}
            className="h-96 w-full rounded-2xl object-cover"
            width={400}
            height={400}
          />
          <Button text="Download" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
