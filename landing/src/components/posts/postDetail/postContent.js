import PostHeader from "./postHeader";
import Cta from "@components/cta";
import ModalForm from "@components/modalForm";
import PostPresentation from "./postPresentation";
import PostVideoPresentation from "./postVideoPresentation";
import PostSchedaTecnica from "./postSchedaTecnica";

export default function PostContent(props) {
  const { post } = props;
  const imgPath = `/assets/images/${post.category}/${post.slug}`;

  return (
    <>
      <PostHeader
        img={`${imgPath}/${post.img}`}
        title={post.title}
        description={post.description}
        category={post.category}
      />
      <hr className="hidden lg:block h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <PostPresentation
        longcontent={post.longcontent}
        benefici={post.benefici}
      />
      <PostVideoPresentation videosrc={post.videosrc} />
      <PostSchedaTecnica
        title={post.title}
        programma={post.programma}
        requisiti={post.requisiti}
        orario={post.orario}
        attestazione={post.attestazione}
      />

      <section className="bg-white dark:bg-gray-900 border-t-2">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-600 dark:text-white mb-4">
              Ora in offerta a soli
            </h2>
            <p className="my-6 font-extrabold text-gray-500 text-6xl dark:text-gray-400 md:text-6xl">
              {post.price}&euro;
            </p>
          </div>
          <div className="hidden xl:block">
            <div className="stats shadow mx-auto mt-8">
              <div className="stat">
                <div className="stat-figure text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Garanzia soddisfatto o</div>
                <div className="stat-value text-gray-600">Rimborsato</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Video corso</div>
                <div className="stat-value text-gray-600">Omaggio</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Attestato di</div>
                <div className="stat-value text-gray-600">Specializzazione</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Ripasso</div>
                <div className="stat-value text-gray-600">Gratuito</div>
              </div>
            </div>
          </div>
          <div className="block xl:hidden">
            <div className="container mx-auto max-w-xl text-start">
              <div className="stats shadow mx-auto mt-8">
                <div className="stat py-1">
                  <div className="stat-figure text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Video corso professionale</div>
                  <div className="stat-value text-gray-600">Omaggio</div>
                </div>
              </div>
            </div>
            <div className="container mx-auto max-w-xl text-end">
              <div className="stats shadow mx-auto mt-2">
                <div className="stat py-1">
                  <div className="stat-figure text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Garanzia soddisfatto o</div>
                  <div className="stat-value text-gray-600">Rimborsato</div>
                </div>
              </div>
            </div>
            <div className="container mx-auto max-w-xl text-start">
              <div className="stats shadow mx-auto mt-2">
                <div className="stat py-1">
                  <div className="stat-figure text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Attestato di</div>
                  <div className="stat-value text-gray-600">
                    Specializzazione
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto max-w-xl text-end">
              <div className="stats shadow mx-auto mt-2">
                <div className="stat py-1">
                  <div className="stat-figure text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Ripasso</div>
                  <div className="stat-value text-gray-600">Gratuito</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4">
        <Cta />
      </div>

      <ModalForm />
    </>
  );
}
