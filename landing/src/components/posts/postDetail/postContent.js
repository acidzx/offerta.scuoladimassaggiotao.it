import ReactMarkdown from "react-markdown";
import PostHeader from "./postHeader";

export default function PostContent(props) {
  const { post } = props;
  const imgPath = `/assets/images/${post.category}/${post.slug}`;

  return (
    <>
      <PostHeader
        img={`${imgPath}/${post.img}`}
        title={post.title}
        description={post.description}
      />
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Presentazione
            </h2>
            <div className="mb-4 text-justify text-base">
              <ReactMarkdown>{post.longcontent}</ReactMarkdown>
            </div>
            <h3 className="mb-2 text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">
              I Benefici
            </h3>
            <div className="mb-4 text-justify text-base">
              <ReactMarkdown>{post.benefici}</ReactMarkdown>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 lg:px-32">
        <div className="my-2 collapse collapse-arrow bg-green-600/5">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">
            Programma del corso di {post.title}
          </div>
          <div className="collapse-content p-5">
            <ul className="ml-5 pb-3 list-disc">
              {post.programma.map((progList, i) => (
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
          <div className="collapse-content">{post.requisiti}</div>
        </div>
        <div className="my-2 collapse collapse-arrow bg-green-600/5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">
            Orario e durata
          </div>
          <div className="collapse-content">{post.orario}</div>
        </div>
        <div className="my-2 collapse collapse-arrow bg-green-600/5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl tracking-tight font-extrabold text-gray-700 dark:text-white">
            Sedi del corso
          </div>
          <div className="collapse-content">
            <p>
              La Tao - Scuola Nazionale di Massaggio ha sedi dislocate su tutto
              il territorio nazionale nelle maggiori città italiane.
            </p>
            <p>
              Per garantire il massimo servizio all’allievo svolgiamo la
              formazione in tutte le migliori sale congressi di prestigiosi
              Hotel, tutte comodamente raggiungibili poiché ubicate nei pressi
              dei principali svincoli autostradali e dotate di tutti i comfort e
              servizi richiesti per un corretto svolgimento del corso, oltre
              alla presenza di un videoproiettore al fine di svolgere la parte
              di lezione teorica iniziale.
            </p>
            <p className="text-center">
              Alessandria - Ancona - Arco - Bari - Bologna - Brescia - Cagliari
              - Catania - Cesena - Chianciano Terme - Cuneo - Enna - Firenze -
              Foggia - Genova - Lamezia Terme - Lecce - Milano - Montegrotto
              Terme - Napoli - Novara - Palermo - Parma - Perugia - Pescara -
              Piacenza - Pisa - Pordenone - Roma - Torino - Trento - Udine -
              Verona
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
          <div className="collapse-content">{post.attestazione}</div>
        </div>
      </div>
    </>
  );
}
