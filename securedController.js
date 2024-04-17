const authMiddleware = require('./authMiddleware');



router.get('/secured', authMiddleware, (req, res) => {
  res.send('This is a secured route');
});
