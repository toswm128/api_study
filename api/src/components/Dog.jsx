import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Dog = () => {
  const [dog, setDog] = useState([]);
  const getApi = async () => {
    const response = await axios(
      `http://localhost:5000`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setDog(response.data.items.items.item);
  };
  return (
    <div>
      <button onClick={getApi}>열기</button>
      <div className="contnet">
        {dog.map((current, key) => {
          return (
            <div className="item" key={key}>
              <div>나이 :{current.age}</div>
              <div>보호소 : {current.careAddr}</div>
              <div>전화번호 :{current.careNm}</div>
              <div>털색 :{current.colorCd}</div>
              <div>입양 가능 : {current.processState}</div>
              <div>특이사항 : {current.specialMark}</div>
              <div>몸무게 : {current.weight}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dog;
