import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import shared from '../shared.json';

const Hero = () => {
  return (
    <section className="my-24 flex flex-1 flex-col items-center justify-center text-center">
      <div className="md:w-3/5">
        <h1 className="px-4 text-4xl font-bold capitalize md:px-0 md:text-6xl md:leading-[4rem]">
          Easily generate Avatar usiing our
          <span className="text-redish-500">{shared.name}</span> AI
        </h1>
        <p className="my-8 text-gray-400">
          Create Fine avatar for your social media profiles with our AI Avatar
          Generator in <span className="font-bold ">a few second</span>
        </p>
        <Button
          classNames="px-7 py-4 !rounded-3xl"
          icon={<ArrowRight color="#fff" className="ml-3" size={20} />}
          text={`Generate Avatar ${shared.name}`}
          //   onClick={redirectToAdvicePage}
        />
      </div>
    </section>
  );
};

export default Hero;
