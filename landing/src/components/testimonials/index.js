import Image from "next/image";

import YoutubeTestimonial from "./youtubeTestimonial";

export default function Testimonials() {
  return (
    <>
      <h2 className="text-center pt-16 pb-8 text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
        Cosa dicono di noi...
      </h2>

      <div className="overflow-hidden bg-white py-6 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid justify-center items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-8 lg:px-8">
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.green.100),white)] opacity-20" />
                  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
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
                      <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                          “Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nemo expedita voluptas culpa sapiente alias
                          molestiae. Numquam corrupti in laborum sed rerum et
                          corporis.”
                        </p>
                      </blockquote>
                      <figcaption className="mt-10">
                        <Image
                          className="mx-auto h-10 w-10 rounded-full"
                          src="/assets/images/photo-testimonial.webp"
                          width={40}
                          height={40}
                          alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                          <div className="font-semibold text-gray-900">
                            Judith Black
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
                          <div className="text-gray-600">CEO of Workcation</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </section>
              </div>
            </div>
            <YoutubeTestimonial />
          </div>
        </div>
      </div>
    </>
  );
}
