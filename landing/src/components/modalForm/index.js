import Error from "./formError";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Fragment } from "react";

const schema = yup.object({
  // email is required with email format
  email: yup
    .string()
    .email("inserisci una email valida")
    .required("inserisci la tua email"),

  // phone number needs to match the regex expression
  telefono: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Inserisci un numero di telefono valido"
    ),

  nome: yup
    .string()
    .min(3, "inserisci il tuo nome")
    .required("campo nome obbligatorio"),

  cognome: yup
    .string()
    .min(3, "inserisci il tuo cognome")
    .required("campo cognome obbligatorio"),

  terms__conditions: yup
    .mixed()
    .transform((value) => (value === false ? "0" : "1"))
    .oneOf(["1"], "accetta i termini e le condizioni"),
});

function buildFormData(formData, data, parentKey) {
  if (data && typeof data === "object") {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;
    formData.append(parentKey, value);
  }
}

function jsonToFormData(data) {
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
}

export default function ModalForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${process.env.BL_FORM_ACTION}`, {
        method: "POST",
        body: jsonToFormData(data),
      });
      if (response.ok) {
        router.push("/thank-you");
      }
    } catch (errorResponse) {
      return errorResponse;
    }
  };

  return (
    <Fragment>
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
            <input
              {...register("web_form_id")}
              type="hidden"
              value={`${process.env.BL_FORM_ID}`}
            />

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
                <span className="label-text-alt"></span>
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
                <span className="label-text-alt"></span>
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
                <span className="label-text-alt"></span>
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
                <span className="label-text-alt"></span>
                <span className="label-text-alt text-red-700">
                  {errors.telefono && (
                    <Error message={errors.telefono.message} />
                  )}
                </span>
              </label>
            </div>

            <div className="flex items-center my-3 mx-auto justify-center">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500  focus:ring-2"
                {...register("terms__conditions")}
              />
              <label className="ml-2 text-sm font-medium text-gray-900 ">
                Ho letto, compreso e accettato{" "}
                <a href="#" className="text-green-600 hover:underline ">
                  termini e condizioni
                </a>{" "}
                (obbligatorio) .
              </label>
            </div>
            <div className="mx-auto -mt-2 text-center text-red-700 text-xs">
              {errors.terms__conditions && (
                <Error message={errors.terms__conditions.message} />
              )}
            </div>

            <div className="mx-auto text-center mt-6">
              <button
                type="submit"
                className="btn text-white font-bold bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
              >
                invia
              </button>
            </div>
          </form>
        </label>
      </label>
    </Fragment>
  );
}
