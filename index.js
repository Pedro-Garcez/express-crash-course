const express = require('express');

const app = express();

//when we deploy we will likely have the port in an environment variable so we check that first
//otherwise, run on 5000 
const PORT = process.env.PORT || 5000;

app.listen();