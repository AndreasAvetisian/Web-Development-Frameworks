const express = require('express');
const app = express();
const port = 4000;
const productData = require('./data.json');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/products', (req, res) => {
    res.json(productData);
})

// Create new product
app.post('/products', (req, res) => {
    console.log(req.body);
    productData.items.push({
        id: uuidv4(),
        name: req.body.name,
        ship: req.body.ship,
        price: req.body.price,
        rating: req.body.rating
    })
    console.log('Product created');
    res.send(productData);
});

// Delete a single product
app.delete('/products/:id', (req, res) => {
    const result = productData.items.findIndex(d => d.id === req.params.id);
    if (result !== -1) {
        productData.items.splice(result, 1);
        console.log('Product deleted')
        res.send(productData);
    } else {
        console.log('Item not found');
        res.send(productData);
    }
})

app.listen(port, () => {
    console.log('Express listening on port ' + port)
})