export default function CookiePolicy() {
  return (
    <>
      <input type="checkbox" id="modalCookie" className="modal-toggle" />
      <label htmlFor="modalCookie" className="modal cursor-pointer">
        <label className="modal-box relative bg-white" htmlFor="">
          <label
            htmlFor="modalCookie"
            className="btn btn-sm btn-circle absolute right-12 top-2"
          >
            ✕
          </label>
          <iframe
            className="w-full h-96"
            src="https://www.iubenda.com/privacy-policy/98820787/cookie-policy"
          ></iframe>
        </label>
      </label>
    </>
  );
}
