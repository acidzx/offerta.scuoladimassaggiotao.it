import Link from "next/link";
import Image from "next/image";

export default function CardCarousel(props) {
  const { img, slug, price, title, description, durata, ore, category } =
    props.post;

  const imgPath = `/assets/images/carousel/${category}/${img}`;

  const linkPath = `/${category}/${slug}`;

  return (
    <Link href={linkPath}>
      <div className="carousel-item max-w-[340px] mx-auto my-5 card bg-base-100 shadow-xl">
        <Image
          src={imgPath}
          alt={title}
          width={350}
          height={300}
          className="w-auto"
        />

        <div className="card-body">
          <div className="absolute top-8 left-2 px-4 py-1 rounded text-white text-xs bg-green-600">
            <strong>Scopri di più</strong>
          </div>
          <div className="absolute -right-2 top-8 px-5 py-1 text-white text-xs bg-green-600 before:content[''] before:absolute before:-right-1 before:-top-px before:border-0 before:border-t-solid before:border-l-solid before:border-transparent before:border-l-8 before:border-t-8 before:border-t-black/[.45] before:-translate-y-3/4 before:-translate-x-1 before:rotate-180">
            <strong>{price}€</strong>
          </div>
          <p className="text-sm block -my-2 font-semibold">
            {category == "diploma"
              ? "Diploma di operatore in"
              : "Corso di specializzazione in"}{" "}
            -
          </p>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <div>
            <div>
              <ul className="flex">
                <li>
                  {Array.from(Array(5)).map((Array, index) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="yellow"
                      viewBox="0 0 30 30"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline"
                      key={index + 300}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  ))}
                </li>
                <li className="px-5 text-sm text-green-700">
                  25
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 30"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                </li>
                <li className="text-sm text-green-700">
                  68
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 30"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </li>
              </ul>
            </div>

            <p className="mt-2 text-justify">
              {description.substring(0, 130)}{" "}
              {description.length >= 130 && "..."}
            </p>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 30"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Durata
                      </p>
                    </div>
                    <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                      {durata}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 30"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Attestato
                      </p>
                    </div>
                    <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                      di specializzazione
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 30"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Formazione
                      </p>
                    </div>
                    <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                      {ore}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
