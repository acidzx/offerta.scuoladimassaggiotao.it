import Header from "@components/header";
import AltaFormazione from "@components/altaFormazione";
import MultiCarousel from "@components/multiCarousel";
import ModalForm from "@components/modalForm";
import Cta from "@components/cta";
import ServiziTao from "@components/serviziTao";
import Testimonials from "@/components/testimonials";
import ServizioClienti from "@components/servizioClienti";
import { getAllPosts } from "../../lib/posts-util";

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
      <Header />
      <AltaFormazione />
      <Cta />
      <div className="container mx-auto p-4 mt-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl">
          DIPLOMI DI SPECIALIZZAZIONE
        </h2>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Il Diploma di Alta Formazione Professionale per massaggiatori è il
          percorso formativo più completo che puoi desiderare ed ottenere,
          garantendoti un sicuro inserimento nel mondo del lavoro.
        </p>
      </div>
      <MultiCarousel posts={props.diplomi} />
      <Cta />
      <div className="container mx-auto p-4 mt-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl ">
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
      <ModalForm />
      <ServiziTao />
      <hr className="h-px my-5 bg-gray-200 border-0 " />
      <Testimonials />
      <hr className="h-px my-5 bg-gray-200 border-0 " />
      <ServizioClienti />
    </>
  );
}
