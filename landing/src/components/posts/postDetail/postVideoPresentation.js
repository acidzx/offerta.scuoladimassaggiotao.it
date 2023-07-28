export default function PostVideoPresentation(props) {
  const { videosrc, title } = props;

  return (
    <div className="container mx-auto my-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center mb-4 text-4xl font-extrabold text-gray-600">
          {title || "Video Presentazione"}
        </h2>
      </div>
      <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
        Ascolta il nostro direttore didattico
      </p>
      <div className="p-4">
        <div className="mt-8 container mx-auto border-2 rounded-xl p-4 lg:px-16 lg:py-16 max-w-6xl">
          <div className="aspect-w-16 aspect-h-9 mx-auto">
            <iframe
              src={videosrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
