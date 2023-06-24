import { SemesterCard } from "../projects/SemesterCard";
import AppDev from "./AppDev";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <div className="relative z-10 mx-auto mb-10 flex max-w-7xl flex-col items-center overflow-x-hidden p-5 text-center md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-darkturkish">
        Tech Stack
      </h3>

      <div className="mx-auto flex w-full flex-col gap-x-12 pb-10 pt-[140px] xl:w-fit xl:flex-row xl:pt-[240px]">
        <Frontend />
        <AppDev />
      </div>
      <div>
        <SemesterCard />
      </div>
    </div>
  );
};

export default Skills;
