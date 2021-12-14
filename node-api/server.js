const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const req = require("express/lib/request");
const app = express();
const http = require("http").createServer(app);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  credentials : true,
  origin : "*"
}));

var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "codestart2"
});

connection.connect((error) => {
  if(error){
    throw error;
  }

  console.log("MYSQL database is connected")
});

app.get("/api/user/list", (request, response) =>{
  var query = `SELECT * FROM employee_record`;

  connection.query(query, (error, result) => {
      if(error){
        response.status(500).send(error);
        return;
      }

      response.status(200).send(result);
  });
});

app.post("/api/user/create", (request, response) => {
  var firstName = request.body.first_name;
  var lastName = request.body.last_name;
  var emailId = request.body.email_id;
  var age = request.body.age;
  var location = request.body.location;

  var query = `INSERT INTO employee_record (first_name, last_name, eamil_id, location, age) VALUES ('${firstName}', '${lastName}', '${emailId}', '${location}', ${age})`;

  connection.query(query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      result,
      message : "User is created successfully"
    });
  })

});


const port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS Server is running on port 4000");
});