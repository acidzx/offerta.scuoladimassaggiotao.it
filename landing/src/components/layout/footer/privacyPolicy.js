import { Fragment } from "react";

export default function PrivacyPolicy() {
  return (
    <dialog id="my_modal_4" className="modal">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-white">
        <iframe
          className="w-full h-96"
          src="https://www.iubenda.com/privacy-policy/98820787/full-legal"
        ></iframe>
        <div className="modal-action">
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
}
