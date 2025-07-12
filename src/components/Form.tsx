"use client";

import { futuraHeavy } from "@/lib/fonts";


import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSent(true);
        formRef.current?.reset();
      })
      .catch((err) => console.error("EmailJS error:", err));
  };

  return (
    <div className="mt-12 flex justify-center items-center ">
      <div className="max-w-5xl border-2 border-pink-600 grid md:grid-cols-2 backdrop-blur-sm rounded-3xl gap-8">
        {/* ─── form ─── */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 p-6 text-white"
          aria-label="Formulaire de contact Futur Media"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-6 ${futuraHeavy.className}`}>
            Formulaire de contact
          </h2>

          <div>
            <label htmlFor="user_name" className="sr-only">
              Nom – Prénom
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              placeholder="Nom – Prénom"
              required
              className="w-full rounded border border-white/40 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              placeholder="Email"
              required
              className="w-full rounded border border-white/40 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Sujet / message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Sujet"
              required
              className="w-full rounded resize-none border border-white/40 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            aria-label="Envoyer le formulaire"
            className="bg-purple-700  hover:scale-120 transition ease-in-out duration-500 px-6 py-2 rounded font-bold"
          >
            Envoyer
          </button>

          {sent && (
            <p className="text-green-400 text-center mt-4">
              ✅ Message envoyé !
            </p>
          )}
        </form>

        {/* ─── info panel ─── */}
        <div className="flex flex-col justify-between bg-purple-700 w-full text-white text-sm md:rounded-r-3xl md:rounded-bl-none rounded-b-3xl rounded-rt-none p-8 space-y-6">
          <p className="font-bold">
            Nous vous remercions pour votre message, vous recevrez une
            réponse dans les plus brefs délais.
          </p>

          <div className="flex justify-center">
            <Image
              src="/logo-blanc.svg"
              alt="Futur Media logo"
              width={180}
              height={180}
              className=""
              priority
            />
          </div>

          <ul className="space-y-3 leading-relaxed">
            <li className="flex items-start gap-2">
              <Image
                src="/icons/location-icon.png"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 mt-1"
              />
              10, Rue Moussa Abou Hamou, ex-IMPASSE Rue  Daguerre, Alger, Algérie <br />
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/icons/phone-icon.png"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4"
              />
              (+213)&nbsp;7&nbsp;70&nbsp;30&nbsp;47&nbsp;18<br />
              (+213)&nbsp;7&nbsp;70&nbsp;49&nbsp;35&nbsp;57<br />
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/icons/email-icon.png"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4"
              />
              Amel.OUADAH@futurmedia-dz.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
