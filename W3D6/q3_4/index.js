const express = require('express');
const path = require('path');
const app = express();

let productList = [{id: 1, name: "Laptop", description: "Laptop", price: 500, quantity: 10},
                    {id: 2, name: "Mouse", description: "Mouse", price: 20, quantity: 5},
                    {id: 3, name: "Monitor", description: "Monitor", price: 100, quantity: 4},
                    {id: 4, name: "Iphone", description: "Iphone", price: 800, quantity: 4},
                    {id: 5, name: "Macbook", description: "Macbook", price: 1000, quantity: 15},
                    {id: 6, name: "Ipad", description: "Ipad", price: 700, quantity: 6}];

let shoppingCart = new Map();

//middleware
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    //response
    res.render('shop', {productList});
});

app.get('/product', (req, res) => {
    const id = parseInt(req.query.id);
    const item =productList.filter(e => e.id === id)[0];

    res.render('product', {item});
});

app.post('/addToCart', (req, res) => {
    const {name, price} = req.body;
    let item = productList.find(e => e.name === name && e.quantity > 0);

    if(item){
        //if item is already in shopping cart
        if(shoppingCart.has(name)){
            let item = shoppingCart.get(name);
            item.quantity ++;
            item.price += parseInt(price);
        } else {
            let item = {name, quantity: 1, price: parseInt(price)};
            shoppingCart.set(name, item);
        }

        //decreate avail quantity
        item.quantity --;

        res.redirect(303, "/cart");
    } else
        console.log('Item out of stock!');
});

app.get("/cart", (req, res) => {
    res.render('shoppingcart', {items: [...shoppingCart.values()]});
});

app.listen(3000, () => {
    console.log('App running on port 3000');
})

