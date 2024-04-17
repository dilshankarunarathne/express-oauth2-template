const authMiddleware = require('./authMiddleware');

// ... other code ...

router.get('/secured', authMiddleware, (req, res) => {
  res.send('This is a secured route');
});

// ... other code ...