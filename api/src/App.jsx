import React from "react";
import axios from "axios";
import KakaoMap from "./components/KakaoMap";
import Dog from "./components/Dog";

function App() {
  return (
    <div className="App">
      <div>안녕</div>
      <Dog />
      <KakaoMap />
    </div>
  );
}

export default App;
