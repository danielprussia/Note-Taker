const express = require('express');
const path = require('path');
const { clog } = require('')
const app = express();
const PORT = 3001;

app.use(express.static('public'))

