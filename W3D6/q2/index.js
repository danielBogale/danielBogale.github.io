const express = require('express');
const path = require('path');
const app = express();

//middleware
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {

    //response
    res.render('form');
});

app.post('/result', (req, res) => {
    const { name, age } = req.body;

    res.render('display',{name, age});
});

app.listen(3000, () => {
    console.log('App running on port 3000');
})
