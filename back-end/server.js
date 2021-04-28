require('dotenv').config({ path: '.env' });
// packages
const express = require('express');
// const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const contactRoutes = require('./routes/contact.routes');

const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(cors());
if (process.env.NODE_ENV === 'development') app.use(morgan('tiny'));
// Db Connexion
mongoose
  .connect('mongodb://localhost/Contact_database', {
     useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Mongo Db Connected'))
  .catch((err) => console.log(`error connection to the DataBase : ${err}`));
// Routes
app.use('/api/contact', contactRoutes);

// app express
app.listen(PORT, () => {
  console.log(`app listning : localhost:${PORT}`);
});
