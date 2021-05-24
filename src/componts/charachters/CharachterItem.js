import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import styeld from "styled-components";

import ThemeContext from "../ui/Theme";

const CharachterItem = ({ item }) => {
  const { t, i18n } = useTranslation();
  const themes = useContext(ThemeContext);

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back" style={themes}>
          <h1>{item.name}</h1>
          <ul>
            <li style={themes}>
              <strong>{t("langugeSet.1")}</strong> {item.portrayed}
            </li>
            <li>
              <strong>{t("langugeSet.2")}:</strong> {item.nickname}
            </li>
            <li>
              <strong>{t("langugeSet.3")}:</strong> {item.birthday}
            </li>
            <li>
              <strong>{t("langugeSet.4")}:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharachterItem;
