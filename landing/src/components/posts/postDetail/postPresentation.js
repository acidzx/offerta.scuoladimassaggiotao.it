import Image from "next/image";

export default function PostPresentation(props) {
  const { longcontent, slug, category } = props;
  return (
    <div className="bg-white ">
      <div className="gap-16 items-center py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-600 ">
            Presentazione
          </h2>
          <article
            className="mb-4 text-justify text-base"
            dangerouslySetInnerHTML={{ __html: longcontent }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={`/assets/images/${category}/${slug}/${slug}-vertical-1.png`}
            alt={slug}
            width={290}
            height={400}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={`/assets/images/${category}/${slug}/${slug}-vertical-2.png`}
            alt={slug}
            width={290}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
