import Image from "next/image";
import Link from "next/link";
import logoScuolaSVG from "@public/assets/svg/logoScuola.svg";
import { Fragment } from "react";

export default function Logo() {
  return (
    <Fragment>
      <Link href="/">
        <Image
          alt="logo tao scuola nazionale di massaggio"
          src={logoScuolaSVG}
          height="30"
        />
      </Link>
    </Fragment>
  );
}
