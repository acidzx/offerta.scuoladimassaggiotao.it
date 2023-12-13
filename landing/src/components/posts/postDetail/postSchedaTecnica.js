import Image from "next/image";

import { scrollIntoTheView } from "@/pages/_app";

export default function PostSchedaTecnica(props) {
  const {
    title,
    programma,
    requisiti,
    durata,
    category,
    slug,
    programmaTitle,
  } = props;

  const attestazioneText =
    category == "corso"
      ? `Al termine del <span class="font-semibold">${category} di ${title}</span> verrà rilasciato un attestato di
          specializzazione nominativo valido in tutta Italia  con possibilità di ripasso gratuito e rilascio attestato di
          perfezionamento, entrambi in riferimento alla Legge 4/2013 (previa valutazione di
          quanto correttamente appreso). `
      : `Con il <span class="font-semibold">${category} di operatore in ${title}</span>, composto da ${durata.substring(
          0,
          2
        )} corsi, verrà rilasciato un attestato di specializzazione nominativo valido in tutta Italia, per ogni singolo corso, per un totale di <span class="font-semibold">${durata.substring(
          0,
          2
        )} attestati</span> ed alla fine del percorso, verrà rilasciato un <span class="font-semibold">diploma di operatore in ${title}${
          title === "Massaggio Sportivo Avanzato"
            ? " e un diploma di operatore in Massaggio Sportivo"
            : ""
        }${
          title === "Alta Formazione Professionale"
            ? " e 3 diplomi, rispettivamente di operatore in Massaggio Olistico, Terme & Spa e Sportivo"
            : ""
        }</span>.`;

  return (
    <div className="my-16 container mx-auto max-w-6xl px-4 lg:px-32">
      <div
        className="my-2 collapse collapse-arrow bg-green-600/5"
        id="programma"
        onClick={() =>
          setTimeout(() => {
            scrollIntoTheView("programma");
          }, "200")
        }
      >
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-extrabold text-gray-700">
          {programmaTitle
            ? programmaTitle
            : `Programma del ${category} di ${title}`}
        </div>
        <div className="collapse-content p-5">
          <ul className="ml-5 pb-3 list-disc">
            {programma.map((progList, i) => (
              <li key={i}>{progList}</li>
            ))}
          </ul>
        </div>
      </div>
      {category === "corso" ? (
        <div
          id="requisiti"
          className="my-2 collapse collapse-arrow bg-green-600/5"
          onClick={() =>
            setTimeout(() => {
              scrollIntoTheView("requisiti");
            }, "200")
          }
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl font-extrabold text-gray-700 ">
            Requisiti
          </div>
          <div className="collapse-content">{requisiti}</div>
        </div>
      ) : (
        []
      )}

      <div
        id="durata"
        className="my-2 collapse collapse-arrow bg-green-600/5"
        onClick={() =>
          setTimeout(() => {
            scrollIntoTheView("durata");
          }, "200")
        }
      >
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-extrabold text-gray-700 ">
          Orario e durata
        </div>
        <div className="collapse-content">
          Il {category} ha una durata di {durata}, con possibilità di ripasso
          {category === "corso" ? " dello stesso " : " dei corsi "}
          in modo del tutto gratuito. Le lezioni vengono svolte durante il fine
          settimana per permettere a chiunque, anche a chi ha già
          un&apos;occupazione, di poter frequentare. L&apos;orario di
          svolgimento dei corsi va dalle 9:30 alle 17:30 (con 1 ora circa di
          pausa pranzo). È possibile, per chi ne fa richiesta, svolgere i corsi
          in modalità full immersion (modalità consigliata solo a chi ha poco
          tempo a disposizione ed ha già dimestichezza con le tecniche di
          massaggio).
        </div>
      </div>
      <div
        id="sedi"
        className="my-2 collapse collapse-arrow bg-green-600/5"
        onClick={() =>
          setTimeout(() => {
            scrollIntoTheView("sedi");
          }, "200")
        }
      >
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl  font-extrabold text-gray-700 ">
          Sedi del corso
        </div>
        <div className="collapse-content">
          <p>
            La <b>Tao - Scuola Nazionale di Massaggio</b> ha sedi dislocate su
            tutto il territorio nazionale, nelle maggiori città italiane.
          </p>
          <p>
            Per garantire il massimo servizio all&apos;allievo, svolgiamo la
            formazione nelle migliori sale congressi di prestigiosi Hotel,
            dotate di tutti i comfort e servizi richiesti per un corretto
            svolgimento del corso, oltre alla presenza di un videoproiettore al
            fine di svolgere la parte di lezione teorica iniziale. Le nostre
            sedi risultano tutte comodamente raggiungibili poiché ubicate nei
            pressi dei principali svincoli autostradali.
          </p>
          <p className="text-center pt-2">
            Pescara - Potenza - Lamezia Terme - Salerno - Napoli - Bologna -
            Parma - Piacenza - Cesena - Pordenone - Udine - Roma - Genova -
            Milano - Brescia - Ancona - Campobasso - Torino - Cuneo - Novara -
            Alessandria - Bari - Lecce - Foggia - Cagliari - Catania - Enna -
            Palermo - Messina - Firenze - Pisa - Chianciano Terme - Arco -
            Trento - Perugia - Aosta - Montegrotto Terme - Padova - Verona -
            Vicenza
          </p>
        </div>
      </div>
      <div
        id="servizi"
        className="my-2 collapse collapse-arrow bg-green-600/5"
        onClick={() =>
          setTimeout(() => {
            scrollIntoTheView("servizi");
          }, "200")
        }
      >
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-extrabold text-gray-700 ">
          Servizi inclusi
        </div>
        <div className="collapse-content">
          <ul className="ml-5 pb-3 list-disc">
            <li>
              Garanzia Tao - Soddisfatto o Rimborsato; Materiale didattico
              gratuito;
            </li>
            <li>Assistenza post-formazione gratuita;</li>
            <li>Rateizzazione dei percorsi;</li>
            <li>Tutor personale;</li>
            <li>Formazione sempre garantita;</li>
            <li>Collocamento nel mondo del lavoro;</li>
            <li>
              Stages post-formazione e partecipazione ad eventi importanti;
            </li>
            <li>Accreditamento dei corsi svolti anche con altre realtà.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
