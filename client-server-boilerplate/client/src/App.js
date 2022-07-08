import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';


function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    /* NOTE for connecting server and client if both are hosted in same sever
     * in package.json for client side we add a key value of "proxy", this 
     * allows for react app to check the server folder and go to its route
    */
    axios.get("/api/test/data").then(response => {
      console.log(response.data);
    });

  }, []);


  return (
    <div className="App">
      HELLO WORLD
    </div>
  );
}

export default App;