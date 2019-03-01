const express = require('express');
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(9000);

app.get('/', (req, res) => {
    console.log('caralho')
    res.send('buceta')
})