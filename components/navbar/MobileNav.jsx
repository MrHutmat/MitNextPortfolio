import navigationLinks from "@/utils/navigationLinks";
import Link from "next/link";
import Socials from "./Socials";

const MobileNav = ({ isActiv, onClick }) => {
  const navLinks = navigationLinks;

  return (
    <>
      {isActiv && (
        <div className="md:hidden isolate grow bg-themeblack">
          <div className="w-full pb-8 z-50 block">
            <nav
              className={`w-full grow pr-0 pt-4 block justify-self-center pb-3 mt-8 md:items-center md:block md:pb-0 md:mt-0 text-turkish`}
            >
              <div className="md:flex md:space-x-0 md:space-y-0 space-y-2 px-3 md:px-1">
                {navLinks.map((item) => {
                  return (
                    <div
                      key={item.label}
                      className="navButton min-w-[91px] w-[150px] md:w-auto hover:bg-left-bottom hover:text-themeblack"
                    >
                      <Link
                        key={item.linkId}
                        href={item.page}
                        scroll={false}
                        className="font-bold px-3 py-2 text-center block ml-0 cursor-pointer"
                        onClick={onClick}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="md:hidden flex justify-start">
                <Socials />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;

{
  /* <button className="mt-1 flex items-center" onClick={toggle}>
<svg width="23" height="23" viewBox="0 0 23 23">
  <Path
    variants={{
      closed: { d: "M 2 2.5 L 20 2.5" },
      open: { d: "M 3 16.5 L 17 2.5" },
    }}
  />
  <Path
    d="M 2 9.423 L 20 9.423"
    variants={{
      closed: { opacity: 1 },
      open: { opacity: 0 },
    }}
    transition={{ duration: 0.1 }}
  />
  <Path
    variants={{
      closed: { d: "M 2 16.346 L 20 16.346" },
      open: { d: "M 3 2.5 L 17 16.346" },
    }}
  />
</svg>
</button> */
}
