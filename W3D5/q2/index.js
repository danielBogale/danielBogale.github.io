const express = require('express');
const app = express();

//middleware
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {

    //response
    res.send(`
        <form action="/result" method="post">
            <label>Name</label>
            <input type="text" id="name" name="name">
            <label >Age</label>
            <input type="number" id="age" name="age">
            <input type="submit" value="Submit Query">
        </form>
    `);
});

app.post('/result', (req, res) => {

    const { name, age } = req.body;

   // console.log(req.body);
   // console.log(req);

    res.send(`Welcome ${name} ${age}`);
});

app.listen(3000, () => {
    console.log('App running on port 3000');
})