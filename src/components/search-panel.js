import React from "react";

const SearchPanel = () => {
  const serchText = "type your text here";
  const searchStyle = {
    fontSize: "20px"
  };
  return <input style={searchStyle} placeholder={serchText} />;
};

export default SearchPanel;
