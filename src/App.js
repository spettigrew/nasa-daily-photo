import React, { useState, useEffect } from "react";
import axios from 'axios';
// import styled from 'styled-components'
import "./App.css";

// set useStat
function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
// useEffect takes a callback in one of its parameters.
  useEffect(() => {
    // set the axios call for the nasa url
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
        // console.log(res) check the response on the data from the axios call
        // set state to the response data
        setData(res.data)
      })
      // catch for errors in response
      .catch(error => {
        console.log(error)
        setError(error)
      })
  },[]); 
  console.log(data)

  return (
    <div className="App">
     <h1>
       Nasa - Photo of the Day
     </h1>
     {error && (
       <h2>No photo available</h2>
     )}
     {data && !error &&(
       <>
       <h4>{data.date}</h4>
       <img src={data.url} alt="Nasa Satellite Image" />
       <h2>{data.title}</h2>
       <p>{data.explanation}</p>
       </>
     )}
    </div>
  );
}

export default App;