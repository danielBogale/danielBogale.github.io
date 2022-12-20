const express = require('express');
const path = require('path');
//const flash = require('flash'); //express-session is also needed when using flash
const session = require('express-session');
const app = express();

//middleware
app.use(express.urlencoded({extended: true}));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'my secret'
}));

//app.use(flash());

app.get('/', (req, res) => {
    //get current hour
    const date = new Date();
    const hour = date.getHours();

    const style = (hour >= 6 && hour < 18) ? 'day' : 'night';

    //response
    res.send(`
        <DOCTYPE html>
        <html lang="en">
            <head>
                <title>Express</title>
                <link rel="stylesheet" href="/css/${style}.css">
            </head>
            <body>
                <form action="/result" method="post">
                    <label>Name</label>
                    <input type="text" id="name" name="name">
                    <label >Age</label>
                    <input type="number" id="age" name="age">
                    <input type="submit" value="Submit Query">
                </form>
            </body>
        </html>
    `);
});

app.post('/result', (req, res) => {
    const { name, age } = req.body;

    req.session['name'] = name;
    req.session['age'] = age;

    //set message in the flash
    // req.flash('name', name);
    // req.flash('age', age);

    res.redirect(303, '/output'); //default code is 302 and it works without 303 mentioned
});

//create new GET redirect
app.get('/output', (req,res) => {
    const map = new Map();
    for(const key in req.session){
        map.set(key, req.session[key]);
    }

    // let name = "";
    // let age = "";

    // for(let i = 0; i < res.locals.flash.length; i++){
    //     let item = res.locals.flash[i];
    //     if(item.type === 'name')
    //         name = item.message;
    //     else if(item.type === 'age')
    //         age = item.message
    // }
    
    res.send(`Welcome ${map.get('name')} with age ${map.get('age')}`);
    //res.send(`Welcome ${name} with age ${age}`);
});

app.listen(3000, () => {
    console.log('App running on port 3000');
})
