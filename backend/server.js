const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecom', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Product = mongoose.model('Product', {
    name: String,
    price: Number,
    image: String
});

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.listen(5000, () => {
    console.log('✅ Backend running on http://localhost:5000');
});
