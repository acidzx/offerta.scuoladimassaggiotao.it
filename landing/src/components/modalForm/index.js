export default function ModalForm() {
  return (
    <>
      <input type="checkbox" id="modalForm" className="modal-toggle" />
      <label htmlFor="modalForm" className="modal cursor-pointer">
        <label className="modal-box relative bg-white" htmlFor="">
          <label
            htmlFor="modalForm"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">
            Richiedi Informazioni
          </h3>
          <p className="py-4 mx-4">
            Compila il form per ricevere subito il tuo buono sconto sui nostri
            corsi e percorsi di formazione!
          </p>
          <hr />
          {/* form */}

          {/* nome */}
          <div className="form-control w-full max-w-sm mx-auto">
            <label className="label">
              <span className="label-text">Qual&apos;è il tuo nome?</span>
              <span className="label-text-alt">Top Right label</span>
            </label>
            <input
              type="text"
              placeholder="Nome..."
              className="input input-bordered input-accent w-full max-w-sm mx-auto"
            />
            <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
              <span className="label-text-alt">Bottom Right label</span>
            </label>
          </div>
          {/* cognome */}
          <div className="form-control w-full max-w-sm mx-auto">
            <label className="label">
              <span className="label-text">Qual&apos;è il tuo cognome?</span>
              <span className="label-text-alt">Top Right label</span>
            </label>
            <input
              type="text"
              placeholder="Cognome..."
              className="input input-bordered input-accent w-full max-w-sm mx-auto"
            />
            <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
              <span className="label-text-alt">Bottom Right label</span>
            </label>
          </div>
          {/* email */}
          <div className="form-control w-full max-w-sm mx-auto">
            <label className="label">
              <span className="label-text">Qual&apos;è la tua email?</span>
              <span className="label-text-alt">Top Right label</span>
            </label>
            <input
              type="text"
              placeholder="Email..."
              className="input input-bordered input-accent w-full max-w-sm"
            />
            <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
              <span className="label-text-alt">Bottom Right label</span>
            </label>
          </div>
          {/* telefono */}
          <div className="form-control w-full max-w-sm mx-auto">
            <label className="label">
              <span className="label-text">
                Qual&apos;è il tuo numero di cellulare?
              </span>
              <span className="label-text-alt">Top Right label</span>
            </label>
            <input
              type="text"
              placeholder="Telefono..."
              className="input input-bordered input-accent w-full max-w-sm"
            />
            <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
              <span className="label-text-alt">Bottom Right label</span>
            </label>
          </div>
          <div className="flex items-center my-3 mx-auto justify-center">
            <input
              id="checkbox-1"
              type="checkbox"
              value=""
              className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checkbox-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-green-600 hover:underline dark:text-green-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <div className="mx-auto text-center mt-5">
            <button className="btn text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Invia
            </button>
          </div>
        </label>
      </label>
    </>
  );
}
