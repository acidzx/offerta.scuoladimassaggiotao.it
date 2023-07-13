import { Fragment } from "react";

export default function PrivacyPolicy() {
  return (
    <div>
      <input type="checkbox" id="modalPrivacy" className="modal-toggle" />
      <label htmlFor="modalPrivacy" className="modal cursor-pointer">
        <label className="modal-box max-w-4xl relative bg-white" htmlFor="">
          <label
            htmlFor="modalPrivacy"
            className="btn btn-sm btn-circle absolute right-12 top-2"
          >
            ✕
          </label>
          <iframe
            className="w-full h-96"
            src="https://www.iubenda.com/privacy-policy/98820787"
          ></iframe>
        </label>
      </label>
    </div>
  );
}
