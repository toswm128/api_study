const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const props = ["abandonmentPublic"];

app.use(cors());
app.get("/", async (req, res) => {
  const key =
    "CQv4pHR7JvEc5P3i%2BVlM6j5NLXUMGXEx%2BparKLfR2GLUAzVYvzGK2o7KUjiBgyXOrhZbT%2F5LmgqLfhz9ILHY3Q%3D%3D";

  try {
    const data = await axios(
      `http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?ServiceKey=${key}&bgnde=20140301&endde=20140430&pageNo=1&num${0}fRows=100`
    );
    console.log(data.data.response.body.items);
    res.json({
      items: data.data.response.body,
    });
  } catch (e) {
    res.send("실패");
  }
});

app.listen(5000);
