import React, {useContext} from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppContext } from "./contexts/app/context";
import ContentProducer from "./pages/contentProducer/ContentProducer";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

function Router() {
  const {
    state: { isLoggedIn }
  } = useContext(AppContext);

  // Todo: put the sign in and sign out pages here
  const loggedOutRoutes = (
    <>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </>
  );

  const loggedInRoutes = <Route path="/content-producer" element={<ContentProducer />} />;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        { isLoggedIn ? loggedInRoutes : loggedOutRoutes }
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
