export default function Label({ bottoneDiverso }) {
  console.log(bottoneDiverso);

  return (
    <label
      htmlFor="modalForm"
      className="cursor-pointer inline-flex justify-between items-center py-1 px-2 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full  hover:bg-gray-200 shadow"
      role="alert"
    >
      <span className="text-xs bg-primary-700 rounded-full text-white px-4 py-1.5 mr-3">
        {(bottoneDiverso?.verde && bottoneDiverso?.verde) ||
          "Una sorpresa per te"}
      </span>
      <span className="text-sm font-medium">
        {(bottoneDiverso?.grigio && bottoneDiverso?.grigio) || "Contattaci ora"}
      </span>
      <svg
        className="ml-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </label>
  );
}
