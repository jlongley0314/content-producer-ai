import { createContext } from "react";

export const initialAppState = {
    isLoggedIn: false,
}

export const AppContext = createContext({
    state: initialAppState,
    dispatch: () => undefined,
})