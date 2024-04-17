const express = require('express');
const app = express();
const db = require('./db');
const authController = require('./authController');

app.use(express.json());
app.use('/auth', authController);

app.listen(3000, () => console.log('Server started on port 3000'));
