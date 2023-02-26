import React, { useContext } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppContext } from "./contexts/app/context";
import ContentProducer from "./pages/contentProducer/ContentProducer";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

function Router() {
  const {
    state: { isLoggedIn },
  } = useContext(AppContext);

  const loggedInRoutes = (
    <Route path="/content-producer" element={<ContentProducer />} />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        {isLoggedIn && loggedInRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
