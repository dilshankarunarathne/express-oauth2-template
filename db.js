const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jwt_auth', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;