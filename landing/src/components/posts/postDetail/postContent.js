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
    <Fragment>
      <PostHeader
        img={`${imgPath}/${post.img}`}
        title={post.title}
        category={post.category}
        filteredDate={filteredDate || "in programmazione"}
        fineCorsoDate={fineCorsoDate || "in programmazione"}
      />

      <div>{post.slug == "corso-massaggio-base-svedese" ? "" : ""}</div>
      <hr className="h-px my-4 bg-gray-200 border-0 " />
      <PostPresentation
        longcontent={post.longcontent}
        benefici={post.benefici}
        slug={post.slug}
        category={post.category}
      />
      {post.category === "diploma" ? (
        <CardCorsiDiploma
          title={post.title}
          programma={post.programma}
          corsiArray={props.corsi}
        />
      ) : (
        ""
      )}
      <Cta />
      <PostPrice price={post.price} />
      <PostServiziInclusi title={post.title} />
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

      <Cta />

      <ServiziTao />
      <Cta />
      {/* <hr className="divider" /> */}
      <Testimonials FBreviews={props.reviews} />
      {/* <hr className="divider" /> */}
      <Cta />

      <MultiCarousel posts={props.diplomi} />
      <Cta />

      <MultiCarousel posts={props.corsi} />
      <ServizioClienti />
    </Fragment>
  );
}
