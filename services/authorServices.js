var express = require("express");
var authorSchema = require("../schema.js");
var router = express.Router();
var jwt = require("jwt-simple");

router.post("/register", async (request, response) => {
  var unic = await authorSchema.findOne({email:request.body.email})
  if(!!unic)
  {
    return response.status(500).send({ message: "this email used for register" })
  } else {
  var authorSchem = new authorSchema(request.body);
  authorSchem.save((err, result) => {
    if (err) {
      console.log(err);
      return response.status(500).send({ message: err });
    }

    return response.status(201).send({ message: "registered! U can login" });
  });
}
});


router.post("/login", async (request, response) => {
  var unic = await authorSchema.findOne({email:request.body.email})
  if(!unic || unic.password != request.body.password )
  {
    return response.status(500).send({ message: "invalid email or password1" })
  } else {

    var payload = {}
    var token = jwt.encode(payload,'12345')
    return response.status(201).send({ token });
    
  }
  });

var author ={router};

module.exports = author;
