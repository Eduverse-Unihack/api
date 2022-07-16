const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const { ref, set, get } = require('firebase/database');
const { v4: uuidv4 } = require('uuid');

router.use((req, res, next) => {
  console.info('API Calling to Position route');

  next();
})

router.get('/', async (req, res) => {
  const positionSnapshot = await get(ref(db, 'positions'));

  res.json(positionSnapshot.val());
})

router.post('/', (req, res) => {
  const position = req.body;
  set(ref(db, 'positions/' + uuidv4()), position).then(position => {
    console.log(position);
  });

  res.json()
})

module.exports = router;
