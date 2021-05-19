import React from "react";
import CharachterItem from "./CharachterItem";
import Spinner from "../ui/Spinner";

const Charachtergrid = ({ items, isloading }) => {
  return isloading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map(item => (
        <CharachterItem key={item.char_id} item={item}></CharachterItem>
      ))}
    </section>
  );
};

export default Charachtergrid;
