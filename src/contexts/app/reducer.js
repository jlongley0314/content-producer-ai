export function appReducer(state, action) {
  switch (action.type) {
    case "setIsLoggedIn":
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
}
