const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/say", (req, res) => {
  // res.status(200).send("Anoosh Says " + req.query.keyword);

  axios
    .get(
      `https://us-central1-systemintegration.cloudfunctions.net/greeting?keyword=${req.query.keyword}`
    )
    .then(function (response) {
      // handle success
      console.log(response.body);
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.status(500).send("Error occured!!!");
    });
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});
