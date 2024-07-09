import { createContext, useContext } from "react";


export const ThemeContext = createContext({  // putting default values
    themeMode:"light",
    darkTheme: () => {},
    lightTheme: () => {},

}) 


export const ThemeProvider=ThemeContext.Provider

// can also create custom hooks 
// this hook provides same functionality as ThemeProvider but by using this u need to import this only and access ThemeContest elements ass well
export default function useTheme(){
    return useContext(ThemeContext)
}