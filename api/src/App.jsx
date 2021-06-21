import React from "react";
import axios from "axios";

const convert = require("xml-js");

const key =
  "CQv4pHR7JvEc5P3i%2BVlM6j5NLXUMGXEx%2BparKLfR2GLUAzVYvzGK2o7KUjiBgyXOrhZbT%2F5LmgqLfhz9ILHY3Q%3D%3D";
const url = `/sido${key}`;

const getApi = async () => {
  fetch(url, {
    method: "GET",
    headers: { "Access-control-allow-origin": "*" },
  })
    .then(res => res.text())
    .then(res => {
      if (res) {
        console.log(res);
      }
    });
};

function App() {
  return (
    <div className="App">
      <div>안녕</div>
      <button onClick={getApi}></button>
    </div>
  );
}

export default App;
