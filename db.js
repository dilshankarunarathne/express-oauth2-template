const mongoose = require('mongoose');

// TODO load from env
mongoose.connect('mongodb://localhost/jwt_auth', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;