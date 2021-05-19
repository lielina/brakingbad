import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./componts/ui/header";
import Search from "./componts/ui/search";
import Charachtergrid from "./componts/charachters/charachtergrid";

const App = () => {
  const [items, setItems] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [query, setquery] = useState("");

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

  return (
    <div className="container">
      <Header />
      <Search
        getQuery={q => {
          setquery(q);
        }}
      />
      <Charachtergrid items={items} isloading={isloading} />
    </div>
  );
};

export default App;
