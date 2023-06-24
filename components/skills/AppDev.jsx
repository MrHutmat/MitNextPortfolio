import Image from "next/image";
import { FcAndroidOs } from "react-icons/fc";
import { BsFiletypeXml } from "react-icons/bs";

const AppDev = () => {
  return (
    <>
      <div className="border-spacing-30 mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-lg border-none border-opacity-25 bg-themelight px-5 py-5 text-start text-darkturkish shadow-lg">
        <h1 className="mb-4 text-center text-[42px] font-black md:mb-8 md:text-7xl">
          App udvikling:
        </h1>
        <div className="mx-auto h-[50px] min-h-[1em] w-0.5 self-center bg-themegray opacity-10 md:h-[80px]"></div>

        <div className="mt-0 grid w-full grid-cols-1 items-center gap-x-8 space-y-5 text-xl md:mt-6 md:grid-cols-2  ">
          <div className="group flex w-full items-center space-x-8 duration-300 hover:scale-105">
            <Image height={48} width={48} alt="" src="images\kotlin-2.svg" />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Kotlin<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <FcAndroidOs size={48} />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Android SDK<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image
              height={48}
              width={48}
              alt=""
              src="images\java-seeklogo.com.svg"
            />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Java<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image
              height={48}
              width={48}
              alt=""
              src="images\android-studio-icon.svg"
            />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Android Studio<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image
              height={48}
              width={48}
              alt=""
              src="/images/jetpackcompose.png"
            />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Jetpack Compose<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image
              height={48}
              width={48}
              alt=""
              src="images\material-design.svg"
            />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Material Design 3<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <BsFiletypeXml size={48} color="green" />
            <div className="flex grow flex-col">
              <p className="font-bold">
                XML<a className="pl-0.5 text-themepink">.</a>
              </p>
              <span className="h-0.5 w-full bg-themegray opacity-50 group-hover:bg-turkish"></span>
            </div>
          </div>

          <div className="group flex w-full flex-row items-center space-x-8 duration-300 hover:scale-105">
            <Image
              height={48}
              width={48}
              alt=""
              src="images\gradle-elephant-icon-gradient-primary.svg"
            />
            <div className="flex grow flex-col">
              <p className="font-bold">
                Gradle<a className="pl-0.5 text-themepink">.</a>
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
        </div>
      </div>
    </>
  );
};

export default AppDev;
