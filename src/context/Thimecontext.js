
import { createContext, useReducer } from "react"
import { TOGGL_THEME } from "./ActionTyep";

import { themereduser } from "./reducer/thime.reducer";

const initialState = {
    theme: "light"
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themereduser, initialState);

    
    const toggtetheme = (val) => {
        console.log(val);

        const newTheme = val === "light" ? "dark" : "light"

        dispatch({ type: TOGGL_THEME, payload: newTheme })

    }
    return (
        <ThemeContext.Provider
            value={{
                ...state, 
                toggtetheme
             }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
