const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

const PORT = process.env.PORT || 8000;

const app = new express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*"
  })
);
const cityRouter = require('./routes/cityRoute');
const kecamatanRouter = require('./routes/kecamatanRoute');
const siswaRouter = require('./routes/siswaRoute');

app.use('/city', cityRouter);
app.use('/kecamatan', kecamatanRouter);
app.use('/siswa', siswaRouter);



app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`);
});
