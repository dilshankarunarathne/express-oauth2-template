1. Initialize a new Node.js project
This is done through the terminal with the command `npm init -y`

2. Install necessary dependencies
`npm install express mongoose jsonwebtoken bcryptjs`

3. Set up a MongoDB connection using Mongoose

```js
const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost/jwt_auth', { useNewUrlParser: true, useUnifiedTopology: true }
);
```

4. Create a User model with Mongoose
```js
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});
const User = mongoose.model('User', UserSchema);
```



