import "./App.css";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Header from "./componts/ui/header";
import Search from "./componts/ui/search";
import Pegnation from "./componts/ui/Pegnation";
import Charachtergrid from "./componts/charachters/charachtergrid";
import Toggle from "./componts/ui/Toggle";
import { ThemeContext, themes } from "./componts/ui/Theme";
import { useTranslation } from "react-i18next";

const App = () => {
  const [items, setItems] = useState([]);
  const { t, i18n } = useTranslation();
  const [isloading, setIsloading] = useState(true);
  const [query, setquery] = useState("");
  const [currentPage, setcurrentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [theme, setTheme] = useState(themes.darkTheme);
  const [themee, setThemee] = useState("darkTheme");

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  const LanguageChooser = lang => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsloading(false);
    };
    fetchItems();
  }, [query]);

  const pagnate = pageNumber => {
    setcurrentpage(pageNumber);
  };
  const toggleTheme = () =>
    theme === themes.darkTheme
      ? (setTheme(themes.lightTheme), setThemee("lightTheme"))
      : (setTheme(themes.darkTheme), setThemee("darkTheme"));

  return (
    <ThemeContext.Provider value={theme}>
      <body style={theme}>
        <button
          onClick={() => {
            LanguageChooser("en");
          }}
        >
          English
        </button>
        <button
          onClick={() => {
            LanguageChooser("fr");
          }}
        >
          Amharic
        </button>
        <Toggle theme={themee} toggleTheme={toggleTheme}></Toggle>
        <div className="container" style={theme}>
          <Header />
          <Search
            getQuery={q => {
              setquery(q);
            }}
          />
          <Pegnation
            itemsPerPage={postPerPage}
            totalItems={items.length}
            pagnate={pagnate}
          />
          <h1
            style={{
              textAlign: "center",
              color: "green",
              marginBottom: "10%"
            }}
          >
            {t("langugeSet.0")}
          </h1>
          <Charachtergrid items={currentItems} isloading={isloading} />
        </div>
      </body>
    </ThemeContext.Provider>
  );
};

export default App;
