const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//parse aplication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});