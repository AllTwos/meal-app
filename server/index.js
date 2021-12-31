const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors()); //avoid browser shenaynays
app.use(express.json()); //telling express to read json

//Func
const mealFetch = async (endpoint, params) => {
  let options = {
    method: "GET",
    //filter, lookup
    url: `https://themealdb.p.rapidapi.com/${endpoint}.php`,
    params: { i: params },
    headers: {
      "x-rapidapi-host": "themealdb.p.rapidapi.com",
      "x-rapidapi-key": "512890c351msh297ca543355b06cp15cccbjsn1461259a5ccb",
    },
  };

  try {
    const res = await axios.request(options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

app.get("/", (req, res) => {
  res.send("Server on /");
});

app.post("/api/meal", async (req, res) => {
  console.log(req.body);
  const data = await mealFetch(req.body.endpoint, req.body.params);
  res.json({ status: "ok", data: data });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
