const Learning = () => {
  return (
    <div className="mx-auto mb-6 flex w-full flex-col rounded-lg border-none border-opacity-25 bg-themelight px-5 py-5 text-start text-darkturkish shadow-lg">
      <div className="mb-5">
        <h1 className="mb-10 mt-10 text-center text-4xl font-semibold tracking-[10px]">
          Læringsmål
        </h1>
        <h2 className="text-start text-3xl font-extrabold text-themepink">
          Frontend
        </h2>
      </div>

      {/* <div className="mx-auto h-[50px] min-h-[1em] w-0.5 self-center bg-themegray opacity-10 md:h-[80px]"></div> */}

      <ul className="list-inside list-disc text-xl font-bold">
        <li className="mt-4 text-turkish/70">
          Viden
          <ul className="mt-2 list-inside list-disc space-y-1 pl-6 text-sm font-normal text-darkturkish md:text-lg">
            <li>
              Jeg har basal viden omkring styling af web interfaces med CSS.
            </li>

            <li>
              Viden om hvordan frameworks der kan understøtte CSS, som Tailwind,
              og hvordan det bruges til at optimere CSS.
            </li>

            <li>
              Basal viden inde for web development framesworks like NetxtJS.
            </li>

            <li>Viden omkring brugen af UseStates i React.</li>

            <li>
              Jeg har en grundliggende viden indefor JavaScript med fokus på
              brugen af det, indefor React frameworket.
            </li>
          </ul>
        </li>

        <li className="mt-4 text-turkish/70">
          Færdigheder
          <ul className="mt-2 list-inside list-disc space-y-1 pl-6 text-sm font-normal text-darkturkish md:text-lg">
            <li>
              Anvende CSS frameworket Tailwind til at styling af
              webapplikationer.
            </li>

            <li>Oprette et React project, og sætte det op med Tailwind.</li>

            <li>Styre staten af DOM&apos;et med React.</li>

            <li>Hente data fra en API, og bruge det i applikationen.</li>

            <li>Eksportere React components.</li>

            <li>Kan bruge plugins så som React Routing til at route.</li>

            <li>Implementere UseStates og React Hooks.</li>
          </ul>
        </li>

        <li className="mt-4 text-turkish/70">
          Kompetencer
          <ul className="mt-2 list-inside list-disc space-y-1 pl-6 text-sm font-normal text-darkturkish md:text-lg">
            <li>Argumentere for valg af CSS frameworks.</li>

            <li>
              Argumentere for brugen af Vite til at oprette React, fremfor
              create-react-app.
            </li>

            <li>Argumentere for hvilke fordele der er ved brug af React.</li>

            <li>
              Reflektere over hvordan min nye indsigt i front-end udvikling kan
              anvendes på mit fremtidige arbejde/studie.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Learning;
