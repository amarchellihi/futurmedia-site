"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const References: React.FC = () => {
  return (
    <section
      id="references"
      className="relative w-full px-4 sm:px-8 py-16 sm:py-24 lg:py-32 text-white overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Centered Decorative SVG */}
        <motion.div
          className="flex justify-center mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/pourquoi NOUS faire confiance _.svg"
            alt="Pourquoi nous faire confiance ?"
            className="w-48 sm:w-56 md:w-64 pointer-events-none"
          />
        </motion.div>

        {/* Section Title */}
        <motion.h3
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-white">QUELQUES </span>
          <span className="text-[#ff2aad] underline underline-offset-[14px] decoration-[#ff2aad] decoration-[3px]">
            RÉFÉRENCES !
          </span>
        </motion.h3>

        {/* Reference Logos Image */}
        <motion.div
  className="w-full px-2 sm:px-4"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  viewport={{ once: true }}
>
  <Image
    src="/references.svg"
    alt="Futur Media - Références"
    className="mx-auto w-full max-w-[960px] h-auto object-contain drop-shadow-lg"
    width={1000}
    height={600}
    priority
  />
</motion.div>

      </div>
    </section>
  );
};

export default References;
