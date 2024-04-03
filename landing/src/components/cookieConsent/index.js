import {
  CookieConsentBanner,
  triggerCookieConsentBanner,
} from "@porscheofficial/cookie-consent-banner-react";

import { getCookie, hasCookie, setCookie, deleteCookie } from "cookies-next";
import analytics from "@/utility/analytics";
import { useContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Link from "next/link";

function identity(value) {
  return value;
}

const SetUidLocalStorage = () => {
  const [uid, setUid] = useState(null); // aggiungo uno stato per uid

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUid = localStorage.getItem("uid_kosmos_website");
      if (!storedUid) {
        const newUid = uuidv4();
        localStorage.setItem("uid_kosmos_website", newUid);
        setUid(newUid);
      } else {
        // altrimenti usa quello esistente
        setUid(storedUid);
      }
    }
    // aggiorno lo stato di uid con il valore da localStorage
  }, []);
  return uid; // ritorno il valore di uid
};

const initConsent = async ({ acceptedCategories, uid }) => {
  // console.log(acceptedCategories.acceptedCategories.includes("analytics"));
  if (acceptedCategories.acceptedCategories.includes("analytics")) {
    analytics.plugins.enable(["google-tag-manager"]).then(() => {
      /* Plugins are now loaded into the page */
      /* Track a page view */

      //   analytics.track("consent", "update", {
      //     ad_storage: "granted",
      //     ad_user_data: "granted",
      //     ad_personalization: "granted",
      //     analytics_storage: "granted",
      //   });

      if (typeof window.dataLayer !== "undefined") {
        gtag("consent", "update", {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          analytics_storage: "granted",
        });
      }
      analytics.page();
    });

    // console.log("Analytics accepted! on init");
  } else {
    analytics.plugins.enable(["google-tag-manager"]).then(() => {
      /* Plugins are now loaded into the page */
      /* Track a page view */
      //   analytics.track("consent", "default", {
      //     ad_storage: "denied",
      //     ad_user_data: "denied",
      //     ad_personalization: "denied",
      //     analytics_storage: "denied",
      //   });

      if (typeof window.dataLayer !== "undefined") {
        gtag("consent", "default", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "denied",
        });
      }
    });
  }
};

const restoredConsent = ({ acceptedCategories }) => {
  // console.log("started");
  // console.log(acceptedCategories);
  if (acceptedCategories.includes("analytics")) {
    analytics.plugins.enable(["google-tag-manager"]).then(() => {
      /* Plugins are now loaded into the page */
      /* Track a page view */

      //   analytics.track("consent", "update", {
      //     ad_storage: "granted",
      //     ad_user_data: "granted",
      //     ad_personalization: "granted",
      //     analytics_storage: "granted",
      //   });
      //   analytics.page();

      if (typeof window !== "undefined") {
        gtag("consent", "update", {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          analytics_storage: "granted",
        });
        analytics.page();
      }
    });

    // console.log("Analytics accepted! on restore");
  } else {
    analytics.plugins.enable(["google-tag-manager"]).then(() => {
      /* Plugins are now loaded into the page */
      /* Track a page view */
      //   analytics.track("consent", "default", {
      //     ad_storage: "denied",
      //     ad_user_data: "denied",
      //     ad_personalization: "denied",
      //     analytics_storage: "denied",
      //   });
      if (typeof window !== "undefined") {
        gtag("consent", "default", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "denied",
        });
      }
    });
  }
};

function gtag() {
  if (typeof window !== "undefined") {
    window?.dataLayer?.push(arguments);
  }
}

const CookieConsent = ({ children }) => {
  const uid = SetUidLocalStorage();

  const categoryExpressed = hasCookie("kosmos_website_cookie_consent");

  /*  console.log(categoryExpressed); */

  let categoryChoosen = "";

  if (categoryExpressed) {
    categoryChoosen = getCookie("kosmos_website_cookie_consent");
  }

  return (
    <>
      <main>{children}</main>

      <CookieConsentBanner
        handlePreferencesUpdated={(acceptedCategories) =>
          initConsent({
            acceptedCategories,

            uid: uid,
          })
        }
        handlePreferencesRestored={restoredConsent({
          acceptedCategories: categoryChoosen,
        })}
        btnLabelAcceptAndContinue="Accetta e continua"
        btnLabelSelectAllAndContinue="Seleziona tutto"
        btnLabelOnlyEssentialAndContinue="Solo Cookie Tecnici"
        btnLabelPersistSelectionAndContinue="Salva e continua"
        contentSettingsDescription="Puoi decidere quali cookie permettere, selezionando le rispettive opzioni sottostanti. Nota che la tua selezione potrebbe influire sulle funzionalità del servizio."
        cookieName="kosmos_website_cookie_consent"
        availableCategories={[
          {
            description:
              "Permette a te di navigare, usare le funzioni base e settare preferenze.",
            key: "technically_required",
            label: "Cookies tecnici e necessari",
            isMandatory: true,
          },
          {
            description:
              "Ci permette di determinare come il visitatore interagisce con il servizo, migliorare le performance e l'espienza utente.",
            key: "analytics",
            label: "Cookies analitici",
          },
          {
            description:
              "Ci permette di presentare contenuti e offerte di interesse basato sulle rilevante preferenza dell'utente.",
            key: "marketing",
            label: "Marketing cookies",
          },
        ]}
      >
        <span className="block text-xs leading-1">
          Per fornire le migliori esperienze, utilizziamo tecnologie come i
          cookie per memorizzare e/o accedere alle informazioni del dispositivo.
          <br />
          <span className="block py-2">
            Il consenso a queste tecnologie ci permetterà di elaborare dati come
            il comportamento di navigazione o ID unici su questo sito.
          </span>{" "}
          Non acconsentire o ritirare il consenso può influire negativamente su
          alcune caratteristiche e funzioni.
        </span>{" "}
        <span className="block py-2">
          <button
            className="text-green-600"
            onClick={() => triggerCookieConsentBanner({ showDetails: true })}
            type="button"
          >
            <span className="text-xs leading-1"> Clicca qui</span>
          </button>{" "}
          <span className="text-xs leading-1">
            per scegliere le tue impostazioni dettagliamente o revocare il
            consenso per il futuro. Per maggiori informazioni, leggi la nostra{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </span>
        </span>
      </CookieConsentBanner>
    </>
  );
};

export default CookieConsent;
