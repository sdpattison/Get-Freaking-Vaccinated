const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors');
require('./server/config/mongoose.config');
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, ()=>console.log(`Listening on port: ${port}`));