export default function ProgrammazioneDataCorso(props) {
  const { fineCorsoDate, filteredDate, primaDataTitle } = props;

  return (
    <div className="containerFull">
      <div className="containerCenter">
        <h3 className="text-2xl font-medium text-gray-900  border-b border-gray-400 justify-center">
          {primaDataTitle ? primaDataTitle : "Prima data del corso:"}
        </h3>
      </div>
      <div className="containerCenter">
        <p className="pCenter font-bold">
          {filteredDate && filteredDate === fineCorsoDate
            ? filteredDate
            : `dal ${filteredDate} al ${fineCorsoDate}`}
        </p>
      </div>
      <div className="containerCenter">
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
