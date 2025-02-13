const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());


module.exports = app;