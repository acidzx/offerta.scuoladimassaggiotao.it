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

export default function PostContent(props) {
  const { post } = props;
  const imgPath = `/assets/images/${post.category}/${post.slug}`;

  function checkDatePassate(date) {
    return new Date(date.split(" ").reverse().join(" ")) > new Date();
  }

  const sortedDate = post.programmazione
    ? post.programmazione.sort(function (a, b) {
        return (
          new Date(a.split(" ").reverse().join(" ")) -
          new Date(b.split(" ").reverse().join(" "))
        );
      })
    : null;

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const filterDate = sortedDate ? sortedDate.filter(checkDatePassate) : null;

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
        )} attestati</span> ed alla fine del percorso, verrà rilasciato un <span class="font-semibold">diploma di operatore in ${
          post.title
        }${
          post.title === "Massaggio Sportivo Avanzato"
            ? " e un diploma di operatore in Massaggio Sportivo"
            : ""
        }${
          post.title === "Alta Formazione Professionale"
            ? " e 3 diplomi, rispettivamente di operatore in Massaggio Olistico, Terme & Spa e Sportivo"
            : ""
        }</span>.`;

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

  const filteredDate =
    filterDate && filterDate[0]
      ? new Date(filterDate[0].split(" ").reverse().join(" ")).toLocaleString(
          "it-IT",
          dateOptions
        )
      : "data in programmazione";

  const fineCorsoDate =
    filterDate && filterDate[0]
      ? dateManipulation(
          new Date(filterDate[0].split(" ").reverse().join(" ")),
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
      <PostHeaderAlternative incipit={post.incipit} />
      <div>{post.slug == "corso-massaggio-base-svedese" ? "" : ""}</div>
      <hr className="h-px my-4 bg-gray-200 border-0 " />
      <PostPresentation
        longcontent={post.longcontent}
        slug={post.slug}
        category={post.category}
      />
      {post.category === "corso" ? (
        <ProgrammazioneDataCorso
          filteredDate={filteredDate || "in programmazione"}
          fineCorsoDate={fineCorsoDate || "in programmazione"}
        />
      ) : (
        []
      )}

      {post.category === "diploma" ? (
        <CardCorsiDiploma
          title={post.title}
          programma={post.programma}
          corsiArray={props.corsi}
        />
      ) : (
        ""
      )}
      <Cta
        overTitle="Ecco la sorpresa che abbiamo pensato per te"
        text="Richiedi ora il coupon sconto per iscriverti al corso di massaggio base svedese"
      />
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
      <PostVideoPresentation
        videosrc={post.videosrc}
        title="In 2 minuti ti spieghiamo perché scegliere il corso di massaggio
base svedese"
      />
      <Cta
        overTitle="Ecco la sorpresa che abbiamo pensato per te"
        text="Richiedi ora il coupon sconto per iscriverti al corso di massaggio base svedese"
      />
      <div className="container mx-auto text-center px-4">
        <h2 className="text-center mb-4 text-4xl font-extrabold text-gray-600 py-6">
          Ottieni l’attestato di specializzazione
        </h2>
        <div className="container mx-auto max-w-4xl">
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: attestazioneText }}
          />
          <p className="text-justify pt-2">
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
      <Testimonials FBreviews={props.reviews} />

      <div className="max-w-xl mx-auto text-center my-16">
        <h2 className="text-center mb-4 text-4xl font-extrabold text-gray-600">
          Ecco perché scegliere il corso di {post.title}
        </h2>
      </div>
      <PostServiziInclusi title={post.title} />
      <div className="container mx-auto my-16">
        <p className="px-4 mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 text-justify">
          Se desideri entrare nel mondo del benessere e dare una svolta alla tua
          vita professionale, il corso di massaggio base svedese è la scelta più
          giusta per te.
        </p>
        <p className="px-4 mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 text-justify">
          Siamo al tuo fianco in ogni istante scegliendo insieme il miglior
          percorso formativo per le tue esigenze. Ogni passo del tragitto che
          faremo insieme il nostro team di consulenti sarà con te per
          accompagnarti lungo questo fantastico percorso didattico.
        </p>
        <p className="px-4 mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 text-justify">
          Cosa aspetti? Chiedi ora maggiori info per partecipare al corso di
          massaggio base svedese.
        </p>
        <div className="mt-16 flex flex-col my-3 mx-[4rem] lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <label
            htmlFor="modalForm"
            className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Contattaci ora
          </label>
        </div>
      </div>
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
