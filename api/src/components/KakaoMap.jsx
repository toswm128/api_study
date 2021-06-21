import React, { useState, useEffect } from "react";

const { kakao } = window;

const KakaoMap = () => {
  const [pa, setPa] = useState();

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    // var geocoder = new kakao.maps.services.Geocoder();
    // var coord = new kakao.maps.LatLng(37.56496830314491, 126.93990862062978);
    // var callback = function (result, status) {
    //   if (status === kakao.maps.services.Status.OK) {
    //     console.log(
    //       "그런 너를 마주칠까 " + result[0].address.address_name + "을 못가"
    //     );
    //   }
    // };
    // map.addListener(this.map, "click", mouseEvent => {
    //   // 원하는 액션 넣어주기
    //   this.removeMarker();
    //   this.addMarker(mouseEvent.latLng);
    //   setPa(map.getCenter());
    //   console.log(pa);
    // });
    // geocoder.coord2Address();
  }, [setPa]);
  return (
    <div>
      <div
        id="myMap"
        style={{
          width: "500px",
          height: "500px",
        }}
      ></div>
    </div>
  );
};

export default KakaoMap;
