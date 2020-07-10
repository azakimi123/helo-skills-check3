require('dotenv').config();
//requiring different packages and files to run server and database
const express = require('express'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express(),
      ctrl = require('./controller');



app.use(express.json());



//massive set up
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
})
app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))