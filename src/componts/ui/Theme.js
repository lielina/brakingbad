import React from "react";
export const themes = {
  lightTheme: {
    background: "white",
    color: " black"
  },

  darkTheme: {
    background: " black",

    color: " white"
  }
};
export const ThemeContext = React.createContext(themes.darkTheme);
export default ThemeContext;
