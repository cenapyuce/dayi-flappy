const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
  app.use(
    "/audio",
    express.static(path.resolve(__dirname + `/audio`))
  );

  app.use(
    "/img",
    express.static(path.resolve(__dirname + `/img`))
  );

app.get("/", (request, response) => {
  response.sendFile(__dirname + "index.html");
});
