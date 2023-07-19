import Image from "next/image";
import logoScuolaFooter from "@public/assets/svg/logoScuolaFooter.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content border-t-2">
      <div className="mb-6 md:mb-0">
        <a href="https://www.taogroup.it" className="flex items-center">
          <Image
            //1010x160px
            width={200}
            src={logoScuolaFooter}
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
          <li className="text-sm">Tel. 0578.62772</li>
          <li className="text-sm">Email. info@taogroup.it</li>
        </ul>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link
            href="https://www.iubenda.com/privacy-policy/98820787"
            className="text-sm cursor-pointer"
            // onClick={() => window.privacyPolicy.showModal()}
            rel="noopener"
            target="_blank"
          >
            Privacy Policy
          </Link>

          <Link
            className="text-sm cursor-pointer"
            // onClick={() => window.cookiePolicy.showModal()}
            rel="noopener"
            href="https://www.iubenda.com/privacy-policy/98820787/cookie-policy"
            target="_blank"
          >
            Cookie Policy
          </Link>
          <Link
            className="text-sm cursor-pointer"
            // onClick={() => window.termsConditions.showModal()}
            rel="noopener"
            href="https://www.iubenda.com/termini-e-condizioni/98820787"
            target="_blank"
          >
            Termini & Condizioni
          </Link>
        </div>
      </div>
    </footer>
  );
}
