import Label from "./label";

export default function HeaderTitle() {
  return (
    <div className="containerFull">
      <div className="containerCenter">
        <h1 className="titleMain">Investi nel tuo futuro</h1>
      </div>
      <div className="containerCenter">
        <p className="pCenter">
          Se desideri dare una svolta alla tua vita, sei nel posto giusto.
          <span className="block py-2">Scopri i nostri corsi e diplomi!</span>
        </p>
      </div>
      <div className="containerCenter">
        <Label />
      </div>
    </div>
  );
}
