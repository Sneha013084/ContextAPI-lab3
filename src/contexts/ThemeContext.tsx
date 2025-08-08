
import React, {createContext, useState} from "react";

//possible theme

export type Theme = "light" | "dark";

//object shape

interface ThemeContextType{
    theme :Theme;
    toggleTheme: () => void
}
// create context with a undefined value

export const ThemeContext = createContext <ThemeContextType | undefined> (undefined);

//create a provider component

export const ThemeProvider : React.FC < {children:React.ReactNode}> =({children}) => {
    const [theme, setTheme] = useState <Theme> ("light")



//function for changing the theme

const toggleTheme =() =>{
    setTheme ((prev) =>(prev ==="light" ? "dark" : "light") );
}
  //
  return (

    <ThemeContext.Provider value={{theme, toggleTheme}}>

        {children}

    </ThemeContext.Provider>
  )
}
