const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//IMPORT ROUTES
const projectRoute = require('./routes/project');

const app = express();

dotenv.config();

//CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => console.log('Connected to MongoDB')
);

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTE MIDDLEWARES
app.use('/api/project', projectRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running in port ${port}`));
