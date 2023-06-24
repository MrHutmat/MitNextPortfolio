import Image from "next/image";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  // SiVite,
  // SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
// import { DiCss3 } from "react-icons/di";
// import { AiFillHtml5 } from "react-icons/ai";
// import { DiNodejs } from "react-icons/di";
// import { BsGit } from "react-icons/bs"; mx-auto flex w-full items-center justify-center pb-10

const Frontend = () => {
  return (
    <>
      <div className="border-spacing-30 mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-lg border-none border-opacity-25 bg-themelight px-5 py-5 text-start text-darkturkish shadow-lg">
        <h1 className="mb-4 text-center text-[42px] font-black md:mb-8 md:text-7xl">
          Web udvikling:
        </h1>
        <div className="mx-auto h-[50px] min-h-[1em] w-0.5 self-center bg-themegray opacity-10 md:h-[80px]"></div>

        <div className="mt-0 grid w-full grid-cols-1 items-center gap-x-8 space-y-5 text-xl md:mt-6 md:grid-cols-2  ">
          <div className="group flex w-full items-center space-x-8 duration-300 hover:scale-105">
            <FaReact size={48} className="" color="#66fcf1" />
            <div className="flex grow flex-col">
              <p className="font-bold">
                React<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <SiJavascript color="yellow" className="" size={48} />
            <div className="flex grow flex-col">
              <p className="font-bold">
                JavaScript<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image height={48} width={48} alt="" src="images\HTML5_Badge.svg" />
            <div className="flex grow flex-col">
              <p className="font-bold">
                HTML<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <SiNextdotjs color="white" className="" size={48} />
            <div className="flex grow flex-col">
              <p className="font-bold">
                NextJS<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image height={48} width={48} alt="" src="images\vite.svg" />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Vite<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image
              height={48}
              width={48}
              alt=""
              src="images\Tailwind_CSS_Logo.svg"
            />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Tailwind<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image height={48} width={48} alt="" src="images\CSS3_logo.svg" />
            <div className="flex grow flex-col">
              <p className="font-bold">
                CSS<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image
              height={48}
              width={48}
              alt=""
              src="images\Node.js_logo_2015.svg"
              className=""
            />
            <div className="flex grow flex-col">
              <p className="font-bold">
                NodeJS<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image height={48} width={48} alt="" src="images\Git_icon.svg" />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Git<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image height={48} width={48} alt="" src="images\sanity.svg" />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Sanity.io<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image height={48} width={48} alt="" src="images\blazor.svg" />
            <div className="flex grow flex-col">
              <p className="font-bold">
                ASP.Net Blazor<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image
              height={48}
              width={48}
              alt=""
              src="images\Microsoft_.NET_logo.svg"
            />
            <div className="flex grow flex-col">
              <p className="font-bold">
                .NET<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
