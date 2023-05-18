import Image from "next/image";
import Link from "next/link";
import logoScuolaSVG from "@public/assets/svg/logoScuola.svg";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <Image
          alt="logo tao scuola nazionale di massaggio"
          src={logoScuolaSVG}
          height="30"
        />
      </Link>
    </>
  );
}
