import CtaActionsButtons from "./ctaActionsButtons";

export default function Cta(props) {
  const { text, title, overTitle, btnText } = props;

  return (
    <>
      <div className="containerFull">
        <div className="containerCenter">
          <h2 className="titleMain">
            {overTitle || "SCARICA IL TUO COUPON SCONTO"}
          </h2>
        </div>
        <div className="containerCenter">
          <span className="subTitle">{title}</span>
        </div>
        <div className="containerCenter">
          <span className="pCenter">{text}</span>
        </div>
        <div className="containerCenter">
          <CtaActionsButtons btnText={btnText} />
        </div>
      </div>
    </>
  );
}
