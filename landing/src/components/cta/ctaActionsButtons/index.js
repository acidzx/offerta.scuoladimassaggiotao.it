export default function CtaActionsButtons(props) {
  const { btnText } = props;

  return (
    <div className="flex flex-col my-3 mx-[4rem] lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <label
        htmlFor="modalForm"
        className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
      >
        {btnText || "Richiedi Ora"}
      </label>
    </div>
  );
}
