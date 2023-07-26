import Header from "@components/header";
import AltaFormazione from "@components/altaFormazione";
import MultiCarousel from "@components/multiCarousel";
import Cta from "@components/cta";
import ServiziTao from "@components/serviziTao";
import Testimonials from "@/components/testimonials";
import ServizioClienti from "@components/servizioClienti";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";
import ModalForm from "@components/modalForm";

export async function getStaticProps() {
  const res = await fetch(
    `https://graph.facebook.com/v17.0/scuoladimassaggio/ratings?fields=reviewer%2Ccreated_time%2Creview_text&access_token=${process.env.FB_ACCESS_TOKEN}`,
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
      <div className="container mx-auto text-center py-6">
        Tre motivi per scegliere la nostra Scuola di Massaggio
      </div>
      <div className="flex flex-row items-center flex-wrap justify-around">
        <div>
          Percorsi formativi completi e personalizzati in base alle tue esigenze
        </div>
        <div>Consulenza e assistenza continua pre e post formazione</div>
        <div>Didattica con i migliori docenti nel campo del benessere</div>
      </div>
      <div className="container mx-auto text-center py-6">
        Cosa aspetti? Dai una svolta alla tua vita scegliendo Tao. Contattaci
        per avere maggiori informazioni!
      </div>
      <ModalForm />
    </>
  );
}
