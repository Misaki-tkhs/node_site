// MySQLからデータを取得するコーディングです

const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("go to /posts to see posts");
});

app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

app.get("/posts", function(req, res) {
    connection.query("select * from profile", function(
      error,
      results,
      fields
    ) {
      if (error) throw error;
      res.send(results);
    });
  });

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });