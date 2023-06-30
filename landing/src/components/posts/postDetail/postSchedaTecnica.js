export default function PostSchedaTecnica(props) {
  const { title, programma, requisiti, durata } = props;

  return (
    <div className="my-16 container mx-auto max-w-6xl px-4 lg:px-32">
      <div className="my-2 collapse collapse-arrow bg-green-600/5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-extrabold text-gray-700 ">
          Programma del corso di {title}
        </div>
        <div className="collapse-content p-5">
          <ul className="ml-5 pb-3 list-disc">
            {programma.map((progList, i) => (
              <li key={i}>{progList}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-2 collapse collapse-arrow bg-green-600/5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-extrabold text-gray-700 ">
          Requisiti
        </div>
        <div className="collapse-content">{requisiti}</div>
      </div>
      <div className="my-2 collapse collapse-arrow bg-green-600/5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-extrabold text-gray-700 ">
          Orario e durata
        </div>
        <div className="collapse-content">
          Il corso ha una durata di {durata}, con possibilità di ripasso dello
          stesso in modo del tutto gratuito. I corsi vengono svolti durante il
          fine settimana per permettere a chiunque, anche a chi ha già
          un'occupazione, di poter frequentare. L'orario di svolgimento dei
          corsi va dalle 9:30 alle 17:30 (con 1 ora circa di pausa pranzo). È
          possibile, per chi ne fa richiesta, svolgere i corsi in modalità full
          immersion (modalità consigliata solo a chi ha poco tempo a
          disposizione ed ha già dimestichezza con le tecniche di massaggio).
        </div>
      </div>
      <div className="my-2 collapse collapse-arrow bg-green-600/5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl  font-extrabold text-gray-700 ">
          Sedi del corso
        </div>
        <div className="collapse-content">
          <p>
            La Tao - Scuola Nazionale di Massaggio ha sedi dislocate su tutto il
            territorio nazionale nelle maggiori città italiane.
          </p>
          <p>
            Per garantire il massimo servizio all’allievo svolgiamo la
            formazione in tutte le migliori sale congressi di prestigiosi Hotel,
            tutte comodamente raggiungibili poiché ubicate nei pressi dei
            principali svincoli autostradali e dotate di tutti i comfort e
            servizi richiesti per un corretto svolgimento del corso, oltre alla
            presenza di un videoproiettore al fine di svolgere la parte di
            lezione teorica iniziale.
          </p>
          <p className="text-center">
            Alessandria - Ancona - Arco - Bari - Bologna - Brescia - Cagliari -
            Catania - Cesena - Chianciano Terme - Cuneo - Enna - Firenze -
            Foggia - Genova - Lamezia Terme - Lecce - Milano - Montegrotto Terme
            - Napoli - Novara - Palermo - Parma - Perugia - Pescara - Piacenza -
            Pisa - Pordenone - Roma - Torino - Trento - Udine - Verona
          </p>
        </div>
      </div>
      <div className="my-2 collapse collapse-arrow bg-green-600/5">
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
      <div className="my-2 collapse collapse-arrow bg-green-600/5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-extrabold text-gray-700">
          Attestazione rilasciata
        </div>
        <div className="collapse-content">
          Al termine del Corso di {title} verrà rilasciato un attestato di
          specializzazione nominativo valido in tutta Italia di{" "}
          {durata.substring(0, 1) == "1"
            ? "10"
            : durata.substring(0, 1) == "2"
            ? "16"
            : "24"}{" "}
          ore, con possibilità di ripasso gratuito e rilascio attestato di
          perfezionamento per un totale di{" "}
          {durata.substring(0, 1) == "1"
            ? "20"
            : parseInt(durata.substring(0, 1), 10) * 2 * 8}{" "}
          ore, entrambi in riferimento alla Legge 4/2013 (previa valutazione di
          quanto correttamente appreso). Sarà pertanto possibile lavorare
          legalmente, su tutto il territorio nazionale, purchè l’attività non
          rientri nell’ambito sanitario o sconfini in quello fisioterapico,
          estetico o in ambiti stabiliti per legge da altre professioni
          riconosciute.
        </div>
      </div>
    </div>
  );
}
