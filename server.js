const express = require('express');
const app = express();
const path = require('path');
require('./server/database/mongoose');
const userRouter = require('./server/routers/user');
const cors = require('cors');

const port = process.env.PORT || 5000;

// enable cors
app.use(cors());

// express-parser middleware:
app.use(express.json());

// Routers definitions:
app.use('/api/',userRouter);

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// Apply frontend to heroku:
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
