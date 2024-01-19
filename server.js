const express = require ('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

app.use(express.json())