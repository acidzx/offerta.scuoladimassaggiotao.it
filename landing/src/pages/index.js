import Header from "@components/header";
import AltaFormazione from "@components/altaFormazione";
import MultiCarousel from "@components/multiCarousel";
import ModalForm from "@components/modalForm";
import Cta from "@components/cta";
import ServiziTao from "@components/serviziTao";
import Testimonials from "@/components/testimonials";
import ServizioClienti from "@components/servizioClienti";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";
import NavBar from "@components/layout/navBar";
import Footer from "@components/layout/footer";

export async function getStaticProps() {
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
      <Cta />
      <ServiziTao />
      <hr className="divider" />
      <Testimonials />
      <hr className="divider" />
      <ServizioClienti />
      <ModalForm />
      <Footer />
    </>
  );
}
