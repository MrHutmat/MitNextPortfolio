"use client";
import React from "react";
import Link from "next/link";

export function SemesterCard() {
  return (
    <div className="border-spacing-30 flex max-w-[1200px] flex-col rounded-2xl border-none border-themegray border-opacity-25 bg-themelight px-10 py-24 shadow-xl duration-300 hover:scale-105 xl:py-0">
      <div className="max-w-[700px] items-center gap-0 space-y-5 xl:flex xl:max-w-none xl:space-y-0">
        <div className="flex-1 text-start">
          <h3 className="mb-2 text-4xl font-semibold">4. Semester.</h3>
          <p className="text-lg">
            Her er mine 2 emner, <a className="text-turkish">frontend</a> og{" "}
            <a className="text-turkish">app-udvikling</a>, som jeg har arbejdet
            med under 4. Semester på UCL. Det er her inde du vil finde lærings
            planer, og lærings mål for de to emner.
          </p>
        </div>

        {/* <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch"></div>
          py-24 xl:py-40
          */}
        <div className="mx-10 hidden h-[600px] min-h-[1em] w-0.5 self-stretch bg-themegray opacity-10 xl:inline-block"></div>

        <div className="col-span-4 flex flex-1 flex-row space-x-2 xl:flex-col xl:space-x-0 xl:space-y-5">
          <Link
            key={"frontend"}
            href={"/frontend"}
            className="navButton ml-0 basis-1/2 cursor-pointer px-4 py-2 text-center font-bold text-turkish hover:bg-left-bottom hover:text-themeblack"
          >
            <span>Frontend</span>
          </Link>
          <Link
            key={"appdev"}
            href={"/appdev"}
            className="navButton ml-0 basis-1/2 cursor-pointer px-4 py-2 text-center font-bold text-turkish hover:bg-left-bottom hover:text-themeblack"
          >
            <span>App dev</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
