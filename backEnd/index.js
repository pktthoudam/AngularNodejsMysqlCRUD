const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const handler = require('./handler');

const app = express();

app.use(cors());
app.use(bodyparser.json());

// routing
// get all data
app.get('/persons', handler.getPersons);

// get 1 data 
app.get('/persons/:id', handler.getPerson);

// put data 
app.post("/persons", handler.postPerson);

// delete data
app.delete('/persons/:id', handler.deletePerson);

// put data

app.put('/persons/:id', handler.putPerson);



app.listen(3000,(error)=>{
    if (error) throw error;
    console.log("listen in port 3000");
})