/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import "./page.css";
import ThemeContext from "../ui/Theme";
const Pegnation = ({ itemsPerPage, totalItems, pagnate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const themes = useContext(ThemeContext);
  return (
    <div className="pageContainer">
      {pageNumbers.map(numbers => (
        <li className="page">
          <a href="#" onClick={() => pagnate(numbers)} style={themes}>
            {numbers}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Pegnation;
