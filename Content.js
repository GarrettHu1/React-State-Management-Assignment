import React from "react";

function Content({ loggedIn, fontSize }) {
  const pStyle = {
    fontSize
  }
  return loggedIn && <p style={pStyle}>CONTENT</p>;
}

export default Content;
