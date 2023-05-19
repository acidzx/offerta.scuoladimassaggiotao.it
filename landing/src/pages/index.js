import Header from "@components/header";
import AltaFormazione from "@components/altaFormazione";
import MultiCarousel from "@components/multiCarousel";
import { getAllPosts } from "../../lib/posts-util";

export function getStaticProps() {
  const allCorsi = getAllPosts("corso");
  const allDiplomi = getAllPosts("diploma");

  return {
    props: {
      corsi: allCorsi,
      diplomi: allDiplomi,
    },
    // revalidate: 1800,
  };
}

export default function Home(props) {
  return (
    <>
      <Header />
      <AltaFormazione />
      <MultiCarousel posts={props.diplomi} />
      <MultiCarousel posts={props.corsi} />
    </>
  );
}
