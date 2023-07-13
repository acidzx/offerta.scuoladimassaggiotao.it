import Image from "next/image";
import scuolaTaoLogo from "@public/assets/svg/logoScuola.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-primary text-primary-content border-t-2">
        <div className="mb-6 md:mb-0">
          <a href="https://www.taogroup.it" className="flex items-center">
            <Image
              //1010x160px
              width={200}
              src={scuolaTaoLogo}
              alt="Logo Tao-Scuola Nazionale di Massaggio"
            />
          </a>
          <ul className="mt-5 max-w-md space-y-1 text-gray-500 list-none list-inside ">
            <li>
              <strong>Tao Group S.r.l</strong>
            </li>
            <li className="text-sm">Via G. di Vittorio 216-218</li>
            <li className="text-sm">53042 Chianciano Terme (SI)</li>
            <li className="text-sm">P.Iva: 01469200529</li>
          </ul>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a
              className="text-sm cursor-pointer"
              onClick={() => window.privacyPolicy.showModal()}
            >
              Privacy Policy
            </a>

            <a
              className="text-sm cursor-pointer"
              onClick={() => window.cookiePolicy.showModal()}
            >
              Cookie Policy
            </a>
            <a
              className="text-sm cursor-pointer"
              onClick={() => window.termsConditions.showModal()}
            >
              Termini & Condizioni
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
