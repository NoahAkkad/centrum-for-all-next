"use client";
import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { getContentData } from "./redux-toolkit/content/contentSlice";
import dynamic from "next/dynamic";
import store from './redux-toolkit/store';

 // Adjust the path to your store

const MarketingPage = lazy(() => import("./pages/InfoPages/MarketingPage"));
const ForFragan = lazy(() => import("./components/ForFragan"));
const Home = lazy(() => import("./pages/Home/Home"));
const BookingModal = lazy(() => import("./components/BookingModal"));
const SeoKonsultationGoteborg = lazy(() => import("./blocks/Goteborg/SeoKonsultationGoteborg"));
const SeoKonsultationUddevalla = lazy(() => import("./blocks/Uddevalla/SeoKonsultationUddevalla"));
const Adspages = lazy(() => import("./components/AdsPages"));
const Error = lazy(() => import("./pages/Error/Error"));

const HomePage = () => {
  const contentData = useSelector(getContentData);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Home videoText={contentData?.videoText} />
        {/* The rest of your lazy-loaded components can be placed here based on your design */}
      </Suspense>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;