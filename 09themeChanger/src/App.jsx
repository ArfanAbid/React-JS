import React, { useState,useEffect} from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

const App = () => {
    const [themeMode, setThemeMode] = useState("light")
// these function, we didn't define any thing in these functions in ThemeContext so by defining here function what they do with same name we can achieve functionality of the funtions automatically
    const lightTheme= () =>{
        setThemeMode("light")
    }
    const darkTheme= () =>{
        setThemeMode("dark")
    }

    // actual change in theme is pure javaScript

    useEffect(() => {
        const defaultTheme=document.querySelector('html').classList
        defaultTheme.remove("light","dark")
        defaultTheme.add(themeMode)
    }, [themeMode])
    
  return (
    <>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* theme Buttons here */}
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">{/* Card */}
                <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
