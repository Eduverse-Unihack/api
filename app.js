const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('dotenv').config();

const port = 3000;

// routes
const positionRoute = require('./router/position.router');
const rotationRoute = require('./router/rotation.router');
const scaleRoute = require('./router/scale.router');
const userRoute = require('./router/user.router');

app.use('/positions', positionRoute);
app.use('/rotations', rotationRoute);
app.use('/scales', scaleRoute);
app.use('/users', userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
