import Link from "next/link";
/* import { useEffect } from "react";
import analytics from "@/utility/analytics"; */

export default function ThankYou() {
  /*   useEffect(() => {
    analytics.track("formCompilato", () => {
      console.log("formCompilato");
    });
  }); */

  return (
    <div className="flex items-center justify-center h-screen mx-auto">
      <div>
        <div className="flex flex-col items-center space-y-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold pb-6">
            Grazie per il tuo interesse !
          </h1>
          <p className="text-center mb-3">
            Un nostro tutor ti contatterà a breve e senza impegno per darti
            tutte le informazioni sulla nostra offerta formativa.
          </p>

          <p className="text-center pb-8">
            I numeri del nostro servizio clienti sono lo 0578.62772, 0578.61191
            e 391.7405112
          </p>

          <Link
            href="https://www.scuoladimassaggiotao.it"
            className="inline-flex items-center px-4 py-2 text-white bg-green-700 border border-green-600 rounded-full hover:bg-green-800 focus:outline-none focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="text-sm font-medium">Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
