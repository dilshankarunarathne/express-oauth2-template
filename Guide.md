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

5. Set up Express.js server

```js
const express = require('express');
const app = express();
app.use(express.json());
```

6. Create a signup route

```js
const bcrypt = require('bcryptjs');
app.post('/signup', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, password: hashedPassword });
    await user.save();
    res.sendStatus(201);
});
```


// 7. Create a login route
const jwt = require('jsonwebtoken');
app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        return res.sendStatus(401);
    }
    const token = jwt.sign({ _id: user._id }, 'secret_key');
    res.send({ token });
});