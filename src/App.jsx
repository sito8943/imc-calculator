/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

// @sito/ui
import { Handler, Notification, SplashScreen } from "@sito/ui";

// layouts
import View from "./layouts/View";

// views
const Home = loadable(() => import("./views/Home"));
const NotFound = loadable(() => import("./views/NotFound"));

const App = () => {
  return (
    <Suspense>
      <Handler>
        <SplashScreen
          visible
          logo={
            <div>
              <h1 className="font-bold text-4xl text-plight logo">
                IMC Calculator
              </h1>
            </div>
          }
        />
        <Notification />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<View />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Handler>
    </Suspense>
  );
};

export default App;
