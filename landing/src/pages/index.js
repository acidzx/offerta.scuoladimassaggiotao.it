import Header from "@components/header";
import AltaFormazione from "@components/altaFormazione";
import MultiCarousel from "@components/multiCarousel";
import ModalForm from "@components/modalForm";
import Cta from "@components/cta";
import { getAllPosts } from "../../lib/posts-util";

import Image from "next/image";

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
      <Cta />

      <div className="container mx-auto p-4 mt-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl dark:text-white">
          DIPLOMI DI SPECIALIZZAZIONE
        </h2>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Il Diploma di Alta Formazione Professionale per massaggiatori è il
          percorso formativo più completo che puoi desiderare ed ottenere,
          garantendoti un sicuro inserimento nel mondo del lavoro.
        </p>
      </div>
      <MultiCarousel posts={props.diplomi} />
      <Cta />

      <div className="container mx-auto p-4 mt-6">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl dark:text-white">
          CORSI INDIVIDUALI
        </h2>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Il Diploma di Alta Formazione Professionale per massaggiatori è il
          percorso formativo più completo che puoi desiderare ed ottenere,
          garantendoti un sicuro inserimento nel mondo del lavoro.
        </p>
      </div>
      <MultiCarousel posts={props.corsi} />
      <Cta />
      <ModalForm />
      <div className="container mx-auto columns-3 text-center">
        <p>
          Formazione completa Diventa un vero professionista del massaggio.
          Scegli il percorso più adatto alle tue esigenze. 100% soddisfatto o
          rimborsato Se non sei soddisfatto, ti rimborsiamo il corso svolto.
          Impari dai migliori Solo i docenti numero 1 in italia. Qualità /
          prezzo Rapporto qualità prezzo senza eguali.
        </p>

        <Image
          src="/assets/images/mondo-servizi-tao.jpg"
          width="300"
          height="500"
          className="mx-auto"
        />
        <p>
          Servizio clienti Un servizio clienti a tua disposizione 6 giorni su 7
          dalle 9:30 alle 19:30. Materiale didattico Il Manuale didattico ti
          consentirà di ripassare sia la parte teorica che pratica, dove e
          quando vuoi tu. Ripasso gratuito dei corsi Con noi, il ripasso del
          corso frequentato è gratuito. Formazione sempre garantita Con noi, la
          formazione è sempre garantita.
        </p>
      </div>
    </>
  );
}
