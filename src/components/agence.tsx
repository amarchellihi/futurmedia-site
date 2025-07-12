import React from 'react';


const Agence: React.FC = () => {
  return (
<section className="text-white py-20 px-4 sm:px-6">
  <div className="max-w-4xl mx-auto text-left">
    <h2 className="text-center text-[28px] md:text-[48px] font-black leading-tight tracking-tight mb-8">
      L’Agence du{" "}
      <span className="text-[#ff2aad] italic relative inline-block">
        “Futur des Médias”
        <span className="block h-[3px] md:h-[4px] bg-[#ff2aad] mt-2 w-full"></span>
      </span>{" "}
      !
    </h2>
    <p className="text-[16px] md:text-3xl font-light leading-relaxed md:leading-[1.7] tracking-normal md:tracking-[-0.01em]">
      Une équipe Jeune et Dynamique à la pointe des Dernières Technologies et
      tendances du AI & Digital sur les Réseaux Sociaux.
      <br className="hidden sm:block" />
      FM accompagne ses clients pour des campagnes 360° au Succès Garanti.
      <br className="hidden sm:block" />
      FM Des années d’Expertise à votre service dans les métiers passionnants du
      monde de la Communication.
    </p>
  </div>
</section>



  );
};

export default Agence;