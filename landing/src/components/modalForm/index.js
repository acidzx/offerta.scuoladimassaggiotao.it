import Error from "./formError";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  // email is required with email format
  email: yup.string().email().required(),

  // phone number needs to match the regex expression
  telefono: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Enter a valid phone number"
    ),

  nome: yup.string().required(),
  cognome: yup.string().required(),
  agree: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

export default function ModalForm() {
  const onSubmit = (data) => console.log(data);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <input type="checkbox" id="modalForm" className="modal-toggle" />
      <label htmlFor="modalForm" className="modal cursor-pointer">
        <label className="modal-box relative bg-white" htmlFor="">
          <label
            htmlFor="modalForm"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">
            Richiedi Informazioni
          </h3>
          <p className="py-4 mx-4">
            Compila il form per ricevere subito il tuo buono sconto sui nostri
            corsi e percorsi di formazione!
          </p>
          <hr />
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            {/* nome */}
            <div className="form-control w-full max-w-sm mx-auto">
              <label className="label">
                <span className="label-text">Qual&apos;è il tuo nome?</span>
              </label>
              <input
                type="text"
                placeholder="Nome..."
                className="input input-bordered input-accent w-full max-w-sm mx-auto"
                {...register("nome")}
              />
              <label className="label">
                <span className="label-text-alt text-red-700">
                  {errors.nome && <Error message={errors.nome.message} />}
                </span>
              </label>
            </div>
            {/* cognome */}
            <div className="form-control w-full max-w-sm mx-auto">
              <label className="label">
                <span className="label-text">Qual&apos;è il tuo cognome?</span>
              </label>
              <input
                type="text"
                placeholder="Cognome..."
                className="input input-bordered input-accent w-full max-w-sm mx-auto"
                {...register("cognome")}
              />
              <label className="label">
                <span className="label-text-alt text-red-700">
                  {errors.cognome && <Error message={errors.cognome.message} />}
                </span>
              </label>
            </div>
            {/* email */}
            <div className="form-control w-full max-w-sm mx-auto">
              <label className="label">
                <span className="label-text">Qual&apos;è la tua email?</span>
              </label>
              <input
                type="text"
                placeholder="Email..."
                className="input input-bordered input-accent w-full max-w-sm"
                {...register("email")}
              />

              <label className="label">
                <span className="label-text-alt text-red-700">
                  {errors.email && <Error message={errors.email.message} />}
                </span>
              </label>
            </div>
            {/* telefono */}
            <div className="form-control w-full max-w-sm mx-auto">
              <label className="label">
                <span className="label-text">
                  Qual&apos;è il tuo numero di cellulare?
                </span>
              </label>
              <input
                type="text"
                placeholder="Telefono..."
                className="input input-bordered input-accent w-full max-w-sm"
                {...register("telefono")}
              />
              <label className="label">
                <span className="label-text-alt text-red-700">
                  {errors.telefono && (
                    <Error message={errors.telefono.message} />
                  )}
                </span>
              </label>
            </div>
            <div className="mx-auto text-center text-red-700 text-xs">
              {errors.agree && <Error message={errors.agree.message} />}
            </div>
            <div className="flex items-center my-3 mx-auto justify-center">
              <input
                id="checkbox-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                {...register("agree")}
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-green-600 hover:underline dark:text-green-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>

            <div className="mx-auto text-center mt-5">
              <button
                type="submit"
                className="btn text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Invia
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
}
