import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin,FaFacebook } from "react-icons/fa";
import { futuraHeavy } from "@/lib/fonts";


const Footer: React.FC = () => (
  <footer className="bg-purple-700 text-white">
    {/* upper strip */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* logo + address */}
      <div className="flex gap-4 items-start">
        <Image
          src="/logo-blanc.svg"
          alt="Futur Media logo"
          width={100}
          height={100}
        />

        <div className="flex flex-col justify-between items-start h-full gap-4">
          <address className="not-italic text-xs leading-relaxed">
            10, Rue Moussa Abou Hamou,<br /> ex-IMPASSE Rue  Daguerre, Alger, Algérie <br />
            (+213)&nbsp;7&nbsp;70&nbsp;30&nbsp;47&nbsp;18<br />
            (+213)&nbsp;7&nbsp;70&nbsp;49&nbsp;35&nbsp;57<br />
            Amel.OUADAH@futurmedia-dz.com
          </address>
          <div className="flex gap-4 justify-center">
          <a href="https://www.instagram.com/futur.media1/?hl=fr" className="hover:opacity-80 transition-opacity">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/futur-media/" className="hover:opacity-80 transition-opacity">
            <FaLinkedin size={24} />

          </a>
          <a href="https://web.facebook.com/futurmedia.dz" className="hover:opacity-80 transition-opacity">
            <FaFacebook size={24} />
            
          </a>
        </div>
        </div>
      </div>
 
      {/* slogan + social icons */}
      <div className="self-center text-center">
        <p className={`font-bold text-lg sm:text-2xl mb-4 ${futuraHeavy.className}`}>
          &quot;LE&nbsp;Futur&nbsp;Des&nbsp;Médias&quot;
        </p>
        
      </div>
    </div>

    {/* lower strip */}
    <div className="bg-white text-purple-700 flex flex-col sm:flex-row gap-2 items-center justify-between px-6 py-3 text-sm">
      <p className="font-bold text-center">
        © FUTUR MEDIA – Là Où Votre Imagination Prend Forme.
      </p>
      <a href="#" className="hover:underline font-semibold">
        Mentions légales
      </a>
    </div>
  </footer>
);

export default Footer;
