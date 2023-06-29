export default function PostPrice(props) {
  const { price } = props;
  return (
    <section className="bg-white dark:bg-gray-900 border-t-2">
      <div className="pt-16 pb-4 px-4 mx-auto max-w-screen-xl sm:pt-16 sm:pb-4 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-600 dark:text-white mb-4">
            Ora in offerta a soli
          </h2>
          <p className="my-6 font-extrabold text-gray-500 text-6xl dark:text-gray-400 md:text-6xl">
            {price}&euro;
          </p>
        </div>
      </div>
    </section>
  );
}
