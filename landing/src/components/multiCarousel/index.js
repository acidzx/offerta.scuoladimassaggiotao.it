import Carousel from "react-multi-carousel";
import CardCarousel from "./cardCarousel";
import "react-multi-carousel/lib/styles.css";

export default function MultiCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1536 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1535, min: 1280 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1279, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  const { posts } = props;
  posts.sort((a, b) => a.order - b.order);

  return (
    <>
      {posts[0].category == "diploma" ? (
        <div className="container mx-auto p-4 mt-6">
          <h2 className="text-center mb-4 text-2xl font-extrabold leading-none text-gray-600 md:text-3xl lg:text-4xl">
            DIPLOMI DI SPECIALIZZAZIONE
          </h2>
          <p className="text-center mb-6 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl  xl:px-48 ">
            Se vuoi imparare l&apos;arte del massaggio e diventare un
            professionista qualificato, i percorsi di diploma di massaggio sono
            quello che fa per te. Iscriviti ora e inizia il tuo percorso verso
            una carriera gratificante e appagante nel mondo del benessere.
          </p>
        </div>
      ) : (
        <div className="container mx-auto p-4 mt-6">
          <h2 className="text-center mb-4 text-2xl font-extrabold leading-none text-gray-600 md:text-3xl lg:text-4xl ">
            CORSI DI MASSAGGIO
          </h2>
          <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
            Se vuoi approfondire le tue conoscenze e le tue competenze nel campo
            del massaggio, Tao - Scuola Nazionale di Massaggio ha una vasta
            un&apos;offerta formativa che spazia dalle tecniche olistiche a
            quelle sportive. Contattaci ora e scopri il corso più adatto a te.
          </p>
        </div>
      )}
      <div className="container mx-auto mb-8">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform all .8s" /*"transform 1s ease-in-out" "all .8"*/
          transitionDuration={200}
          containerclassName="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
          // customLeftArrow={<CustomLeftArrow />}
          // customRightArrow={<CustomRightArrow />}
        >
          {posts.map((post) =>
            post.slug !==
            "diploma-massaggiatore-alta-formazione-professionale" ? (
              <CardCarousel key={post.order} post={post} />
            ) : (
              []
            )
          )}
        </Carousel>
      </div>
    </>
  );
}
