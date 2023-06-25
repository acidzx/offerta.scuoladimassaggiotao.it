import CtaActionsButtons from "@components/cta/ctaActionsButtons";

export default function Header() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-5">
        <div className="py-6 px-4 mx-auto max-w-screen-xl text-center lg:pb-8 lg:px-12">
          <label
            htmlFor="modalForm"
            href="#"
            className="cursor-pointer inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-700 rounded-full text-white px-4 py-1.5 mr-3">
              Una sorpresa per te
            </span>
            <span className="text-sm font-medium">Richiedi Informazioni</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </label>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-600 md:text-5xl lg:text-6xl dark:text-white">
            investi nel tuo futuro
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Se desideri imparare l&apos;arte del massaggio per diletto o
            professione, smetti di cercare, sei nel posto giusto!
          </p>
        </div>
      </section>
      <section className="mt-1 mb-5">
        <div className="inline-flex items-center justify-center w-full text-center mb-4">
          <span className="absolute px-3 font-2xl text-gray-600 font-extrabold -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 uppercase">
            scopri i nostri corsi e percorsi
          </span>
        </div>
        <div className="flex justify-center my-7">
          <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
      <CtaActionsButtons />
      <hr className="divider"></hr>
    </>
  );
}
