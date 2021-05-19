import React from "react";
import { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, settext] = useState("");
  const onChange = q => {
    settext(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="from-control"
          placeholder="search charachter"
          value={text}
          onChange={e => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
