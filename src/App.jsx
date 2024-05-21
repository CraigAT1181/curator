import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

const Home = lazy(() => import("./components/Home"));

export default function App() {
  return (
    <div>
      <Header />
      <main>
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
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
