const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const { ref, set, get } = require('firebase/database');
const { v4: uuidv4 } = require('uuid');

router.use((req, res, next) => {
  console.info('API Calling to Rotation route');

  next();
})

router.get('/', async (req, res) => {
  const rotationSnapshot = await get(ref(db, 'rotations'));

  res.json(rotationSnapshot.val());
})

router.post('/', (req, res) => {
  const rotation= req.body;
  set(ref(db, 'rotations/' + uuidv4()), rotation).then(rotation => {
    console.log(rotation);
  });

  res.json()
})

module.exports = router;
