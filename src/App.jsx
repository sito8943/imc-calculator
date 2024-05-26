/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

// @sito/ui
import { Handler, Notification, SplashScreen } from "@sito/ui";

// layouts
import View from "./layouts/View";

// views
const Home = loadable(() => import("./views/Home"));
const Type = loadable(() => import("./views/Type"));
const NotFound = loadable(() => import("./views/NotFound"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Suspense>
      <Handler>
        <SplashScreen
          visible={loading}
          logo={
            <div>
              <h1 className="font-bold text-2xl logo">
                EatSmart
              </h1>
            </div>
          }
        />
        <Notification />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<View />}>
              <Route path="/" element={<Home />} />
              <Route path="/types/:type" element={<Type />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Handler>
    </Suspense>
  );
};

export default App;
