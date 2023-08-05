import PostHeaderAlternative from "./postHeaderAlternative";
import Cta from "@components/cta";
import PostPresentation from "./postPresentation";
import PostVideoPresentation from "./postVideoPresentation";
import PostSchedaTecnica from "./postSchedaTecnica";
import PostPrice from "./postPrice";
import PostServiziInclusi from "./postServiziInclusi";
import CardCorsiDiploma from "./cardCorsiDiploma";
import ServiziTao from "@components/serviziTao";
import Testimonials from "@/components/testimonials";
import ServizioClienti from "@components/servizioClienti";
import MultiCarousel from "@components/multiCarousel";
import ProgrammazioneDataCorso from "./programmazioneDataCorso";
import Image from "next/image";
import { Interweave } from "interweave";
import { polyfill } from "interweave-ssr";

polyfill();

export default function PostContent(props) {
  const { post } = props;
  const imgPath = `/assets/images/${post.category}/${post.slug}`;

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
        )} corsi, verrà rilasciato un attestato di specializzazione nominativo valido in tutta Italia, per ogni singolo corso, per un totale di <span class="font-semibold">${post.durata.substring(
          0,
          2
        )} attestati</span>${
          post.title !== "Alta Formazione Professionale"
            ? ` ed alla fine del percorso, verrà rilasciato un <span class="font-semibold">diploma di operatore in ${
                post.title
              }${
                post.title === "Massaggio Sportivo Avanzato"
                  ? " e un diploma di operatore in Massaggio Sportivo</span>."
                  : ""
              }</span>.`
            : ""
        } ${
          post.title === "Alta Formazione Professionale"
            ? "<span class='py-2 block'>Alla fine del percorso, verrà rilasciato un diploma di operatore in Alta Formazione Professionale e 3 diplomi rispettivamente di operatore in:</span><ol class='list-decimal ml-6'><li>Massaggio Olistico</li><li>Terme & Spa</li><li>Sportivo</li></ol>"
            : ""
        }`;

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
      {/*    <PostHeader
        img={`${imgPath}/${post.img}`}
        title={post.title}
        category={post.category}
        filteredDate={filteredDate || "in programmazione"}
        fineCorsoDate={fineCorsoDate || "in programmazione"}
      /> */}

      <PostHeaderAlternative
        incipit={post.incipit}
        title={post.title}
        category={post.category}
        subIncipit={post.subIncipit}
      />

      <hr className="h-px my-4 bg-gray-200 border-0 " />
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
        />
      ) : (
        []
      )}

      {post.category === "diploma" ? (
        <CardCorsiDiploma
          title={post.title}
          programma={post.programma}
          corsiArray={props.corsi}
          postSchedaDiplomiContent={post.postSchedaDiplomiContent}
        />
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
      />
      <hr className="h-px my-4 bg-gray-200 border-0 " />
      <PostVideoPresentation
        videosrc={post.videosrc}
        title={post.videoPresentationTitle}
      />
      <Cta overTitle={post.cta2OverTitle} text={post.cta2OverText} />
      <div className="container mx-auto text-center px-4">
        <h2 className="text-center pt-16 pb-6 text-3xl font-bold text-gray-500 sm:text-4xl">
          Ottieni{" "}
          {post.category === "corso" ? "l&apos;attestato " : "il diploma "} di
          specializzazione
        </h2>
        <div className="container mx-auto max-w-4xl text-justify">
          <Interweave content={attestazioneText} />

          <p className="text-justify py-2">
            <span className="font-semibold">
              Le qualifiche rilasciate da Tao - Scuola Nazionale di Massaggio,
              alla fine di ogni corso o percorso, sono emesse in base alla Legge
              4/2013, sarà pertanto possibile lavorare legalmente su tutto il
              territorio nazionale, purché l&apos;attività non rientri
              nell&apos;ambito sanitario o sconfini in quello fisioterapico,
              estetico o in ambiti stabiliti per legge da altre professioni
              riconosciute.
            </span>
          </p>
          <div className="flex justify-center mt-6">
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
      <hr className="h-px my-4 bg-gray-200 border-0 " />
      <Testimonials
        Greviews={props.reviews.result.reviews}
        reviewTextTitle={post.reviewTextTitle}
        reviewTextContent={post.reviewTextContent}
      />
      <hr className="h-px my-4 bg-gray-200 border-0 " />
      {post.slug !== "diploma-massaggiatore-alta-formazione-professionale" ? (
        <>
          <div className="max-w-xl mx-auto text-center my-16">
            <h2 className="text-center pt-16 pb-6 text-3xl font-bold text-gray-500 sm:text-4xl">
              Ecco perché scegliere il corso di {post.title}
            </h2>
          </div>

          <PostServiziInclusi
            title={post.title}
            serviziInclusiText={post.serviziInclusiText}
          />
        </>
      ) : (
        ""
      )}
      {post.slug === "diploma-massaggiatore-alta-formazione-professionale" ? (
        <>
          {" "}
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
            <h3>Inizia ora a formarti per dare una svolta alla tua carriera</h3>
          </div>
          <div
            className="container mx-auto my-16 px-4"
            dangerouslySetInnerHTML={{ __html: post.serviziInclusiText }}
          />
        </>
      ) : (
        ""
      )}
      <hr className="divider" />

      {/*   <Cta />

      <Cta /> */}
      {/*       <ServiziTao />
      <Cta /> */}
      {/* <hr className="divider" /> */}

      {/* <hr className="divider" /> */}
      {/*       <Cta /> */}
      {/*  <MultiCarousel posts={props.diplomi} />
      <Cta />
      <MultiCarousel posts={props.corsi} /> */}
      {/*  <ServizioClienti /> */}
    </>
  );
}
