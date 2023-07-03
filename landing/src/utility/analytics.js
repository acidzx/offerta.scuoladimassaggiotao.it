import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";
const GTM_CONTAINER_ID = "GTM-TB6Z4JK";

const analytics = Analytics({
  app: "offerta-tao-landing", // Call this whatever you like.
  plugins: [
    googleTagManager({
      containerId: GTM_CONTAINER_ID,
      enabled: true,
    }),
  ],
});

export default analytics;
