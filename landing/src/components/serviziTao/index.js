import Image from "next/image";

import {
  AcademicCapIcon,
  ArrowPathIcon,
  BuildingLibraryIcon,
  FaceSmileIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Recensioni Facebook 4.9",
    description: "Recensioni Facebook verificate con 4.9 stelle su 5.",
    icon: SparklesIcon,
  },
  {
    name: "33 sedi in tutta Italia",
    description:
      "Organizziamo i corsi nelle migliori sale congresso di strutture selezionate e facilmente raggiungibili.",
    icon: BuildingLibraryIcon,
  },
  {
    name: "Tutor dedicato",
    description:
      "Un tutor dedicato ti seguirà e saprà consigliarti il percorso formativo più adatto alle tue esigenze.",
    icon: FaceSmileIcon,
  },
  {
    name: "Accreditamenti.",
    description:
      "Possibilità di riconoscere ed accreditare competenze pregresse svolte anche con altre realtà.",
    icon: ArrowPathIcon,
  },
  {
    name: "Conversione Diplomi.",
    description:
      "A conclusione del Percorso Formativo di uno dei Diplomi Nazionali Tao®, potrai ottenere la conversione in un Diploma Csen.",
    icon: AcademicCapIcon,
  },
  {
    name: "Eventi/stage nazionali.",
    description:
      "Avrai la possibilità di partecipare attivamente a importanti eventi come Casa Sanremo, Casa Miss Italia, Rimini Wellness e Cosmoprof per un'esperienza di crescita emozionale e professionale. ",
    icon: UserGroupIcon,
  },
];

export default function Servizi() {
  return (
    <div className="bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mb-4 text-lg font-normal text-green-700 lg:text-xl sm:px-16 lg:px-24">
            Tutte le garanzie di cui hai bisogno
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
            Scuola Tao trasforma la tua passione in una professione di successo
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="/assets/images/mondo-servizi-tao.jpg"
            width="300"
            height="375"
            className="mx-auto w-96"
            alt="Tao Group un mondo di servizi"
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute top-1 left-1 h-5 w-5 text-green-700"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
