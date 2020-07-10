const express = require('express'),
      app = express(),
      ctrl = require('./controller');



app.use(express.json());

app.listen(4040, () => console.log('server running on 4040'))