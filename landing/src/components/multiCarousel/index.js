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
    <div className="containerFull">
      {posts[0].category == "diploma" ? (
        <>
          <div className="containerCenter" id="sectionDiplomi">
            <h2 className="titleMain">Diplomi di Specializzazione</h2>
          </div>
          <div className="containerCenter">
            <p className="pCenter">
              Se vuoi imparare l&apos;arte del massaggio e diventare un
              professionista qualificato, i percorsi di diploma di massaggio
              sono quelli più giusti per te.
              <span className="block pt-2">
                Iscriviti ora e inizia il tuo percorso nel mondo del benessere.
              </span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="containerCenter" id="sectionCorsi">
            <h2 className="titleMain">Corsi di Massaggio</h2>
          </div>
          <div className="containerCenter">
            <p className="pCenter">
              Se vuoi approfondire le tue conoscenze e le tue competenze nel
              campo del massaggio, Tao - Scuola Nazionale di Massaggio ha una
              vasta un&apos;offerta formativa che spazia dalle tecniche
              olistiche a quelle sportive.
              <span className="block pt-2">
                Per te una consulenza gratuita per scoprire quale sia il corso
                più giusto: contattaci ora.
              </span>
            </p>
          </div>
        </>
      )}
      <div className="container mx-auto pt-8">
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
    </div>
  );
}
