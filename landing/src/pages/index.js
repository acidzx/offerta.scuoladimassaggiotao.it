import AltaFormazione from "@components/altaFormazione";
import MultiCarousel from "@components/multiCarousel";
import Cta from "@components/cta";
import ServiziTao from "@components/serviziTao";
import Testimonials from "@/components/testimonials";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";
import ModalForm from "@components/modalForm";
import HeaderTitle from "@/components/commons/headerTitle";
import SubHeaderTitle from "@/components/pageIndex/subHeaderTitle";

export async function getStaticProps() {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJgZIpTWlbKRMRQH75EJwkVKI&language=it&fields=review&key=${process.env.G_ACCESS_TOKEN}`,
    { cache: "force-cache" }
  );

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
  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Offerta Corsi Tao - Scuola Nazionale di Massaggio</title>
        <meta
          name="description"
          content="Scopri l'offerta formativa dei corsi e percorsi per diventare Massaggiatore di Tao Scuola Nazionale di Massaggio. Attestazioni riconosciute per lavorare liberamente in tutta Italia."
        />
      </Head>
      <HeaderTitle />
      <SubHeaderTitle />
      <AltaFormazione />
      <Cta
        text="Scopri l’offerta che ti abbiamo riservato per iniziare una formazione eccellente"
        title="per il diploma di alta formazione"
      />
      <MultiCarousel posts={props.diplomi} />
      <Cta
        text="Scopri l’offerta che ti abbiamo riservato per iniziare una formazione eccellente"
        title="per accedere ai nostri diplomi di massaggio"
      />
      <MultiCarousel posts={props.corsi} />
      <Cta
        text="Scopri l’offerta che ti abbiamo riservato per accedere ai nostri corsi di massaggio"
        title="per accedere ai nostri corsi di massaggio"
      />
      <Testimonials Greviews={props.reviews.result.reviews} />
      <ServiziTao />

      <div className="containerFull">
        <div className="containerCenter">
          <h2 className="titleMain">
            Tre motivi per scegliere la nostra Scuola di Massaggio
          </h2>
        </div>
        <div className="containerCenter flex-col lg:flex-row my-6 gap-x-10">
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
              Percorsi formativi completi e personalizzati in base alle tue
              esigenze
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
              Consulenza e assistenza continua pre e post formazione
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
              Didattica con i migliori docenti nel campo del benessere
            </h3>
          </article>
        </div>
      </div>

      <Cta
        overTitle="Insieme scegliamo la strada più giusta per te"
        text="Cosa aspetti? Dai una svolta alla tua vita scegliendo Tao. Contattaci per avere maggiori informazioni!"
        btnText="Contattaci"
      />
      <ModalForm />
    </>
  );
}
