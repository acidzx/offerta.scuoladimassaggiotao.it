import CtaActionsButtons from "./ctaActionsButtons";

export default function Cta(props) {
  const { text, title, overTitle, btnText } = props;

  return (
    <>
      <hr className="h-px my-5 bg-gray-200 border-0 " />
      <div className="bg-white ">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-8">
          <h1 className="text-center mb-4 text-2xl font-extrabold tracking-tight text-gray-500 md:text-3xl lg:text-4xl leading-8">
            {overTitle || "SCARICA IL TUO COUPON SCONTO"}
            <br />
            <span className="font-bold">{title}</span>
          </h1>
          <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 ">
            {text}
          </p>
          <CtaActionsButtons btnText={btnText} />
        </div>
      </div>
      <hr className="h-px my-5 bg-gray-200 border-0 " />
    </>
  );
}
