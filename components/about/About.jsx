"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative z-10 mx-auto mb-10 flex h-screen max-w-7xl flex-col items-center justify-center overflow-x-hidden px-5 text-center md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-darkturkish">
        About
      </h3>

      <div className="flex flex-col items-center space-y-5 pt-[140px] md:flex-row">
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
          className="h-56 w-56 flex-shrink-0 rounded-full object-cover shadow-2xl md:h-[400px] md:w-[256px] md:rounded-2xl"
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
          className="space-y-4 px-0 md:px-10"
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
