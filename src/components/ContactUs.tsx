import React from "react";
import Image from "next/image";

/**
 * Section de contact – version 100 % responsive et optimisée.
 */
const Contactez: React.FC = () => (
  <section id="contact" className="relative max-w-6xl mx-auto mt-20 px-4 flex flex-col items-center text-center">
    {/* Illustration optimisée */}
    <Image
      src="/contact-us.svg"
      alt="Futur Media Services — Illustration"
      width={1200}               //  intrinsic size of the asset
      height={400}
      sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 80vw,
             60vw"
      className="w-full h-auto object-contain"
    />

    <p className="mt-6 text-white font-bold text-sm sm:text-base max-w-prose">
      N&apos;hésitez pas à nous contacter dès maintenant.&nbsp;Osez franchir le
      seuil de notre monde digital et laissez-nous transformer votre vision en
      une réalité digitale extraordinaire.&nbsp;Nous sommes impatients de vous
      rencontrer et de donner vie à vos idées les plus audacieuses.
    </p>
  </section>
);

export default Contactez;
