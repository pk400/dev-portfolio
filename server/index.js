const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  const VisitorSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now }
  });
  const Visitor = mongoose.model('Visitor', VisitorSchema);

  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
  });

  app.use(express.static(path.join(__dirname, '../client/build')));

  app.post('/visitorcounter', (req, res) => {
    visitor = new Visitor()
    visitor.save()
    return res.sendStatus(200)
  });

  app.get('/visitorcounter', (req, res) => {
    Visitor.countDocuments((err, result) => {
      res.send({result})
    })
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
});


