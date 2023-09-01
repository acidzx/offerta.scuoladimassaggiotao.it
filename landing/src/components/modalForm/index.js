import Error from "./formError";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import { useState, useEffect, useCallback } from "react";
import analytics from "@/utility/analytics";

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
    setValue,
    watch,
    replace,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [userIp, setUserIp] = useState();

  const fetchUserIp = useCallback(async () => {
    const userIp = await fetch("/api/getIpAddress")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    setUserIp(userIp);
    return userIp;
  }, []);

  useEffect(() => {
    setValue(
      "user_ip",
      { userIp },
      { shouldTouch: true, shouldValidate: true, shouldDirty: true }
    );
    fetchUserIp()
      // make sure to catch any error
      .catch(console.error);
  }, [fetchUserIp, register, userIp, setValue]);

  const onSubmit = async (data) => {
    const json_user_ip = getValues("user_ip");
    data.user_ip = json_user_ip.userIp;
    console.log(data);
    try {
      const response = await fetch(
        "https://app.brainlead.it/3.0.0/web_forms/subscription",
        {
          method: "POST",
          body: jsonToFormData(data),
        }
      );
      if (
        response.url === "https://offerta.scuoladimassaggiotao.it/thank-you"
      ) {
        await analytics.track("form_landing_offerta_tao_compilato");
        router.push("/thank-you");
      } else {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {
          console.log("Response received");
          if (res.status === 200) {
            console.log("Response succeeded!");
            router.push("/thank-you");
          }
        });
        router.push("/thank-you");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const inputNomeStyleError = clsx({
    "bg-gray-100/20": true,
    "bg-red-400/10": errors.nome?.message,
  });

  const inputCognomeStyleError = clsx({
    "bg-gray-100/20": true,
    "bg-red-400/10": errors.cognome?.message,
  });

  const inputEmailStyleError = clsx({
    "bg-gray-100/20": true,
    "bg-red-400/10": errors.email?.message,
  });

  const inputTelefonoStyleError = clsx({
    "bg-gray-100/20": true,
    "bg-red-400/10": errors.telefono?.message,
  });

  const checkTermsConditionsStyleError = clsx({
    "": true,
    "ring ring-red-400/40": errors.terms__conditions?.message,
  });

  console.log("userIp:" + userIp + typeof userIp);

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
            Ricevi subito il buono sconto da utilizzare sui nostri corsi di
            formazione. Compila il form e te lo inviamo!
          </p>

          <hr />

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            {/* <input type="hidden" name="web_form_id" value="db5f9f42a7157abe65bb145000b5871a"> */}
            <input
              {...register("web_form_id")}
              type="hidden"
              value="db5f9f42a7157abe65bb145000b5871a"
              name="web_form_id"
            />

            <input type="hidden" name="user_ip" {...register("user_ip")} />

            {/* nome */}
            <div className="form-control w-full max-w-sm mx-auto">
              <label className="label">
                <span className="label-text">Qual&apos;è il tuo nome?</span>
              </label>
              <input
                type="text"
                placeholder="Nome..."
                className={`input input-bordered input-accent w-full max-w-sm mx-auto ${inputNomeStyleError}`}
                {...register("nome")}
                name="nome"
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
                className={`input input-bordered input-accent w-full max-w-sm mx-auto ${inputCognomeStyleError}`}
                {...register("cognome")}
                name="cognome"
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
                className={`input input-bordered input-accent w-full max-w-sm mx-auto ${inputEmailStyleError}`}
                {...register("email")}
                name="email"
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
                className={`input input-bordered input-accent w-full max-w-sm mx-auto ${inputTelefonoStyleError}`}
                {...register("telefono")}
                name="telefono"
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
                className={`w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded  ${checkTermsConditionsStyleError}`}
                {...register("terms__conditions")}
              />
              <label className={`ml-2 text-sm font-medium text-gray-900`}>
                Ho letto, compreso e accettato{" "}
                <Link
                  href="https://www.iubenda.com/termini-e-condizioni/98820787"
                  className="text-green-600 hover:underline "
                >
                  termini e condizioni
                </Link>{" "}
                (obbligatorio)
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
    </>
  );
}
