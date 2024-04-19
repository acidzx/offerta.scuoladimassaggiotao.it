import { scrollIntoTheView } from "@/pages/_app";

export default function SubHeaderTitle() {
  return (
    <div className="containerFull">
      <div className="containerCenter">
        <h1 className="titleMain">
          Finalmente libero di scegliere la strada giusta per te
        </h1>
      </div>
      <div className="containerCenter">
        <p className="pCenter">
          È il momento di raggiungere nuovi traguardi e successi lavorativi.{" "}
          <span className="block pt-2">
            È il momento di scegliere per te la strada che hai sempre
            desiderato.
          </span>
          <span className="block pt-2">
            È il momento di iniziare un nuovo cammino nel mondo del benessere
            diventando massaggiatore.
          </span>
          <span className="block pt-2">
            Insieme scegliamo il percorso più giusto per te che sia:
          </span>
        </p>
      </div>
      <div className="containerCenter">
        <div className="pCenter">
          <ul>
            <li>
              <button
                className="border border-green-800 uppercase rounded-xl p-2  btn-outline text-green-700 hover:text-green-900 hover:bg-gray-100 my-2 max-w-sm leading-5"
                onClick={() => scrollIntoTheView("altaFormazioneSection")}
              >
                Diploma alta formazione professionale per massaggiatori (500
                ore)
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline text-green-700 hover:text-green-900 hover:bg-gray-100 my-2 max-w-sm"
                onClick={() => scrollIntoTheView("sectionDiplomi")}
              >
                Diplomi di specializzazione
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline text-green-700 hover:text-green-900 hover:bg-gray-100 my-2 max-w-sm"
                onClick={() => scrollIntoTheView("sectionCorsi")}
              >
                Corsi di massaggio
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
