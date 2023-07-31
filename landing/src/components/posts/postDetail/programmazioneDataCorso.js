export default function ProgrammazioneDataCorso(props) {
  const { fineCorsoDate, filteredDate } = props;

  return (
    <div className="container flex flex-col text-center mx-auto mt-0 py-6 justify-center items-center">
      <div className="p-5 rounded-2xl bg-white shadow-2xl">
        <h3 className="card-title text-xl font-medium text-gray-900  border-b border-gray-400 justify-center">
          Prima data del corso:
        </h3>
        <p className="text-lg font-medium text-gray-600 tracking-tighter justify-center pt-2 pb-4">
          {filteredDate && filteredDate === fineCorsoDate
            ? filteredDate
            : `dal ${filteredDate} al ${fineCorsoDate}`}
        </p>

        <label
          htmlFor="modalForm"
          href="#"
          className="cursor-pointer"
          role="alert"
        >
          <a className="btn btn-primary bg-green-700 text-white hover:bg-green-800">
            Richiedi Informazioni
          </a>
        </label>
      </div>
    </div>
  );
}
