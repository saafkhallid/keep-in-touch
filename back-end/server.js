
      require('dotenv').config()

      const cors = require('cors')

      const connectDB=require("./config/db")

      const express = require('express')

      const bodyParser= require('body-parser')

      const contactRoute=require('./routes/contactroute')



connectDB();

const app = express()
// parse application/x-www-form-urlencoded
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.get("/api/users", (req, res) => {
    res.json({ message: "bonjour khalid saaf" });
  });
// Route middlewere

app.use('/api/contact', contactRoute);





const PORT=process.env.PORT ||5000;
 
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))