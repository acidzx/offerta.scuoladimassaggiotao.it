import PostHeader from "./postHeader";
import Cta from "@components/cta";
import PostPresentation from "./postPresentation";
import PostVideoPresentation from "./postVideoPresentation";
import PostSchedaTecnica from "./postSchedaTecnica";
import PostPrice from "./postPrice";
import PostServiziInclusi from "./postServiziInclusi";
import CardCorsiDiploma from "./cardCorsiDiploma";
import { Fragment } from "react";
import ServiziTao from "@components/serviziTao";
import Testimonials from "@/components/testimonials";
import ServizioClienti from "@components/servizioClienti";
import MultiCarousel from "@components/multiCarousel";

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

  const filteredDate =
    filterDate && filterDate[0]
      ? new Date(filterDate[0].split(" ").reverse().join(" ")).toLocaleString(
          "it-IT",
          dateOptions
        )
      : "data in programmazione";

  return (
    <Fragment>
      <PostHeader
        img={`${imgPath}/${post.img}`}
        title={post.title}
        category={post.category}
        filteredDate={filteredDate || "in programmazione"}
      />

      <div>{post.slug == "corso-massaggio-base-svedese" ? "" : ""}</div>
      <hr className="h-px my-4 bg-red-700 bg-gray-200 border-0 " />
      <PostPresentation
        longcontent={post.longcontent}
        benefici={post.benefici}
        slug={post.slug}
        category={post.category}
      />
      {post.category === "diploma" ? (
        <CardCorsiDiploma title={post.title} programma={post.programma} />
      ) : (
        ""
      )}
      <Cta />
      <PostVideoPresentation videosrc={post.videosrc} />
      <Cta />
      <PostSchedaTecnica
        title={post.title}
        programma={post.programma}
        requisiti={post.requisiti}
        durata={post.durata}
        attestazione={post.attestazione}
        category={post.category}
      />

      <PostPrice price={post.price} />
      <PostServiziInclusi title={post.title} />
      <Cta />
      <ServiziTao />
      <Cta />
      {/* <hr className="divider" /> */}
      <Testimonials FBreviews={props.reviews} />
      {/* <hr className="divider" /> */}
      <Cta />
      <div className="container mx-auto p-4 mt-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none text-gray-600 md:text-3xl lg:text-4xl">
          DIPLOMI DI SPECIALIZZAZIONE
        </h2>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl  xl:px-48 ">
          Il Diploma di Alta Formazione Professionale per massaggiatori è il
          percorso formativo più completo che puoi desiderare ed ottenere,
          garantendoti un sicuro inserimento nel mondo del lavoro.
        </p>
      </div>
      <MultiCarousel posts={props.diplomi} />
      <Cta />
      <div className="container mx-auto p-4 mt-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none text-gray-600 md:text-3xl lg:text-4xl ">
          CORSI INDIVIDUALI
        </h2>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Il Diploma di Alta Formazione Professionale per massaggiatori è il
          percorso formativo più completo che puoi desiderare ed ottenere,
          garantendoti un sicuro inserimento nel mondo del lavoro.
        </p>
      </div>
      <MultiCarousel posts={props.corsi} />
      <ServizioClienti />
    </Fragment>
  );
}
