const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(session({ resave: false, saveUninitialized: true, secret: 'salt key' }));
app.use('', express.static(path.join(__dirname)));

app.use((req,res,next) =>{
    if(!req.session.list)
        req.session.list = [];
    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));

//routing
app.get('/', (req, res) => {
    if(req.session.name)
        //res.send(`Welcome ${req.session.name}`);
        //res.render('random');
        res.redirect(303, '/random');
    else
        res.redirect(303, '/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    if(req.body.name){
        req.session.name = req.body.name;
        res.redirect(303, '/')
    } else 
        res.redirect(303, '/login');
});

app.get('/random', (req, res) => {
    const { list } = req.session;

    if(list.length >= 10) {
        res.send('I have guessed all possible numbers <a href="/clear">clear</a>');
        return;
    }

    let num = Math.round(Math.random() * 10);

    while(list.includes(num)){
        num = (num + 1) % 10;
    }

    list.push(num);
    res.locals = {num, list};
    res.render('random');
    
});

app.get('/clear', (req, res) =>{
    req.session.list = [];
    res.redirect('back');
});

app.get('/computers', (req, res) => {
    if(req.query.id == 1)
        res.send({
            "cpu": "8 core 4Ghz",
            "ram": "4GB",
            "storage": "4TB NVME",
            "price": "$500"
        });
    if(req.query.id == 2)
        res.send({
            "cpu": "12 core 4Ghz",
            "ram": "8GB",
            "storage": "4TB NVME",
            "price": "$1000"
        });
    if(req.query.id == 3)
        res.send({
            "cpu": "16 core 4Ghz",
            "ram": "16GB",
            "storage": "4TB NVME",
            "price": "$1500"
        });
});

//start app server
app.listen(3000, () => { console.log('App running in 3000'); });

//functions
function getRandom(list){
    let random = Math.round(Math.random() * 10);
    if(list.find(e => e === random))
        random = getRandom(list);
    return random;
}