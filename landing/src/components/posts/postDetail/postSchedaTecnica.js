import Image from "next/image";

import { scrollIntoTheView } from "@/pages/_app";

export default function PostSchedaTecnica(props) {
  const { title, programma, requisiti, durata, category, slug } = props;

  const attestazioneText =
    category == "corso"
      ? `Al termine del <span class="font-semibold">${category} di ${title}</span> verrà rilasciato un attestato di
          specializzazione nominativo valido in tutta Italia di ${" "}
          ${
            durata.substring(0, 1) == "1"
              ? "10"
              : durata.substring(0, 1) == "2"
              ? "16"
              : "24"
          }
          ore, con possibilità di ripasso gratuito e rilascio attestato di
          perfezionamento per un totale di${" "}
          ${
            durata.substring(0, 1) == "1"
              ? "20"
              : parseInt(durata.substring(0, 1), 10) * 2 * 8
          }${" "}
          ore, entrambi in riferimento alla Legge 4/2013 (previa valutazione di
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
      <div className="my-2 collapse collapse-arrow bg-green-600/5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div
          id="programma"
          className="collapse-title text-2xl font-extrabold text-gray-700"
          onClick={() => scrollIntoTheView("programma")}
        >
          Programma del {category} di {title}
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
          onClick={() => scrollIntoTheView("requisiti")}
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
        onClick={() => scrollIntoTheView("durata")}
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
        onClick={() => scrollIntoTheView("sedi")}
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
        onClick={() => scrollIntoTheView("servizi")}
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
      <div
        id="attestazione"
        className="my-2 collapse collapse-arrow bg-green-600/5"
        onClick={() => scrollIntoTheView("attestazione")}
      >
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-extrabold text-gray-700">
          Attestazione rilasciata
        </div>
        <div className="collapse-content">
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: attestazioneText }}
          />

          <p className="text-justify pt-2">
            <span className="font-semibold">
              Le qualifiche rilasciate da Tao - Scuola Nazionale di Massaggio,
              alla fine di ogni corso o percorso, sono emesse in base alla Legge
              4/2013
            </span>
            , sarà pertanto possibile lavorare legalmente su tutto il territorio
            nazionale, purchè l&apos;attività non rientri nell&apos;ambito
            sanitario o sconfini in quello fisioterapico, estetico o in ambiti
            stabiliti per legge da altre professioni riconosciute.
          </p>
          <div className="flex justify-center mt-6">
            <Image
              src={`/assets/images/attestati/attestato-${slug}.jpg`}
              width={550}
              height={356}
              alt={`Attestato Corso ${title}`}
              className="w-full max-w-sm h-auto border rounded-lg px-2 py-4 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
