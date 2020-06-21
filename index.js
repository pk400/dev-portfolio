const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const app = express();

const client = new MongoClient(process.env.MONGODB_URI, {useNewUrlParser: true});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`)
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/visitorcounter', (req, res) => {
  client.connect(err => {
    const collection = client.db("portfolio").collection("visitorcounter");
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
    client.close();
  });
});

app.get('/visitorcounter', (req, res) => {
  client.connect(err => {
    const collection = client.db("portfolio").collection("visitorcounter");
    collection.countDocuments((err, result) => {
      if (err) {
        console.log('Error with query.')
        return
      }
      res.send({result})
    })
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
