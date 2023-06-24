"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import React from "react";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Alert from "../Alert";

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => console.log(formData);

  return (
    <div className="relative z-10 mx-auto mb-0 flex h-screen max-w-7xl flex-col items-center justify-center overflow-x-hidden px-5 text-center md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-darkturkish">
        Contact
      </h3>

      <div className="mx-auto flex w-fit flex-col justify-between space-y-8 pt-[140px] lg:space-y-12">
        <motion.h4
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
            times: [0, 0.2, 0.8, 1],
            ease: "easeOut",
          }}
          whileInView={{
            opacity: [0, 0.1, 0.8, 1],
          }}
          className="text-center text-4xl font-bold"
        >
          Her kan du hurtigt komme i kontakt med mig, hvis du vil vide mere!
        </motion.h4>

        <div className="flex flex-col lg:flex-row-reverse">
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
            className="mx-auto mb-10 flex flex-col items-start justify-between px-2 sm:flex-row lg:flex-col lg:justify-center lg:space-y-10"
          >
            <div className="flex items-center space-x-2 hover:animate-pulse">
              <DevicePhoneMobileIcon className="h-7 w-7 text-themepink" />
              <p className="text-lg font-semibold lg:text-2xl">+45 23432371</p>
            </div>

            <div className="flex items-center space-x-2 hover:animate-pulse">
              <EnvelopeIcon className="h-7 w-7 text-themepink" />
              <p className="text-lg font-semibold lg:text-2xl">
                mathias@helsengren.com
              </p>
            </div>

            {/* <div className="flex items-center justify-center space-x-5">
              <MapPinIcon className="text-themepink h-7 w-7" />
              <p className="text-2xl font-semibold">4219 Timber Oak Drive</p>
            </div> */}
          </motion.div>

          <motion.form
            initial={{
              opacity: 0,
              x: -300,
            }}
            transition={{
              duration: 0.5,

              //ease: "easeIn",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            noValidate
            className="mx-auto flex w-full max-w-[400px] flex-col space-y-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Vær sød og indsætte et navn først",
                  },
                })}
                placeholder="Navn"
                className="contactInfo"
                type="text"
              />

              <input
                {...register("email", {
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Ikke godkendt email format",
                  },

                  required: {
                    value: true,
                    message: "Vær sød og indsætte en email adresse først",
                  },
                })}
                placeholder="Email"
                className="contactInfo"
                type="email"
              />
            </>
            <input
              {...register("subject", {
                required: {
                  value: true,
                  message: "Vær sød og indsætte et emne først",
                },
              })}
              placeholder="Emne"
              className="contactInfo flex-auto"
              type="text"
            />
            <textarea
              {...register("textMsg", {
                required: {
                  value: true,
                  message: "Vær sød og indsætte en besked først",
                },
              })}
              placeholder="Besked..."
              className="contactInfo flex-auto"
            />
            <button
              type="submit"
              className="inline-flex flex-auto justify-center rounded bg-themepink py-5 text-xl font-bold text-themeblack/90 hover:bg-themepink/80"
            >
              Send
            </button>
            {errors.email && (
              <Alert keyId={"emailKey"} setAlert={errors.email?.message} />
            )}
            {errors.name && (
              <Alert keyId={"nameKey"} setAlert={errors.name?.message} />
            )}
            {errors.subject && (
              <Alert keyId={"subjectKey"} setAlert={errors.subject?.message} />
            )}
            {errors.textMsg && (
              <Alert keyId={"textMsgKey"} setAlert={errors.textMsg?.message} />
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

//<EnvelopeIcon />
//<MapPinIcon />
