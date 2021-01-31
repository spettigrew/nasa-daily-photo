import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components'
import "./App.css";

const Title = styled.h1`

`
// set useState
function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
// useEffect takes a callback in one of its parameters.
  useEffect(() => {
    // set the axios call for the nasa url
    axios.get('https://fakestoreapi.com/products')
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
       Fake Shopping Cart
     </h1>
     {error && (
       <h2>No products available</h2>
     )}
     {data && !error &&(
       <>
       {/* map over data. For every item in the array(data) */}
       {data.map((product) => (
        //  display the data from the product parameter
        // console.log(product)
        <>
          <p>{product.category}</p>
          <img src={product.image} alt="Item image" />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </>
         ))}
       {/* <h4>{data.date}</h4>
       <img src={data.url} alt="Nasa Satellite Image" />
       <h2>{data.title}</h2>
       <p>{data.explanation}</p> */}
       </>
     )}
    </div>
  );
}

export default App;
