import Image from "next/image";

export default function PostHeader(props) {
  const { title, img } = props;

  return (
    <header>
      <h1>{title}</h1>
      <Image alt={title} src={img} width={200} height={150} />
    </header>
  );
}
