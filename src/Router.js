import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContentProducer from "./pages/contentProducer/ContentProducer";
import Dashboard from "./pages/dashboard/Dashboard";

// TODO: create a loggedin flow and logged out flow
// logged in flow shows the content producer section and the dashboard
// logged out flow only show the dashboard
// store logged in and logged out in state or in a context

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/content-producer" element={<ContentProducer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
