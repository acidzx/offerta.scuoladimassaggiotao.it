import { PhoneIcon } from "@heroicons/react/24/outline";

export default function CtaActionsButtons() {
  return (
    <div className="py-6">
      <div className="flex flex-col my-3 mx-[4rem] lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <label
          htmlFor="modalForm"
          className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
        >
          Richiedi Informazioni
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </label>
        <a
          href="tel:057862772"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
        >
          Chiamaci
          <PhoneIcon className="ml-2 -mr-1 w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
