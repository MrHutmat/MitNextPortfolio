"use client";

import { useState, useEffect } from "react";

export function useWindowDimension() {
  //   if (typeof window !== "undefined") {
  //     console.log("You are on the browser,You are good to go + " + window);
  //   } else {
  //     console.log("You are on the server,Cannot execute");
  //   }

  const [dimension, setDimension] = useState([0, 0]);
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      console.log("***** debounced resize"); // See the cool difference in console
      setDimension([window.innerWidth, window.innerHeight]);
    }, 100); // 100ms
    window.addEventListener("resize", debouncedResizeHandler);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []); // Note this empty array. this effect should run only on mount and unmount

  return dimension;
}

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
