import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Snowfall from "react-snowfall";
import ModalForm from "@components/modalForm";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Promo Alta Formazione",
    href: "/assets/images/promo-alta-formazione.png",
    formId: "4fd5aadb85a00525415e3733cb96ed68",
    imageUrl: "/assets/images/promo-alta-formazione.png",
  },
  {
    id: 2,
    title: "Promo Diploma",
    href: "/assets/images/promo-diploma.jpg",
    formId: "35a12c43227f217207d4e06ffefe39d3",
    imageUrl: "/assets/images/promo-diplomi.png",
  },
  {
    id: 3,
    title: "Promo Video Corsi",
    href: "/assets/images/promo-video-corsi.jpg",
    formId: "1f33d7cf6693dc6dcc7029b97cc29487",
    imageUrl: "/assets/images/promo-video-corsi.png",
  },
  // More posts...
];

export default function PromoNatale() {
  const [idForm, setIdForm] = useState(null);

  return (
    <div className="mb-12 pb-12">
      <Snowfall snowflakeCount={300} />
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-red-600">
                  Fantastici Regali
                </span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <a href="#" className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  ti aspettano
                  <ChevronRightIcon
                    className="-mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight leading-10 text-gray-900 sm:text-5xl">
              Tao Scuola Nazionale di Massaggio ti augura buone feste
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Esse id magna consectetur fugiat non dolor in ad laboris magna
              laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam
              voluptate id. In veniam incididunt ex veniam adipisicing sit.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Richiedi <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <title>App screenshot</title>
            <defs></defs>

            <Image
              src="/assets/images/albero-natale.png"
              className="hidden lg:block"
              alt=""
              width={316}
              height={684}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="flex flex-col items-center lg:items-start justify-between max-w-sm mx-auto text-center"
            >
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  className="w-full rounded-2xl bg-gray-100 "
                  width={384}
                  height={256}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl mx-auto">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </div>

                <label
                  htmlFor="modalForm"
                  className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                  onClick={() => setIdForm(post.formId)}
                >
                  Richiedi il tuo regalo
                </label>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ModalForm idForm={idForm} />
    </div>
  );
}
