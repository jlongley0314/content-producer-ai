import React from "react";
import AppHeader from "./components/featured/AppHeader";
import Router from "./Router";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <>
      <AppHeader />
      <Router />
    </>
  );
}

export default App;
