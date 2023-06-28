export default function PostSchedaTecnica(props) {
  const { title, programma, requisiti, orario, attestazione } = props;

  return (
    <div className="my-16 container mx-auto max-w-6xl px-4 lg:px-32">
      <div className="my-2 collapse collapse-arrow bg-green-600/5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">
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
        <div className="collapse-title text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">
          Requisiti
        </div>
        <div className="collapse-content">{requisiti}</div>
      </div>
      <div className="my-2 collapse collapse-arrow bg-green-600/5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">
          Orario e durata
        </div>
        <div className="collapse-content">{orario}</div>
      </div>
      <div className="my-2 collapse collapse-arrow bg-green-600/5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">
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
        <div className="collapse-title text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">
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
        <div className="collapse-title text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">
          Attestazione rilasciata
        </div>
        <div className="collapse-content">{attestazione}</div>
      </div>
    </div>
  );
}
