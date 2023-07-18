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
        customTransition="all .8" /*"transform 1s ease-in-out" "all .8"*/
        transitionDuration={200}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
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
  );
}
