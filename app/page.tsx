import React from 'react';
import Hero from './Components/hero/Hero';
import Libray from './Components/Library/libray';

const HomePage = () => {
  return (
    <div className='mt-20'>
      <Hero/>
      <Libray/>
    </div>
  );
};

export default HomePage;