import Image from "next/image";
import { useState } from "react";
import YoutubeTestimonial from "./youtubeTestimonial";
import { scrollIntoTheView } from "@/pages/_app";
import logoGoogle from "@public/assets/svg/google-logo.svg";
import logoFacebook from "@public/assets/svg/facebook-logo.svg";
import { Interweave } from "interweave";
import { useMemo } from "react";
import { polyfill } from "interweave-ssr";
import Carousel from "nuka-carousel";

polyfill();

export default function Testimonials(props) {
  const { Greviews, reviewTextContent, reviewTextTitle } = props;
  const [selectedReview, setSelectedReview] = useState(null);

  const sortedAndFilteredReviews = useMemo(() => {
    if (!Greviews) return [];
    return [...Greviews]
      .sort((a, b) => (b?.comment?.length || 0) - (a?.comment?.length || 0))
      .filter((review) => review?.comment?.length > 60);
  }, [Greviews]);

  const closeModal = () => setSelectedReview(null);

  return (
    <>
      <div className="containerFull">
        <div className="containerCenter">
          <h2 className="titleMain pb-4">
            {reviewTextTitle || "Ecco le storie di successo dei nostri alunni"}
          </h2>
        </div>
        <div className="containerCenter gap-x-8">
          <Image width={50} src={logoGoogle} alt="Logo Google" />
          <Image width={50} src={logoFacebook} alt="Logo Facebook" />
        </div>
        <span className="pCenter">
          <Interweave
            content={
              reviewTextContent ||
              "L'unica scuola con più di 1.400 recensioni positive su Google e Facebook"
            }
          />
        </span>

        <div className="overflow-hidden bg-white mt-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid justify-center items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <Carousel
                autoplayInterval={3000}
                wrapAround={true}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button onClick={previousSlide}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button onClick={nextSlide}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                )}
              >
                {sortedAndFilteredReviews.map((review, index) => (
                  <div
                    id={`slide${index + 1}`}
                    key={index}
                    className="carousel-item relative w-full"
                  >
                    <div
                      className="relative isolate overflow-hidden bg-white p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setSelectedReview(review)}
                    >
                      <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <ul className="flex items-center justify-center">
                          <li>
                            {Array.from(Array(5)).map((Array, index) => (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="yellow"
                                viewBox="0 0 30 30"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 inline"
                                key={index}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            ))}
                          </li>
                        </ul>
                        <figure className="mt-10">
                          <blockquote className="text-center text-md font-semibold leading-8 text-gray-900  sm:leading-9">
                            <p>
                              &quot;{" "}
                              {review?.comment?.split(
                                "(Translated by Google)"
                              )[0].length > 280
                                ? review?.comment
                                    ?.split("(Translated by Google)")[0]
                                    .substring(0, 280) + "..."
                                : review?.comment?.split(
                                    "(Translated by Google)"
                                  )[0]}{" "}
                              &quot;
                            </p>
                          </blockquote>
                          <figcaption className="mt-10">
                            <Image
                              className="mx-auto h-10 w-10 rounded-full"
                              src={
                                review?.reviewer?.profilePhotoUrl ||
                                "/assets/images/testimonials/photo-testimonial.webp"
                              }
                              width={40}
                              height={40}
                              alt="Testimonial Img"
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                              <svg
                                viewBox="0 0 2 2"
                                width={3}
                                height={3}
                                aria-hidden="true"
                                className="fill-gray-900"
                              >
                                <circle cx={1} cy={1} r={1} />
                              </svg>
                              <div className="font-semibold text-gray-900">
                                {review?.reviewer?.displayName || "nome"}
                              </div>
                              <svg
                                viewBox="0 0 2 2"
                                width={3}
                                height={3}
                                aria-hidden="true"
                                className="fill-gray-900"
                              >
                                <circle cx={1} cy={1} r={1} />
                              </svg>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
              <YoutubeTestimonial />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedReview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mt-4">
              <ul className="flex items-center justify-center mb-4">
                <li>
                  {Array.from(Array(5)).map((Array, index) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="yellow"
                      viewBox="0 0 30 30"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline"
                      key={index}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  ))}
                </li>
              </ul>

              <div className="flex items-center justify-center mb-6">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={
                    selectedReview?.reviewer?.profilePhotoUrl ||
                    "/assets/images/testimonials/photo-testimonial.webp"
                  }
                  width={48}
                  height={48}
                  alt="Testimonial Img"
                />
                <div className="ml-4">
                  <div className="font-semibold text-gray-900 text-lg">
                    {selectedReview?.reviewer?.displayName || "nome"}
                  </div>
                </div>
              </div>

              <blockquote className="text-gray-700 leading-relaxed text-base">
                <p className="italic">
                  &quot;
                  {selectedReview?.comment?.split("(Translated by Google)")[0]}
                  &quot;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
