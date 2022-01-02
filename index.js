const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors()); //avoid browser shenaynays
app.use(express.json()); //telling express to read json

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static('../client/build'));
// }

//Func
const mealFetch = async (endpoint, params) => {
  let options = {
    method: "GET",
    //filter, lookup
    url: `https://themealdb.p.rapidapi.com/${endpoint}.php`,
    params: { i: params },
    headers: {
      "x-rapidapi-host": "themealdb.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
