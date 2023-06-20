"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mb-10 relative z-10 h-screen flex flex-col max-w-7xl items-center justify-center text-center md:text-left mx-auto px-5 overflow-x-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-darkturkish">
        About
      </h3>

      <div className="pt-[140px] space-y-5 flex flex-col md:flex-row items-center">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          src="/images/profile.jpg"
          className="shadow-2xl w-56 h-56 object-cover rounded-full flex-shrink-0 md:w-[256px] md:h-[400px] md:rounded-2xl"
        />
        <motion.div
          initial={{
            opacity: 0,
            x: 300,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            //ease: "easeIn",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          className="px-0 md:px-10 space-y-4"
        >
          <h4 className="text-3xl font-semibold">Lidt omkring mig.</h4>
          <p className="">
            Mit navn er Mathias Helsengren, jeg er 26 år og går pt på UCL, hvor
            jeg studerer til datamatiker. Jeg er generelt en glad og meget
            smilende person, der godt kan lide at møde nye mennesker. Jeg er
            meget udadvendt og ekstrovert. Samtidig er jeg også meget seriøs og
            punktlig når det kommer til at arbejde, da jeg synes det er vigtigt
            ikke kun for en selv, men også ens kollegaer, at man gør sit bedste.
            På mit studie har jeg arbejde med mange forskellige
            projektstyringsmodeler, blandt andet SCRUM. Derudover har jeg også
            arbejdet med React og Android udvikling, som jeg også nævner i mit
            CV. Hvis i vil vide mere, eller se nogle af de forskellige ting jeg
            har arbejdet på, er i velkommen til at kontakte mig.
            {/* <br /> <br />
            Siden jeg har været barn, har jeg altid interesseret mig for IT og
            computer, og er vokset op med en far som har været
            IT-support/IT-administrator. Jeg håber at høre fra jer, og få en
            praktikplads. */}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
