const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const { ref, set, get } = require('firebase/database');
const { v4: uuidv4 } = require('uuid');

router.use((req, res, next) => {
  console.info('API Calling to User route');

  next();
})

router.get('/', async (req, res) => {
  const userSnapshot = await get(ref(db, 'users'));

  res.json(userSnapshot.val());
})

router.post('/', (req, res) => {
  const user= req.body;
  set(ref(db, 'users/' + uuidv4()), user).then(user => {
    console.log(user);
  });

  res.json()
})

module.exports = router;
