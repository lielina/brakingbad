import React from "react";

const Language = ({ lang, onclick }) => {
  return (
    <div>
      <button onClick={onclick()}>{lang}</button>
    </div>
  );
};

export default Language;
