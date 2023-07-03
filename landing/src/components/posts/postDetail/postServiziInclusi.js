export default function PostServiziInclusi(props) {
  const { title } = props;

  return (
    /*         versione Desktop */
    <div className="bg-white ">
      <div className="pt-8 pb-4 px-4 mx-auto max-w-screen-xl sm:pt-8 sm:pb-16 lg:px-6">
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
            {title === "Massaggio Base Svedese" ? (
              <>
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
                  <div className="stat-value text-gray-600">
                    Specializzazione
                  </div>
                </div>
              </>
            ) : (
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
            )}

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

        {/* versione mobile */}
        <div className="block xl:hidden">
          <div className="container mx-auto max-w-xl text-start">
            <div className="stats shadow mx-auto mt-8">
              {title === "Massaggio Base Svedese" ? (
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
              ) : (
                ""
              )}
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
                <div className="stat-value text-gray-600">Specializzazione</div>
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
    </div>
  );
}
