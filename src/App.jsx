import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SessionProvider } from "./components/SessionContext";

import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";

const Home = lazy(() => import("./components/Home"));
const ObjectPage = lazy(() => import("./components/ObjectPage"));
const YourExhibit = lazy(() => import("./components/YourExhibit"));

export default function App() {
  return (
    <div className="font-body">
      <SessionProvider>
        <Header />
        <main className="px-16 py-6">
          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/home"
                element={<Home />}
              />
              <Route
                path="/exhibit/:objectID"
                element={<ObjectPage />}
              />
              <Route
                path="/your-exhibit"
                element={<YourExhibit />}
              />
              <Route
                path="/*"
                element={<ErrorPage />}
              />
            </Routes>
          </Suspense>
        </main>
      </SessionProvider>
    </div>
  );
}
