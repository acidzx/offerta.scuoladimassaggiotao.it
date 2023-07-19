import Image from "next/image";
import Link from "next/link";
import altaFormazioneImg from "@public/assets/images/diploma-alta-formazione-professionale-massaggiatore.jpg";

export default function DiplomaAltaFormazione() {
  return (
    <div id="altaformazione" className="my-8">
      <div className="container mx-auto p-4">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl ">
          DIPLOMA ALTA FORMAZIONE PROFESSIONALE PER MASSAGGIATORI 500 ORE
        </h2>
        <p className="text-center text-lg font-normal pb-6 text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Il Diploma di Alta Formazione Professionale per massaggiatori è il
          percorso formativo più completo che puoi desiderare ed ottenere,
          garantendoti un sicuro inserimento nel mondo del lavoro.
        </p>
      </div>

      <div className="container p-5 mx-auto relative">
        <Link
          href="/diploma/diploma-massaggiatore-alta-formazione-professionale"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 "
        >
          <Image
            priority
            src={altaFormazioneImg}
            alt="Diploma di Alta Formazione Professionale"
            className="lg:shadow-lg 2xl:shadow-none object-cover w-full rounded-t-sm lg:rounded-r-lg 2xl:rounded-none h-108 lg:h-auto lg:w-1/2 border border-gray-200"
          />

          <div class="text-xs md:text-base absolute top-1 right-16 w-32 text-center">
            <div className="indicator">
              <span className="indicator-item p-4 badge badge-primary bg-white border border-green-700 rounded-lg text-green-700">
                <b>Iscrizioni sempre aperte</b>
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 lg:p-8 leading-normal lg:w-1/2">
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 ">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 lg:hidden xl:block">
                      <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-medium text-gray-900 truncate ">
                        Formazione
                      </p>
                      <p className="text-base text-gray-500  text-justify">
                        15 corsi di specializzazione, 4 diplomi nazionali, 500
                        ore formative certificate, corsi in partenza ogni fine
                        settimana e formazione sempre garantita.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 lg:hidden xl:block">
                      <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-medium text-gray-900 truncate ">
                        Garanzie
                      </p>
                      <p className="text-base text-gray-500  text-justify">
                        Tao - Scuola Nazionale di Massaggio è ormai da anni
                        sinonimo di qualità, pertanto è accreditata per merito e
                        qualità dallo Csen e dalla World Massage Federation. Le
                        numerose collaborazioni con le migliori realtà del
                        settore la rendono una scuola unica nel suo genere.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 lg:hidden xl:block">
                      <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z" />
                        <path
                          fillRule="evenodd"
                          d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-medium text-gray-900 truncate ">
                        Investimento Sicuro e flessibile
                      </p>
                      <p className="text-base text-gray-500  text-justify">
                        Importo rateizzabile fino ad un massimo di 14 comode
                        rate senza garanzie personali (busta paga o 730) oppure
                        fino a 36 soluzioni con finanziaria esterna nostra
                        partner. Potrai fin da subito iniziare a lavorare e
                        guadagnare.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
