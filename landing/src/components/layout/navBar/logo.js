import Image from "next/image";
import Link from "next/link";
import logoScuola from "@public/assets/svg/logoScuola.svg";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <Image
          alt="logo tao scuola nazionale di massaggio"
          src={logoScuola}
          height="40"
        />
      </Link>
    </>
  );
}
