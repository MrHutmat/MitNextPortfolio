"use client";

import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import NavItems from "./NavItems";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";
import MobileNav from "./MobileNav";
//import { useWindowDimension } from "@/Hooks/useWindowDimension";

{
  /* <div className="sticky top-0 bg-themeblack mt-7 z-10">
      <div className="mx-auto flex justify-between items-start md:items-center p-2 max-w-7xl px-3">
      
      <div className="sticky p-5 justify-between top-0 flex bg-themeblack mt-7 z-10 max-w-7xl items-start mx-auto">
      <div className="flex flex-row items-center">
      */
}

const NavBar = () => {
  const [dimension, setDimension] = useState(global.innerWidth);

  const [isOpen, setIsOpen] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const changeNavBar = () => {
      window.scrollY > 0 ? setHasScrolled(true) : setHasScrolled(false);
    };

    window.addEventListener("scroll", changeNavBar);
    return () => {
      window.removeEventListener("scroll", changeNavBar);
    };
  }, [hasScrolled]);

  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      console.log("***** debounced resize"); // See the cool difference in console
      setDimension(global.innerWidth);
    }, 100); // 100ms

    if (dimension > 770) {
      setIsOpen(false);
    }

    window.addEventListener("resize", debouncedResizeHandler);
    return () => {
      global.removeEventListener("resize", debouncedResizeHandler);
    };
  }, [isOpen, dimension]); // Note this empty array. this effect should run only on mount and unmount

  // const changeState = () => {
  //   width >= 768 ? setIsOpen(true) : setHasScrolled(false);
  // }

  // console.log(hasScrolled);
  // console.log(isOpen);
  // console.log(dimension);

  // if (width >= 768) {
  //   return setIsOpen(false);
  // }

  return (
    <div className={`sticky top-0 ${isOpen ? "h-screen z-20" : "z-50"}`}>
      <nav
        className={`z-50 md:items-center px-2 py-5 duration-500 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-95 bg-themeblack ${
          isOpen || hasScrolled
            ? "shadow-[0_16px_32px_-16px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.1)]"
            : ""
        }`}
      >
        <div className="flex mx-auto max-w-7xl items-center justify-between">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className=""
          >
            <div className="md:hidden flex items-center text-turkish">
              <Hamburger
                direction="right"
                toggled={isOpen}
                toggle={setIsOpen}
              />

              <p className="pr-3 pl-1 text-themegray font-bold text-lg">MENU</p>
            </div>

            <NavItems onClick={() => setIsOpen(false)} />
          </motion.div>

          <motion.div
            initial={{
              y: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className=""
          >
            <motion.h1
              whileHover={{
                scale: 1.1,
              }}
              className="text-turkish font-black text-4xl cursor-pointer"
            >
              HELSENGREN
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="hidden md:flex justify-center"
          >
            <Socials />
          </motion.div>
        </div>
      </nav>
      <MobileNav
        onClick={() => setIsOpen(false)}
        isActiv={isOpen ? true : false}
      />
    </div>
  );
};

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default NavBar;
