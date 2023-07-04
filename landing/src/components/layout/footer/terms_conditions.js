import { Fragment } from "react";

export default function TermsConditions() {
  return (
    <Fragment>
      <input type="checkbox" id="modalTerms" className="modal-toggle" />
      <label htmlFor="modalTerms" className="modal cursor-pointer">
        <label className="modal-box max-w-4xl relative bg-white" htmlFor="">
          <label
            htmlFor="modalTerms"
            className="btn btn-sm btn-circle absolute right-12 top-2"
          >
            ✕
          </label>
          <iframe
            className="w-full h-96 m-0"
            src="https://www.iubenda.com/termini-e-condizioni/98820787"
          ></iframe>
        </label>
      </label>
    </Fragment>
  );
}
