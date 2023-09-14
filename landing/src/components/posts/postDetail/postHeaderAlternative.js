import { Interweave } from "interweave";
import { polyfill } from "interweave-ssr";
import Label from "@/components/commons/label";

polyfill();

export default function PostHeaderAlternative(props) {
  const { incipit, category, subIncipit } = props;

  return (
    <div className="containerFull">
      <div className="containerCenter">
        <h1 className="titleMain">
          {category === "diploma"
            ? "Scegli il percorso giusto per te"
            : "Scegli la strada giusta per te"}
        </h1>
      </div>
      <div className="containerCenter flex-col">
        <p
          className={`pCenter ${category === "diploma" ? "pb-8 border-b" : ""}`}
        >
          <Interweave content={incipit} />
        </p>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        {subIncipit ? <Interweave content={subIncipit} /> : ""}
      </div>
      <div className="containerCenter">
        <Label />
      </div>
    </div>
  );
}
