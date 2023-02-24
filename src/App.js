import React, { useReducer } from "react";
import { AppContext, initialAppState } from "./contexts/app/context";
import { appReducer } from "./contexts/app/reducer";
import Router from "./Router";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialAppState)
  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <Router />
      </AppContext.Provider>
    </>
  );
}

export default App;
