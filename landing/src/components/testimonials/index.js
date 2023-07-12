import Image from "next/image";
import YoutubeTestimonial from "./youtubeTestimonial";
import { scrollIntoTheView } from "@/pages/_app";

const reviews = [
  {
    body:
      "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
    author: "CrazyInvestor",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.",
    author: "CluelessButRich",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.",
    author: "LivingDaDream",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
    author: "JordanBelfort1962",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!",
    author: "MrBurns",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!",
    author: "LazyRich99",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
    author: "SarahLuvzCash",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body: "Yeah, you read that right. Want your own island too? Get Pocket.",
    author: "ScroogeMcduck",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?",
    author: "BruceWayne",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
    author: "RichieRich",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!",
    author: "TheCountOfMonteChristo",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!",
    author: "ClarkKent",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
    author: "GeorgeCostanza",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
  {
    body:
      "Unless you want to have the best life ever! I am literally writing this from a yacht.",
    author: "JeffBezos",
    rating: 5,
    imgSrc: "/assets/images/testimonials/photo-testimonial.webp",
  },
];

export default function Testimonials() {
  return (
    <>
      <h2 className="text-center pt-16 pb-8 text-3xl font-bold text-gray-500 sm:text-4xl">
        Cosa dicono di noi...
      </h2>

      <div className="overflow-hidden bg-white py-6 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid justify-center items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="carousel w-full">
              {reviews.map((review, index) => (
                <div
                  id={`slide${index + 1}`}
                  key={index}
                  className="carousel-item relative w-full"
                >
                  <div className="lg:pt-4">
                    <div className="">
                      <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-8 lg:px-8">
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
                              <p>“{review.body}”</p>
                            </blockquote>
                            <figcaption className="mt-10">
                              <Image
                                className="mx-auto h-10 w-10 rounded-full"
                                src={review.imgSrc}
                                width={40}
                                height={40}
                                alt=""
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
                                  {review.author}
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
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <button
                      className="btn btn-sm btn-circle"
                      onClick={() =>
                        scrollIntoTheView(
                          `slide${
                            index == 0
                              ? reviews.length
                              : reviews.length - (reviews.length - index)
                          }`
                        )
                      }
                    >
                      ❮
                    </button>

                    <button
                      className="btn btn-sm btn-circle text-black"
                      onClick={() =>
                        scrollIntoTheView(
                          `slide${index + 1 == reviews.length ? 1 : index + 2}`
                        )
                      }
                    >
                      ❯
                    </button>
                    {/*         <a
                      href={`#slide${
                        index == 0
                          ? reviews.length
                          : reviews.length - (reviews.length - index)
                      }`}
                      className="btn btn-sm btn-circle"
                    >
                      ❮
                    </a> */}
                    {/* <a
                      href={`#slide${
                        index + 1 == reviews.length ? 1 : index + 2
                      }`}
                      className="btn btn-sm btn-circle"
                    >
                      ❯
                    </a> */}
                  </div>
                </div>
              ))}
            </div>
            <YoutubeTestimonial />
          </div>
        </div>
      </div>
    </>
  );
}
