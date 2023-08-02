import Image from "next/image";

import {
  BuildingLibraryIcon,
  HandRaisedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function PostPresentation(props) {
  const {
    longcontent,
    longcontentTitle,
    longcontentCollapseTitle,
    longcontentCollapseContent,
    longcontentCollapseTitle2,
    longcontentCollapseContent2,
    slug,
    category,
    features1,
    features2,
    features3,
  } = props;

  const supportLinks = [
    {
      name: features1,
      href: "#",
      icon: BuildingLibraryIcon,
      bgcolor: "bg-green-700",
      color: "text-white",
      ref: "features1",
    },
    {
      name: features2,
      href: "#",
      icon: HandRaisedIcon,
      bgcolor: "bg-white",
      color: "text-gray-700",
      ref: "features2",
    },
    {
      name: features3,
      href: "#",
      icon: UserGroupIcon,
      bgcolor: "bg-red-700",
      color: "text-white",
      ref: "features3",
    },
  ];

  return (
    <>
      <div className="bg-white ">
        <div className="flex items-center justify-center mx-auto">
          {/*      <h2 className="my-4 text-2xl font-extrabold tracking-tight  text-gray-600 md:text-3xl lg:text-4xl text-center leading-6 gap-y-3">
          Entra nel mondo del benessere con il
          <br />
          corso di massaggio base svedese
        </h2> */}
        </div>
        <div className="gap-16 items-center py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-600 ">
              {longcontentTitle || "longcontentTitle missing"}
            </h2>
            <article
              className="mb-4 text-justify text-base"
              dangerouslySetInnerHTML={{ __html: longcontent }}
            />
            {longcontentCollapseTitle ? (
              <div
                tabIndex={0}
                className="collapse collapse-arrow  bg-base-200"
              >
                <div className="collapse-title text-lg font-medium">
                  {longcontentCollapseTitle}
                </div>
                <div className="collapse-content text-base text-justify">
                  <p>{longcontentCollapseContent}</p>
                </div>
              </div>
            ) : (
              []
            )}
            {longcontentCollapseTitle2 ? (
              <div
                tabIndex={0}
                className="collapse collapse-arrow  bg-base-200"
              >
                <div className="collapse-title text-lg font-medium">
                  {longcontentCollapseTitle2}
                </div>
                <div className="collapse-content text-base text-justify">
                  <p>{longcontentCollapseContent2}</p>
                </div>
              </div>
            ) : (
              []
            )}
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

      <div
        className="hidden lg:block z-10 mx-auto lg:mt-[30px] max-w-7xl px-6 pb-5 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.ref}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div
                  className={`absolute top-0 inline-block -translate-y-1/2 transform rounded-xl ${link.bgcolor} p-5 shadow-lg`}
                >
                  <link.icon
                    className={`h-9 w-9 ${link.color}`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                {/*   <p className="mt-4 text-base text-gray-500">
                    {link.description}
                  </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
