import { ChevronRightIcon, CheckIcon } from "@heroicons/react/20/solid";
import ModalForm from "@components/modalForm";
import { useState } from "react";
import {
  AcademicCapIcon,
  MapPinIcon,
  BookOpenIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  ArrowPathIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  VideoCameraSlashIcon,
} from "@heroicons/react/24/outline";

const includedCourses = [
  "Corso di Massaggio Base Svedese",
  "Corso di Massaggio Decontratturante",
  "Corso di Massaggio Sportivo",
  "Corso di Massaggio Linfodrenante vodder",
  "Corso di Anatomia",
  "Corso di Massaggio Anticellulite",
  "Corso di Massaggio Ayurvedico",
  "Corso di Massaggio Californiano",
  "Corso di Massaggio Hawaiano Lomi Lomi Nui",
  "Corso di Massaggio Thai Oil",
  "Corso di Riflessologia Plantare Primo Livello",
  "Corso di Massaggio Kobido",
  "Corso di Coppettazione",
  "Corso di Stretching Sportivo",
  "Corso di Marketing & Comunicazione",
  "Diploma di Operatore in Massaggio Sportivo",
  "Diploma di Operatore in Massaggio Olistico",
  "Diploma di Operatore in Massaggio Terme & Spa",
  "Diploma di Alta Formazione Professionale",
];

export default function PromoBlackFridayAltaFormazione() {
  const [idForm, setIdForm] = useState(null);

  const openModalWithId = (formId) => {
    setIdForm(formId);
    // Trova la checkbox della modale e la "spunta" per aprirla
    const modalCheckbox = document.getElementById("modalForm");
    if (modalCheckbox) modalCheckbox.checked = true;
  };

  return (
    <div>
      <ModalForm
        idForm={idForm}
        setIdForm={setIdForm}
        title="Richiedi Maggiori Informazioni"
      />
      <div className="w-full bg-gradient-to-br from-green-900 via-white to-red-900 pb-12">
        <div className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto">
          <div className="w-full max-w-screen-md mx-auto mt-12 px-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 via-red-500 to-red-700 p-1">
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative bg-gradient-to-br from-red-900/70 to-black/95 rounded-3xl px-8 pt-12 pb-10">
                {/* Badge limitato */}
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  SOLO PER I PRIMI 50 ISCRITTI
                </div>

                {/* Titolo */}
                <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-red-200 mb-2 pb-4">
                  Black Friday
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mb-10"></div>

                {/* Card prezzo */}
                <div className="relative bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 mb-8 shadow-2xl">
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-4 py-1 rounded-full text-2xl font-bold rotate-12">
                    -45% OFF
                  </div>

                  <div className="text-center space-y-4">
                    <p className="text-red-50 text-base font-semibold uppercase tracking-wider">
                      Prezzo originale
                    </p>
                    <p className="text-3xl text-gray-100 line-through font-light">
                      7.050€
                    </p>

                    <div className="relative py-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-red-500/50"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-black px-4 text-yellow-400 text-xl font-semibold">
                          OFFERTA ESCLUSIVA
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                        3.890€
                      </p>
                      <p className="text-green-400 text-xl font-semibold">
                        Risparmio di 3.160€
                      </p>
                    </div>

                    <div className="bg-red-900/50 rounded-xl p-4 mt-6 space-y-2">
                      <p className="text-gray-100 text-lg">
                        Rateizzabile fino a 36 rate da{" "}
                        <span className="font-semibold text-yellow-400">
                          130€/mese
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info corsi */}
                <div className="flex items-center justify-center gap-2 text-white/90 mb-2">
                  {/* <svg
                className="w-7 h-7 text-yellow-400 hidden lg:block"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg> */}
                  <p className="text-4xl font-extrabold text-center">
                    Alta Formazione Professionale
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/90 mb-4 mt-6">
                  <AcademicCapIcon className="w-6 h-6 text-yellow-400 hidden lg:block" />{" "}
                  <p className="text-2xl font-medium text-center">
                    15 Corsi Completi
                  </p>
                  {/* <AcademicCapIcon className="w-7 h-7 text-yellow-400 hidden lg:block" /> */}
                </div>
                <div className="flex items-center justify-center gap-2 text-white/90 mb-4 mt-2">
                  <AcademicCapIcon className="w-6 h-6 text-yellow-400 hidden lg:block" />{" "}
                  <p className="text-2xl font-medium text-center">
                    4 Diplomi Inclusi
                  </p>
                  {/* <AcademicCapIcon className="w-7 h-7 text-yellow-400 hidden lg:block" /> */}
                </div>
                <div className="flex items-center justify-center gap-2 text-white/90 mb-4 mt-2">
                  <VideoCameraIcon className="w-6 h-6 text-yellow-400 hidden lg:block" />{" "}
                  <p className="text-2xl font-medium text-center">
                    15 Video Corsi Inclusi
                  </p>
                  {/* <AcademicCapIcon className="w-7 h-7 text-yellow-400 hidden lg:block" /> */}
                </div>
                <div className="flex items-center justify-center gap-2 text-white/90 mb-8">
                  <MapPinIcon className="w-6 h-6 text-yellow-400 hidden lg:block" />{" "}
                  <p className="text-2xl font-medium text-center">
                    Sedi in tutta Italia
                  </p>{" "}
                  {/* <MapPinIcon className="w-7 h-7 text-yellow-400 hidden lg:block" /> */}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() =>
                    openModalWithId("d60743aab4b625940d39b3b51c3c6a78")
                  }
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-extrabold text-xl lg:text-2xl py-5 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200 hover:shadow-yellow-500/50"
                >
                  <span className="flex items-center justify-center gap-2 text-red-950">
                    ISCRIVITI ORA - OFFERTA LIMITATA
                    <svg
                      className="w-8 h-8 pt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>

                {/* Timer urgenza (opzionale) */}
                <div className="mt-6 text-center">
                  <p className="text-red-50 text-xl font-bold flex items-center justify-center gap-2">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    L&apos;offerta termina tra poco!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-5xl font-extrabold text-balance">
            Perché scegliere il percorso
            <br className="hidden md:block" /> di Alta Formazione Tao?
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {/* Card 1: Tecniche di Massaggio */}
            <div className="bg-black/90 rounded-2xl">
              <div className="h-full bg-gradient-to-br from-red-500/40 to-black/50 border border-red-500/20 rounded-2xl p-8 text-center flex flex-col items-center shadow-lg">
                <div className="bg-red-500/10 p-4 rounded-full mb-6">
                  <BookOpenIcon className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  15 Tecniche di Massaggio Richieste
                </h3>
                <p className="text-gray-300 flex-grow">
                  500 ore di formazione completa per diventare un esperto nel
                  massaggio professionale.
                </p>
              </div>
            </div>

            {/* Card 2: Certificazione Riconosciuta */}
            <div className="bg-black/90 rounded-2xl">
              <div className="h-full bg-gradient-to-br from-red-500/40 to-black/50 border border-red-500/20 rounded-2xl p-8 text-center flex flex-col items-center shadow-lg">
                <div className="bg-red-500/10 p-4 rounded-full mb-6">
                  <CheckBadgeIcon className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Certificazione Riconosciuta
                </h3>
                <p className="text-gray-300 flex-grow">
                  Titolo certificato per ogni corso che apre le porte a nuove
                  opportunità professionali e inserimento lavorativo.
                </p>
              </div>
            </div>

            {/* Card 3: Supporto Completo */}
            <div className="bg-black/90 rounded-2xl">
              <div className="h-full bg-gradient-to-br from-red-500/40 to-black/50 border border-red-500/20 rounded-2xl p-8 text-center flex flex-col items-center shadow-lg">
                <div className="bg-red-500/10 p-4 rounded-full mb-6">
                  <UserGroupIcon className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Supporto Completo
                </h3>
                <p className="text-gray-300 flex-grow">
                  Docenti esperti, tutor personale e segreteria didattica sempre
                  al tuo fianco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sezione Corsi Inclusi */}
      <div className="w-full bg-black/95 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-5xl font-extrabold text-white text-balance">
            I Corsi e i Diplomi inclusi
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mt-4 mx-auto"></div>

          <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {includedCourses.map((course) => (
              <li key={course} className="flex items-start gap-3">
                <CheckIcon
                  className="h-7 w-7 flex-shrink-0 text-yellow-400 mt-1"
                  aria-hidden="true"
                />
                <span className="text-lg text-gray-300">{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-5xl font-extrabold text-balance">
            In Omaggio
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mt-4 mx-auto"></div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {/* Omaggio 1: Ripasso Gratuito */}
            <div className="bg-black/90 rounded-2xl">
              <div className="h-full bg-gradient-to-br from-red-700/40 to-black/50 border border-red-500/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center shadow-lg">
                <div className="bg-red-500/10 p-4 rounded-full mb-6">
                  <ArrowPathIcon className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white h-20">
                  Ripasso gratuito di tutti i corsi
                </h3>
              </div>
            </div>

            {/* Omaggio 2: Videocorsi */}
            <div className="bg-black/90 rounded-2xl">
              <div className="h-full bg-gradient-to-br from-red-700/40 to-black/50 border border-red-500/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center shadow-lg">
                <div className="bg-red-500/10 p-4 rounded-full mb-6">
                  <VideoCameraIcon className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white h-20">
                  Videocorsi professionali per ogni tecnica
                </h3>
              </div>
            </div>

            {/* Omaggio 3: Materiale didattico */}
            <div className="bg-black/90 rounded-2xl">
              <div className="h-full bg-gradient-to-br from-red-700/40 to-black/50 border border-red-500/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center shadow-lg">
                <div className="bg-red-500/10 p-4 rounded-full mb-6">
                  <DocumentTextIcon className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white h-20">
                  Materiale didattico incluso
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full bg-gradient-to-t from-black to-black/95 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center px-6 lg:px-8">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-200">
              È il Tuo Momento!
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
              Trasforma la tua passione in una professione. Oggi decidi il
              meglio per il tuo futuro professionale da massaggiatore.
            </p>
            <div className="mt-10">
              <button
                onClick={() =>
                  openModalWithId("d60743aab4b625940d39b3b51c3c6a78")
                }
                className="w-full max-w-md bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-extrabold text-xl lg:text-2xl py-5 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200 hover:shadow-yellow-500/50"
              >
                <span className="flex items-center justify-center gap-2 text-red-950">
                  ISCRIVITI ORA - OFFERTA LIMITATA
                  <ChevronRightIcon className="w-8 h-8" />
                </span>
              </button>
            </div>
            <p className="mt-8 text-base text-gray-400">
              Solo per i primi 50 iscritti • Offerta valida per pochi giorni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
