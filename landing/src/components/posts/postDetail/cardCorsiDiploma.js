import { Interweave } from "interweave";
import Image from "next/image";

export default function CardCorsiDiploma(props) {
  const { programma, title, corsiArray, postSchedaDiplomiContent } = props;

  function getDurata(data, title) {
    for (let x in data) {
      if (data[x].title && data[x].title.indexOf(title.toString()) != -1)
        return data[x].durata || "n/a";
    }
  }

  function getProgrammazione(data, title) {
    try {
      for (let x in data) {
        if (data[x].title && data[x].title.indexOf(title.toString()) != -1)
          return new Date(
            data[x].programmazione
              .sort(function (a, b) {
                return (
                  new Date(a.split(" ").reverse().join("/")) -
                  new Date(b.split(" ").reverse().join("/"))
                );
              })
              .filter(checkDatePassate)[0]
              .split(" ")
              .reverse()
              .join(" ")
          ).toLocaleString("it-IT", dateOptions);
      }
    } catch (e) {
      return null;
    }
  }

  function checkDatePassate(date) {
    return new Date(date.split(" ").reverse().join("/")) > new Date();
  }

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="container mx-auto my-16 hidden lg:block">
      <h3 className="text-center mb-4 text-3xl font-extrabold text-gray-600 pb-2">
        Cosa è incluso nel Diploma in {title}
      </h3>
      <p className="text-center text-gray-600 pb-16 text-lg">
        All’interno di questo percorso formativo, potrai apprendere le seguenti
        tecniche di massaggio:
      </p>
      <div className="container mx-auto flex flex-wrap flex-row justify-center gap-12">
        {programma.map((progList, i) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={i}>
            {/*   <figure>
              <Image
                width={384}
                height={255}
                src={`/assets/images/carousel/corso/${progList
                  .toLowerCase()
                  .replace(";", ".")
                  .replace(/ /g, "-")}jpg`}
                alt={progList.toLowerCase().replace(";", "")}
              />
            </figure> */}
            <div className="card-body py-3">
              <span className="block -mb-1 text-sm border-b font-semibold">
                corso
              </span>
              <h2 className="card-title">
                {progList
                  .replace(";", "")
                  .replace(".", "")
                  .replace("Corso ", "")}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>

              <div className="card-actions justify-end">
                <div className="badge badge-outline p-3">
                  {progList !== "Corso Marketing e Comunicazione."
                    ? getDurata(
                        corsiArray,
                        progList
                          .replace(";", "")
                          .replace(".", "")
                          .replace("Corso ", "")
                      )
                    : "16 ore"}
                </div>
                <div className="badge badge-outline p-3">
                  {progList !== "Corso Marketing e Comunicazione."
                    ? getProgrammazione(
                        corsiArray,
                        progList
                          .replace(";", "")
                          .replace(".", "")
                          .replace("Corso ", "")
                      ) || "in programmazione"
                    : "Corso Online"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {postSchedaDiplomiContent ? (
        <div className="max-w-4xl mx-auto mt-16 text-center text-gray-600 pb-16 text-lg">
          <Interweave content={postSchedaDiplomiContent} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
