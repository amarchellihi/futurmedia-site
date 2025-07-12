import React from 'react';
import Image from 'next/image';

const ServicesHero: React.FC = () => {
  return (
    <section id='home' className="relative flex items-center justify-center">

     <Image
        src="/services.svg"
        alt="Futur Media - Services"
        className="relative z-10 w-[90%] sm:w-[75%] lg:w-[60%] h-auto object-contain mt-20"
        width={800} 
        height={450} 
      />
    </section>
  );
};

export default ServicesHero;
