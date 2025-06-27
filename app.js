const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json())


const cors = require('cors')

app.use(cors())

const MONGODB_URL = "mongodb://127.0.0.1:27017/task_api";

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log(`${MONGODB_URL} is connected`);
  })
  .catch((er) => {
    console.log(er.message);
  });

// app.get('/' , (req , res) =>{
//     res.send("Welcome World")
// })

app.use("/public", express.static("public"));

app.use(require('./routes/ProductRoute'))
app.use(require('./routes/UserRoute'))
app.use(require('./routes/CartRoute'))

app.listen(8000, () => {
  console.log("Connect");
});
