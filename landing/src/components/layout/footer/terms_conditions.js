import { Fragment } from "react";

export default function TermsConditions() {
  return (
    <dialog id="termsConditions" className="modal">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-white">
        <h2>Termini e Condizioni</h2>
        <embed
          src="https://www.iubenda.com/termini-e-condizioni/98820787"
          onerror="alert('URL invalid !!');"
          className="w-full h-full"
        />
        <div className="modal-action">
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
}
