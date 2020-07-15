require('dotenv').config();
//requiring different packages and files to run server and database
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express(),
      ctrl = require('./controller');



app.use(express.json());

app.use(session({
    resave: false, 
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));


//massive set up
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//Authentication endpoints
app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);


//Posts endpoints
app.get('/api/post/:id', ctrl.onePost);
app.post('/api/addPost/:id', ctrl.addPost);
app.get('/api/posts/:id', ctrl.getPosts);

app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))