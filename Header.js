import React from "react";

function Header({ loggedIn, handleLoggedInClick, fontSize, setFontSize }) {
  const handleFontSizeIncrease = () => { setFontSize(fontSize=> fontSize + 2) }
  return (
    <div>
    <button onClick={handleLoggedInClick}>
      {loggedIn ? "Log Out" : "Log In"}
    </button>
     <button onClick={handleFontSizeIncrease}>Increase Font Size</button>
    </div>
  );
}

export default Header;
