import PostHeaderAlternative from "./postHeaderAlternative";
import Cta from "@components/cta";
import PostPresentation from "./postPresentation";
import PostVideoPresentation from "./postVideoPresentation";
import PostSchedaTecnica from "./postSchedaTecnica";
/* import PostPrice from "./postPrice"; */
import PostServiziInclusi from "./postServiziInclusi";
import CardCorsiDiploma from "./cardCorsiDiploma";
import Testimonials from "@/components/testimonials";
import ProgrammazioneDataCorso from "./programmazioneDataCorso";
import Image from "next/image";
import { Interweave } from "interweave";
import { polyfill } from "interweave-ssr";
import PostFeature from "./postFeature";

polyfill();

export default function PostContent(props) {
  const { post } = props;
  /*   const imgPath = `/assets/images/${post.category}/${post.slug}`; */

  function checkDatePassate(date) {
    return new Date(date.split(" ").reverse().join("/")) > new Date();
  }

  const sortedDate = post.programmazione
    ? post.programmazione.sort(function (a, b) {
        return (
          new Date(a.split(" ").reverse().join("/")) -
          new Date(b.split(" ").reverse().join("/"))
        );
      })
    : [];

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const filterDate = sortedDate ? sortedDate.filter(checkDatePassate) : [];

  const attestazioneText =
    post.category == "corso"
      ? `Al termine del <span class="font-semibold">${post.category} di ${post.title}</span> verrà rilasciato un attestato di
          specializzazione nominativo valido in tutta Italia  con possibilità di ripasso gratuito e rilascio attestato di
          perfezionamento, entrambi in riferimento alla Legge 4/2013 (previa valutazione di
          quanto correttamente appreso). `
      : `Con il <span class="font-semibold">${post.category} di operatore in ${
          post.title
        }</span>, composto da ${post.durata.substring(
          0,
          2
        )} corsi, verrà rilasciato un attestato di specializzazione nominativo valido in tutta Italia, per ogni singolo corso. Dunque avrai un totale di <span class="font-semibold">${post.durata.substring(
          0,
          2
        )} attestati</span>${
          post.title !== "Alta Formazione Professionale"
            ? ` ed alla fine del percorso, verrà rilasciato un <span class="font-semibold">diploma di operatore in ${
                post.title
              }${
                post.title === "Massaggio Sportivo Avanzato"
                  ? " e un diploma di operatore in Massaggio Sportivo</span>"
                  : ""
              }</span>`
            : "."
        } ${
          post.title === "Alta Formazione Professionale"
            ? "<span class='py-2 block'>Alla fine del percorso, verrà rilasciato un diploma di operatore in Alta Formazione Professionale e 3 diplomi rispettivamente di operatore in:</span><ol class='list-decimal ml-6'><li>Massaggio Olistico</li><li>Terme & Spa</li><li>Sportivo</li></ol>"
            : ""
        }.`;

  function dateManipulation(date, days, hrs, mins, operator) {
    date = new Date(date);
    if (operator == "-") {
      var durationInMs = (24 * days * 60 + hrs * 60 + mins) * 60000;
      var newDate = new Date(date.getTime() - durationInMs);
    } else {
      var durationInMs = (24 * days * 60 + hrs * 60 + mins) * 60000;
      var newDate = new Date(date.getTime() + durationInMs);
    }
    return newDate;
  }

  const filteredDate = filterDate[0]
    ? new Date(filterDate[0].split(" ").reverse().join("/")).toLocaleString(
        "it-IT",
        dateOptions
      )
    : "data in programmazione";

  const fineCorsoDate =
    filterDate && filterDate[0]
      ? dateManipulation(
          new Date(filterDate[0].split(" ").reverse().join("/")),
          post.durata[0] - 1,
          0,
          0,
          "+"
        ).toLocaleString("it-IT", dateOptions)
      : "data in programmazione";

  return (
    <>
      <PostHeaderAlternative
        incipit={post.incipit}
        title={post.title}
        category={post.category}
        subIncipit={post.subIncipit}
      />

      <PostPresentation
        longcontent={post.longcontent}
        longcontent2={post.longcontent2}
        slug={post.slug}
        category={post.category}
        longcontentTitle={post.longcontentTitle}
        longcontentCollapseTitle={post.longcontentCollapseTitle}
        longcontentCollapseContent={post.longcontentCollapseContent}
        longcontentCollapseTitle2={post.longcontentCollapseTitle2}
        longcontentCollapseContent2={post.longcontentCollapseContent2}
        features1={post.features1}
        features2={post.features2}
        features3={post.features3}
      />
      {post.category === "corso" ? (
        <ProgrammazioneDataCorso
          filteredDate={filteredDate}
          fineCorsoDate={fineCorsoDate}
          primaDataTitle={post.primaDataTitle}
        />
      ) : (
        []
      )}

      {post.category === "diploma" ? (
        <>
          <CardCorsiDiploma
            title={post.title}
            programma={post.programma}
            corsiArray={props.corsi}
            postSchedaDiplomiContent={post.postSchedaDiplomiContent}
            corsiInclusiTitle={post.corsiInclusiTitle}
            corsiInclusiText={post.corsiInclusiText}
          />

          <PostFeature
            className=""
            features1={post.features1}
            features2={post.features2}
            features3={post.features3}
          />
        </>
      ) : (
        ""
      )}

      <Cta overTitle={post.cta1OverTitle} text={post.cta1OverText} />
      {/*  <PostPrice price={post.price} /> */}
      <PostSchedaTecnica
        title={post.title}
        programma={post.programma}
        requisiti={post.requisiti}
        durata={post.durata}
        attestazione={post.attestazione}
        category={post.category}
        slug={post.slug}
        programmaTitle={post.programmaTitle}
      />

      <PostVideoPresentation
        videosrc={post.videosrc}
        title={post.videoPresentationTitle}
        videoPresentationText={post.videoPresentationText}
      />
      <Cta overTitle={post.cta2OverTitle} text={post.cta2OverText} />
      <div className="containerFull">
        <div className="containerCenter">
          <h2 className="titleMain">
            {post.attestatoTitle
              ? post.attestatoTitle
              : post.category === "corso"
              ? "Ottieni l'attestato di specializzazione"
              : "Ottieni il diploma di specializzazione"}
          </h2>
        </div>
        <div className="container mx-auto max-w-4xl text-justify">
          <Interweave content={attestazioneText} />

          <p className="pLeft">
            <span className="block font-semibold pt-2">
              Le qualifiche rilasciate da Tao - Scuola Nazionale di Massaggio,
              alla fine di ogni corso o percorso, sono emesse in base alla Legge
              4/2013, sarà pertanto possibile lavorare legalmente su tutto il
              territorio nazionale, purché l&apos;attività non rientri
              nell&apos;ambito sanitario o sconfini in quello fisioterapico,
              estetico o in ambiti stabiliti per legge da altre professioni
              riconosciute.
            </span>
          </p>
          <div className="flex justify-center my-10">
            <Image
              src={`/assets/images/attestati/attestato-${post.slug}.jpg`}
              width={550}
              height={356}
              alt={`Attestato Corso ${post.title}`}
              className="w-full max-w-sm h-auto border rounded-lg px-2 py-4 bg-white"
            />
          </div>
        </div>
      </div>

      <Testimonials
        Greviews={props.reviews.result.reviews}
        reviewTextTitle={post.reviewTextTitle}
        reviewTextContent={post.reviewTextContent}
      />

      {post.slug !== "diploma-massaggiatore-alta-formazione-professionale" ? (
        <>
          <div className="containerFull">
            <div className="containerCenter">
              <h2 className="titleMain">
                {post.serviziInclusiTitle
                  ? post.serviziInclusiTitle
                  : `Ecco perché scegliere il ${post.category} di ${post.title}`}
              </h2>
            </div>

            <PostServiziInclusi
              title={post.title}
              serviziInclusiText={post.serviziInclusiText}
            />
          </div>
        </>
      ) : (
        ""
      )}
      {post.slug === "diploma-massaggiatore-alta-formazione-professionale" ? (
        <>
          <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-gray-500 sm:text-4xl text-center pb-2">
              Tre motivi per scegliere il Diploma di Alta Formazione
            </h2>
          </div>
          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 pt-2 lg:pt-8 lg:max-w-5xl lg:grid-cols-3 px-4 mb-16">
            <article className="flex max-w-xl flex-col items-center justify-between text-center mx-auto">
              <div className="text-green-700 hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-600 group-hover:text-gray-600">
                Ottieni 15 Attestati di Specializzazione e il diploma di Alta
                Formazione
              </h3>
            </article>
            <article className="flex max-w-xl flex-col items-center  justify-start text-center mx-auto">
              <div className="text-green-700 hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-600 group-hover:text-gray-600">
                Ottieni 3 Diplomi di Operatore in Massaggio Olistico, in
                Massaggio Sportivo e Terme e Spa
              </h3>
            </article>
            <article className="flex max-w-xl flex-col items-center justify-start text-center mx-auto">
              <div className="text-green-700 hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-600 group-hover:text-gray-600">
                Ottiene un coupon sconto fino a 250&euro; da spendere sul sito
                e-commerce professionemassaggio.it
              </h3>
            </article>
          </div>
          <div>
            <h3 className="text-center pt-8 pb-2 text-3xl font-bold text-gray-500 sm:text-4xl">
              Inizia ora a formarti per dare una svolta alla tua carriera
            </h3>
          </div>
          <div
            className="container mx-auto my-8 px-4"
            dangerouslySetInnerHTML={{ __html: post.serviziInclusiText }}
          />
          <div className="mt-8 flex flex-col my-3 mx-[4rem] lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <label
              htmlFor="modalForm"
              className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
            >
              Contattaci ora
            </label>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
