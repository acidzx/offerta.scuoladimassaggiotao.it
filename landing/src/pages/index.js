import Header from "@components/header";
import AltaFormazione from "@components/altaFormazione";
import MultiCarousel from "@components/multiCarousel";
import Cta from "@components/cta";
import ServiziTao from "@components/serviziTao";
import Testimonials from "@/components/testimonials";
import ServizioClienti from "@components/servizioClienti";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch(
    `https://graph.facebook.com/v17.0/scuoladimassaggio/ratings?fields=reviewer%2Ccreated_time%2Creview_text&access_token=${process.env.FB_ACCESS_TOKEN}`,
    { cache: "force-cache" }
  );
  /* 
  curl -i -X GET \
 "https://graph.facebook.com/v17.0/scuoladimassaggio/ratings?fields=reviewer%2Ccreated_time%2Creview_text&access_token=EAACeqpKifLcBABhwZAnbBASwS3ZAFDDNrSrnRDSreKUoTo9aS38m893nAoqZBrg8i0zkVumkNLhNeGwa1KVialkD2CofUaZCwNMHk7PH6CX8O2XdIsWb36hALJNKLUl3OUxjt1zI4UPvYpR8EFCDZBFgwWUuldTyahDe7XgcG8rcX5C3ZA9cJKRfNkp68H7zdCHV9OZCM0gDQZDZD"
 */
  const reviews = await res.json();

  const allCorsi = getAllPosts("corso");
  const allDiplomi = getAllPosts("diploma");

  return {
    props: {
      corsi: allCorsi,
      diplomi: allDiplomi,
      reviews,
    },
    // revalidate: 1800,
  };
}

export default function Home(props) {
  /*  {
    console.log(props.reviews);
  } */
  return (
    <>
      <Head>
        <title>Offerta Corsi Tao - Scuola Nazionale di Massaggio</title>
        <meta
          name="description"
          content="Scopri l'offerta formativa dei corsi e percorsi per diventare Massaggiatore di Tao Scuola Nazionale di Massaggio. Attestazioni riconosciute per lavorare liberamente in tutta Italia."
        />
      </Head>
      <Header />
      <hr className="divider" />
      <AltaFormazione />
      <Cta />

      <MultiCarousel posts={props.diplomi} />
      <Cta />

      <MultiCarousel posts={props.corsi} />
      <Cta />
      <ServiziTao />
      <Cta />
      <Testimonials FBreviews={props.reviews} />
      <Cta />
      <ServizioClienti />
    </>
  );
}
