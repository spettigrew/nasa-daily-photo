import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  useEffect(async () => {
    const data = await fetch('https://api.nasa.gov/planetary/apod');
    return await data.json();
  }, []);
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;