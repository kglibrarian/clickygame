const express = require('express')
const app = express();
const PORT = process.env.PORT || 3001; 
const bodyParser = require('body-parser')


//define middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());




//sart the API server
app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}`);
})
