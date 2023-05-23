import CtaActionsButtons from "./ctaActionsButtons";

export default function Cta() {
  return (
    <>
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-8">
          <h1 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-500 md:text-3xl lg:text-4xl dark:text-white">
            SCARICA IL TUO COUPON SCONTO
          </h1>
          <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Scopri l&apos;offerta a te dedicata
          </p>
          <CtaActionsButtons />
        </div>
      </section>
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
}
