import frontendResources from "@/utils/frontendResources";
import Link from "next/link";

const Resources = () => {
  const frontendRes = frontendResources;

  return (
    <>
      {frontendRes.map((item) => {
        return (
          <div
            key={item.linkId}
            className="mb-6 flex w-full max-w-4xl flex-col items-start rounded-lg border-none border-opacity-25 bg-themelight p-4 text-start text-lg text-themegray"
          >
            <p className="mb-4">{item.text}</p>
            <Link
              target="_blank"
              className="navButton w-[250px] px-4 py-2 text-center text-lg font-bold text-turkish hover:bg-left-bottom hover:text-themeblack"
              href={item.page}
            >
              Link til materiallet
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Resources;

{
  /* <div className="flex flex-col justify-between space-y-5 text-center text-lg">
        <div className="flex flex-row">
          <Link
            className="navButton px-4 py-2 text-xl font-bold text-turkish hover:bg-left-bottom hover:text-themeblack"
            target="_blank"
            href={"https://github.com/nvm-sh/nvm"}
          >
            Click her, for at se materiallet
          </Link>
          <p>
            Den Node Version Manager jeg har sat op, der forklare hvordan det
            virker, og hvordan man sætter det op.
          </p>
        </div>

        <div className="flex flex-row">
          <Link
            target="_blank"
            href={"https://www.youtube.com/watch?v=X3qyxo_UTR4&nbsp;"}
          >
            Click her, for at se materiallet
          </Link>
          <p>
            Tager en igennem at oprette et user login i React, der kan blive
            autentificeret. Han har også andre videoer der giver mere til
            processen.
          </p>
        </div>

        <div className="flex flex-row">
          <Link
            target="_blank"
            href={"https://www.youtube.com/watch?v=UgEaJBz3bjY"}
          >
            Click her, for at se materiallet
          </Link>

          <p>
            En virkelig god guide, der meget kort, men også meget detaljeret går
            igennem hvordan destructuring virker, og kan bruges i JS. Han laver
            generelt nogle gode videoer inde for webdev, han kan dog være svær
            og forstå fordi det går så stærkt. En anden positiv ting er, han
            bruger meget humor til at holde ens fokus, og gøre tingene mere
            spændende.
          </p>
        </div>

        <div className="flex flex-row">
          <Link target="_blank" href={"https://react.dev/"}>
            Click her, for at se materiallet
          </Link>

          <p>Reacts officielle side.</p>
        </div>

        <div className="flex flex-row">
          <Link target="_blank" href={"https://daisyui.com/"}>
            Click her, for at se materiallet
          </Link>
          <p>
            Link til Daisyui, som er et plugin til CSS frameworket Tailwind. Her
            er der installations guides og docs til de forskellige themes og
            components.
          </p>
        </div>

        <div className="flex flex-row">
          <Link
            target="_blank"
            href={
              "https://www.codecademy.com/learn/paths/build-web-apps-with-react"
            }
          >
            Click her, for at se materiallet
          </Link>

          <p>
            CodeAcademys kursus, eller “Path.” Den kommer meget i dybden med
            rigtig mange ting, og giver et bedre overblik og overskud til at
            komme i gang, dog tager den dig igennem meget basale ting til og
            starte på, men giver også god mulighed for at genopfriske ens
            JavaScript og bygge videre på det.
          </p>
        </div>

        <div className="flex flex-row">
          <Link
            target="_blank"
            href={"https://www.youtube.com/watch?v=wm5gMKuwSYk"}
          >
            Click her, for at se materiallet
          </Link>

          <p>
            Rigtig god guide i hvordan Next JS virker med deres nye
            funktionalitet. Meget god viden omkring Routing og server side
            rendering.
          </p>
        </div>

        <div className="flex flex-row">
          <Link
            target="_blank"
            href={"https://www.youtube.com/watch?v=x62aBvnRCKw"}
          >
            Click her, for at se materiallet
          </Link>

          <p>
            God video omrking at få authentication og køre med firebase, der
            også viser hvordan man bruger React-routes. Han er til tider lidt
            forvirret, men, ender altid bage og forklarer.
          </p>
        </div>

        <div className="flex flex-row">
          <Link
            target="_blank"
            href={"https://www.youtube.com/watch?v=urgi2iz9P6U&t=101s"}
          >
            Click her, for at se materiallet
          </Link>
          <p>
            Rigtig god video, selvom jeg ikke brugte typescript, var den god til
            at give mig en bedre forståelse for også bruge fede animations
            plugin og bruge NextJS bedre.
          </p>
        </div>
      </div> */
}
