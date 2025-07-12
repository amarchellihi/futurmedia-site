"use client";
import { useState } from "react";
import { Expertises } from "@/data/expertises";
import { ChevronRight as ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="expertises"
      className="py-16 px-4 sm:px-6 md:px-10 text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h3
          className="text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span>Nos </span>
          <span className="text-[#ff2aad] underline underline-offset-8 decoration-[#ff2aad]">
            Expertises
          </span>
        </motion.h3>

        {/* Cards */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {Expertises.map((item, index) => {
            const isOpen = expandedIndex === index;
            const isExpandable = !!item.details;

            return (
              <motion.div
                key={index}
                onClick={() => isExpandable && handleToggle(index)}
                className={`
                  group relative cursor-pointer overflow-hidden rounded-xl
                  px-5 py-6 sm:px-6 md:px-8 sm:py-8 text-white
                  flex flex-col sm:flex-row justify-between items-start sm:items-center
                  shadow-lg transition-all duration-500 ease-in-out
                  ${
                    isOpen
                      ? "bg-gradient-to-b from-[#ff2aad] via-[#a2196d] to-[#7c1dcf] backdrop-blur-md border border-white"
                      : "bg-[#a020f0] hover:bg-[#ff2aad]"
                  }
                `}
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.35, ease: "easeOut" },
                }}
              >
                {/* Watermark */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.img
                      src="/goutte.svg"
                      alt="Watermark"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 0.4, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0  h-40 sm:h-56 object-cover pointer-events-none z-0"
                    />
                  )}
                </AnimatePresence>

                {/* Content */}
                <div className="relative z-10 w-full sm:pr-24">
                  <h4 className="text-xl sm:text-3xl font-bold">{item.title}</h4>
                  <p className="text-sm sm:text-base font-semibold uppercase tracking-wide mt-1">
                    {item.description}
                  </p>

                  {/* Details */}
                  <AnimatePresence>
                    {isOpen && isExpandable && (
                      <motion.div
                        className="mt-4 text-sm sm:text-base font-light leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.details?.map((line, i) => (
                          <p key={i} className={i > 0 ? "mt-2" : ""}>
                            {line}
                          </p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Note SVG (desktop only) */}
                {item.noteSvg && (
                  <img
                    src={item.noteSvg}
                    alt={`${item.title} note`}
                    className="hidden sm:block absolute right-40 top-3 w-28 sm:w-40 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-out pointer-events-none select-none z-10"
                  />
                )}

                {/* Arrow icon */}
                <motion.button
                  className="relative z-10 mt-4 sm:mt-0 sm:ml-6 p-2 sm:p-3 rounded-full border-2 border-white bg-transparent"
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
