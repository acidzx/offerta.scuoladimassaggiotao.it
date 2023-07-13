import { Fragment } from "react";

export default function PrivacyPolicy() {
  return (
    <dialog id="privacyPolicy" className="modal">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-white">
        <h2>Privacy Policy</h2>
        <div className="modal-action">
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
}
