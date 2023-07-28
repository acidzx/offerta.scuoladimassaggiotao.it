import Image from "next/image";

import {
  BuildingLibraryIcon,
  HandRaisedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const supportLinks = [
  {
    name: "plus 1",
    href: "#",
    icon: BuildingLibraryIcon,
    bgcolor: "bg-green-700",
    color: "text-white",
  },
  {
    name: "plus 2",
    href: "#",
    icon: HandRaisedIcon,
    bgcolor: "bg-white",
    color: "text-gray-700",
  },
  {
    name: "plus 3",
    href: "#",
    icon: UserGroupIcon,
    bgcolor: "bg-red-700",
    color: "text-white",
  },
];

export default function PostPresentation(props) {
  const { longcontent, slug, category } = props;
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
            <h2 className="mb-4 text-4xl font-extrabold text-gray-600 ">
              Entra nel mondo del benessere con il corso di massaggio base
              svedese
            </h2>
            <article
              className="mb-4 text-justify text-base"
              dangerouslySetInnerHTML={{ __html: longcontent }}
            />
            <div tabIndex={0} className="collapse bg-base-200">
              <div className="collapse-title text-md font-medium">
                A cosa serve il corso di massaggio base svedese?
              </div>
              <div className="collapse-content text-base text-justify">
                <p>
                  Il massaggio svedese è un massaggio completo che comprende una
                  vasta sequenza di manovre: dallo sfioramento alle percussioni
                  finali, passando per le frizioni e gli impastamenti. Questo ci
                  permette di utilizzare questo trattamento per diversi scopi,
                  ottenendo così vari metodi di lavoro in base alle diverse
                  esigenze della persona. Oltre all&#39;obiettivo primario che è
                  quello di favorire un rilassamento e un benessere generale
                  alla persona, i benefici del massaggio svedese sono
                  molteplici. Tra questi benefici troviamo: 1. ridurre le
                  situazioni di stress e ansia; 2. supportare la tonificazione
                  della muscolatura e il miglioramento della circolazione
                  sanguigna linfatica; 3. alleviare dolori muscolari e
                  articolari e favorire l&#39;eliminazione dei liquidi e tossine
                  in eccesso.
                </p>
              </div>
            </div>
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
              key={link.name}
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
