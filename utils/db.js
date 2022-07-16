const { getDatabase } = require('firebase/database');
const { initializeApp } = require('firebase/app');

const firebaseConfig = require('./config');
const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);

module.exports = db;

