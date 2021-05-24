import { useState } from "react";

const Theam = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return [theme, toggleTheme];
};
export default Theam;
