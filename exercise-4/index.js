const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());

let products = [
    {
        id: uuidv4(),
        name: "iPhone 13",
        manufacturer: "Apple Inc",
        category: "phone",
        description: "New iPhone 13",
        price: 819.9
    },
    {
        id: uuidv4(),
        name: "iPhone 13 mini",
        manufacturer: "Apple Inc",
        category: "phone",
        description: "New iPhone 13 mini",
        price: 929.9
    },
    {
        id: uuidv4(),
        name: "iPhone 13 Pro",
        manufacturer: "Apple Inc",
        category: "phone",
        description: "New iPhone 13 Pro",
        price: 1169.9
    },
    {
        id: uuidv4(),
        name: "iPhone 13 Pro Max",
        manufacturer: "Apple Inc",
        category: "phone",
        description: "New iPhone 13 Pro Max",
        price: 1279.9
    },
    {
        id: uuidv4(),
        name: "iPad Pro 12,9 (5th generation)",
        manufacturer: "Apple Inc",
        category: "tablet",
        description: "This is new iPad Pro",
        price: 1249.9
    },
    {
        id: uuidv4(),
        name: "Apple Watch Series 6",
        manufacturer: "Apple Inc",
        category: "watch",
        description: "This is new Apple Watch Series 6",
        price: 429.9
    }
];

let users = [
    {
        userID: uuidv4(),
        name: "Andreas Avetisian",
        age: 18,
        address: "Kalervontie 1B 21/2",
        phoneNumber: "+79210343815",
        shoppingCart: [],
        invoices: []
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Exercise 4, Andreas Avetisian DIN20SP</h1>' + 
            '<h2>This is "Apple Inc" Products web page.</h2><br>' + 
            '<h2>Use Postman to create/get/modyfy products, create/get user and search for products.</h2><br>' + 
            '<h2>To get all products use "/products". To get all users use "/users".</h2>');
});

// Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Get single product
app.get('/products/:id', (req, res) => {
    const result = products.find(d => d.id === req.params.id);
    res.json(result);
});

// Create new product
app.post('/products', (req, res) => {
    products.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    })
    res.send('Product created');
});

// Modify a product
app.put('/products/:id', (req, res) => {
    const result = products.find(d => d.id === req.params.id);
    result.name = req.body.name;
    result.manufacturer = req.body.manufacturer;
    result.category = req.body.category;
    result.description = req.body.description;
    result.price = req.body.price;
    res.send('Product modified');
});

// Delete a single product
app.delete('/products/:id', (req, res) => {
    products = products.filter((product) => product.id !== req.params.id);
    res.send("Product with the id " + req.params.id + " deleted");
})

// Delete all products
app.delete('/products', (req, res) => {
    products.splice(0, products.length);
    res.send('All product deleted');
})

//Search
app.get('/search', (req, res) => {
    let searchText = "watch";
    let result = products.filter((product) => 
    product.name.includes(searchText) || 
    product.name.toLowerCase().includes(searchText) ||
    product.manufacturer.includes(searchText) || 
    product.manufacturer.toLowerCase().includes(searchText) ||
    product.category.includes(searchText) || 
    product.category.toLowerCase().includes(searchText))
    res.send(result);
})

// Create new user
app.post('/users', (req, res) => {
    users.push({
        userID: uuidv4(),
        name: req.body.name,
        age: req.body.age,
        adress: req.body.adress,
        phoneNumber: req.body.phoneNumber
    })
    res.send('User created');
});

// Get all users
app.get('/users', (req, res) => {
    if (users.length === 0) {
        res.send('<h1>No users yet. Use POST method to create a new user.</h1>' + 
                '<h2>You can use this form: { "id": "uuidv4()", "name": "" , "age": "" , "adress": "" , "phoneNumber": "" }</h2>');
    } else {
        res.json(users);
    }
});

// Delete user
app.delete('/users/:id', (req, res) => {
    users = users.filter((users) => users.userID !== req.params.id);
    res.send("User with the id '" + req.params.id + "' deleted");
})

app.listen(port, () => {
    console.log(`Server has been listening on port ${port}...`);
})
