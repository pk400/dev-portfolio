const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const app = express();
let db;

MongoClient.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@portfolio-mt89b.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`, (err, client) => {
  if (err) {
    // console.log('Error connecting to db.', process.env, err)
    console.log(process.env.MONGODB_USER, process.env.MONGODB_PASSWORD, process.env.MONGODB_DBNAME)
    return
  }
  db = client.db(process.env.MONGODB_DBNAME)
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
  });
  client.close()
})

app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/visitorcounter', (req, res) => {
  const collection = db.collection('visitorcounter');
  collection.insertOne({
    'timestamp': new Date()
  }, (err, result) => {
    if (err) {
      console.log('Error submitting query.')
    }
    else {
      res.send(200)
    }
  })
});

app.get('/visitorcounter', (req, res) => {
  const collection = db.collection('visitorcounter');
  collection.countDocuments((err, result) => {
    if (err) {
      console.log('Error with query.')
      return
    }
    res.send({result})
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

