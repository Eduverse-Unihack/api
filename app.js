const express = require('express')
const app = express()
const port = 3000
const firebaseConfig = require('./config');
const { initializeApp } = require('firebase/app');
const firebaseApp = initializeApp(firebaseConfig);
const { getDatabase, ref, set } = require('firebase/database');

const bodyParser = require('body-parser');
// const { default: axios } = require('axios');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

require('dotenv').config();

app.get('/', (req, res) => {
  const db = getDatabase(firebaseApp);
  // console.log(db);
  // set(ref(db, 'users/' + '1133'), {
  //   username: 'man',
  //   email: 'man@eduverse.io',
  //   profile_picture : ''
  // }).then(user => {
  //   console.log(user);
  // });
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
