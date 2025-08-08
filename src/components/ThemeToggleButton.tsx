
//create a component for theme toggle button

import React,{useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// type checking and props definitions

export const ThemeToggleButton: React.FC = () =>{

    //getting context from theme context(will give initial object state)

    const themeContext = useContext(ThemeContext);

  // if the component used outside of the provider, shows error
 if (!themeContext) {
    throw new Error("ThemeToggleButton must be used within a ThemeProvider");
  }

  // destructuring : extraxting from the context

  const {theme, toggleTheme } = themeContext;

  return (

    <button onClick={toggleTheme}> Switch to {theme ==="light" ? "dark" : "light"} mode</button>
  );

}