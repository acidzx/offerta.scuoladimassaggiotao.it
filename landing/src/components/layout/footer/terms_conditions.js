import { Fragment } from "react";

export default function TermsConditions() {
  return (
    <dialog id="termsConditions" className="modal overflow-hidden">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-white">
        <h2>Termini e Condizioni</h2>
        <div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.iubenda.com/termini-e-condizioni/98820787"
              title="termini e condizioni tao"
              frameborder="0"
              className=" border-0"
            ></iframe>
          </div>
        </div>
        <div className="modal-action">
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
}
