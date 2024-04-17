const mongoose = require('mongoose');

// TODO load from env
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
