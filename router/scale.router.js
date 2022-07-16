const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const { ref, set, get } = require('firebase/database');
const { v4: uuidv4 } = require('uuid');

router.use((req, res, next) => {
  console.info('API Calling to Scale route');

  next();
})

router.get('/', async (req, res) => {
  const scaleSnapshot = await get(ref(db, 'scales'));

  res.json(scaleSnapshot.val());
})

router.post('/', (req, res) => {
  const scale= req.body;
  set(ref(db, 'scales/' + uuidv4()), scale).then(scale => {
    console.log(scale);
  });

  res.json()
})

module.exports = router;
