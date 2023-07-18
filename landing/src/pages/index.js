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
      <div className="container mx-auto p-4 mt-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none text-gray-600 md:text-3xl lg:text-4xl">
          DIPLOMI DI SPECIALIZZAZIONE
        </h2>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl  xl:px-48 ">
          Se vuoi imparare l&apos;arte del massaggio e diventare un
          professionista qualificato, i percorsi di diploma di massaggio sono
          quello che fa per te. Iscriviti ora e inizia il tuo percorso verso una
          carriera gratificante e appagante nel mondo del benessere.
        </p>
      </div>
      <MultiCarousel posts={props.diplomi} />
      <Cta />
      <div className="container mx-auto p-4 mt-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none text-gray-600 md:text-3xl lg:text-4xl ">
          CORSI DI MASSAGGIO
        </h2>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Se vuoi approfondire le tue conoscenze e le tue competenze nel campo
          del massaggio, Scuola Tao ha una vasta un&apos;offerta formativa che
          spazia dalle tecniche olistiche a quelle sportive. Contattaci ora e
          scopri il corso più adatto a te.
        </p>
      </div>
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
