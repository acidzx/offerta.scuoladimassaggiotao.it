import Image from "next/image";

export default function ServizioClienti() {
  return (
    <div className="relative bg-white py-8 sm:py-12">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={374}
              height={355}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-100"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10">
              <Image
                className="absolute inset-0 fit-content"
                src="/assets/images/servizio-clienti-tao.jpg"
                alt=""
                width={494}
                height={350}
              />
              <div className="absolute inset-0 mix-blend-multiply" />
              <div className="absolute inset-0" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <p className="relative"></p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
          {/* Content area */}
          <div className="pt-2 sm:pt-4 lg:pt-10">
            <h2 className="text-3xl font-bold text-gray-500 sm:text-4xl">
              Servizio clienti sempre a disposizione
            </h2>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg">
                Il nostro servizio clienti ti aiuterà a raggiungere
                l&apos;obiettivo. Dai un&apos;occhiata, scrivi e inviaci
                un&apos;email o chiamaci.
              </p>
              <p className="text-base font-semibold leading-7">
                <a href="tel:057862772">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  0578.62772
                </a>
              </p>
              <p className="text-base font-semibold leading-7">
                <label htmlFor="modalForm" className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  info@taogroup.it
                </label>
              </p>
              {/*  <p className="text-base font-semibold leading-7">
                <a href="https://wa.me/393917405112">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6 inline mr-2"
                    viewBox="0 0 18 18"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  391.7405112
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
