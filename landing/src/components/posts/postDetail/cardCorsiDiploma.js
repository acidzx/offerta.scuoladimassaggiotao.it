export default function CardCorsiDiploma(props) {
  const { programma, title } = props;

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center mb-4 text-3xl font-extrabold text-gray-600 pb-16">
        I Corsi che compongono il Diploma in {title}
      </h2>
      <div className="container mx-auto flex flex-wrap flex-row justify-center gap-12">
        {programma.map((progList, i) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={i}>
            <figure>
              <img
                src={`/assets/images/carousel/corso/${progList
                  .toLowerCase()
                  .replace(";", ".")
                  .replace(/ /g, "-")}jpg`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <span className="block -mb-1 text-sm border-b font-semibold">
                corso
              </span>
              <h2 className="card-title">
                {progList.replace(";", "").replace("Corso ", "")}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p>&nbsp;</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
