export function appReducer(state, action) {
    switch (action.type) {
        case 'SetIsLoggedIn':
            return { ...state, isLoggedIn: action.payload }
        default:
            return state;
    }
}