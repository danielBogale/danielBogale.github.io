const express = require('express');
const path = require('path');
const app = express();

//middleware
app.use(express.urlencoded({extended: true}));
app.use('/css', express.static(path.join(__dirname, 'css')));

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
                    <label >Agee</label>
                    <input type="number" id="age" name="age">
                    <input type="submit" value="Submit Query">
                </form>
            </body>
        </html>
    `);
});

app.post('/result', (req, res) => {
    const { name, age } = req.body;

    res.redirect(303, `/output?name=${name}&age=${age}`); //default code is 302 and it works without 303 mentioned
});

//create new GET redirect
app.get('/output', (req,res) => {
    let name = req.query.name;
    let age = req.query.age;
    if(!name){
        name = "person";
    }  
    if(!age){
        age = "16";
    }
    res.send(`Welcome ${name} with age ${age}`);
});

app.listen(3000, () => {
    console.log('App running on port 3000');
})
