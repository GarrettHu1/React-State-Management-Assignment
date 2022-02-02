import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const [fontSize, setFontSize] = useState(12);
  
  //add button to header, initial font 12
  //on click, increment by 2
  //store fontSize as state variable
  //pass into content component
  
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} fontSize={fontSize} setFontSize={setFontSize}/>
      <Content loggedIn={loggedIn} fontSize={fontSize}/>
    </div>
  );
}

export default App;
