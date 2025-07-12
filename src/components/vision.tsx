"use client";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <motion.section
      id="vision"
      className="py-16 sm:py-20 px-4 sm:px-8 text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 items-center">
        {/* Left Side */}
        <div className="space-y-6 relative">
          <motion.h3
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-white"> NOTRE </span>
            <span className="text-[#ff2aad] underline underline-offset-8 decoration-[#ff2aad]">
              VISION
            </span>
          </motion.h3>

          <motion.div
            className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-bold italic">Avant l’Action, la Réflexion,</span>
              <br />
              Chez nous , afin de vous garantir les Meilleures Performances et Résultat, chacun
              de vos besoins et objectifs sont étudiés et les meilleurs Conseils et Solutions
              vous seront proposés.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              L’Expertise de la Communication 360° et Les Stratégies Marketing selon votre
              business et secteur d’activité.
            </motion.p>
          </motion.div>

          {/* Animated Floating SVG CTA */}
          <motion.div
            className="mt-8 sm:mt-10"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img
              src="/fleche-futuremedia.svg"
              alt="Futur Media CTA"
              className="w-48 sm:w-64 md:w-[320px]"
            />
          </motion.div>

          {/* Handwritten Note */}
          
        </div>

        {/* Right Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/khmes.svg"
            alt="Handshake"
            className="w-full max-w-md mx-auto rounded-xl border-2 border-[#ff2aad] shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Vision;
