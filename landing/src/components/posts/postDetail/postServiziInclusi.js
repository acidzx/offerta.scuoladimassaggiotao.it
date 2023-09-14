const serviziText = [
  {
    name: "Garanzia Soddisfatto o",
    subname: "Rimborsato",
    icon: "",
    color: "bg-green-700",
  },
  {
    name: "Attestato di",
    subname: "Specializzazione",
    icon: "",
    color: "bg-green-700",
  },
  {
    name: "Ripasso",
    subname: "Gratuito",
    icon: "",
    color: "bg-green-700",
  },
  {
    name: "Materiale Didattico",
    subname: "Incluso",
    icon: "",
    color: "bg-green-700",
  },
];

export default function PostServiziInclusi(props) {
  const { title, serviziInclusiText } = props;

  return (
    <>
      <div className="bg-white flex justify-center my-12">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          {title === "Massaggio Base Svedese" ? (
            <div className="stat lg:px-3 xl:px-4">
              <div className="stat-figure text-red-600">
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
              <div className="stat-value text-gray-600 text-xl">Omaggio</div>
            </div>
          ) : (
            [null]
          )}
          {serviziText.map((servizio) => (
            <div className="stat lg:px-3 xl:px-4" key={servizio.name}>
              <div className="stat-figure text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 28 28"
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
              <div className="stat-title text-gray-600">{servizio.name}</div>
              <div className="stat-value text-gray-600 text-xl">
                {servizio.subname}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="flex max-w-7xl justify-center mx-auto py-8">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: serviziInclusiText }}
          />
        </div>
        <div className="containerCenter">
          <label
            htmlFor="modalForm"
            className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Contattaci ora
          </label>
        </div>
      </div>
    </>
  );
}
