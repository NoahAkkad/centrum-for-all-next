// pages/_app.tsx

import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store"; 
import { HelmetProvider } from "react-helmet-async";
import { Auth0Provider } from "@auth0/auth0-react";
import { ColorRing } from "react-loader-spinner";
import "../styles/globals.css"; // This is the Next.js equivalent of App.css

// Your components (which may be moved to a global layout if needed)
import Partners from "./components/Partners";
import Links from "./internalLinks/Links";
import SeoServiceComponent from "./components/SeoServiceComponent";
import SeoKonsultationUddevalla from "./blocks/Uddevalla/SeoKonsultationUddevalla";
import FreeConsultation from "./components/FreeConsultation";
import Oppetider from "./components/Oppetider";
import ServicesIconsComp from "./components/ServicesIconsComp";
import Recensioner from "./components/Recensioner";
import Footer from "./components/Footer/Footer";
import ExternaLankar from "./components/externalLinks/ExternaLankar";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <HelmetProvider>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_AUTH_CLIENT_ID}
        redirectUri={typeof window !== "undefined" ? window.location.origin : undefined}
        cacheLocation="localstorage"
      >
        <Provider store={store}>
          <div className="App">
            <Suspense
              fallback={
                <div className="loader-wrapper">
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#4fa94d', '#4fa94d', '#4fa94d', '#4fa94d', '#4fa94d']}
                  />
                </div>
              }
            >
              <Component {...pageProps} />
              {/* The following can be moved to a layout component if needed */}
              <Partners />
              <FreeConsultation />
              <SeoServiceComponent />
              <Oppetider />
              <ServicesIconsComp />
              <Recensioner />
              <Footer />
              <Links />
              <ExternaLankar />
            </Suspense>
          </div>
        </Provider>
      </Auth0Provider>
    </HelmetProvider>
  );
};

export default MyApp;
