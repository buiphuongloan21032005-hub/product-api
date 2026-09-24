require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());


// Trang chủ
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Product API is running'
    });
});


// Healthcheck
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy'
    });
});


// Product API
app.use('/api/products', productRoutes);


const PORT = Number(process.env.PORT) || 3000;
const MONGODB_URI = process.env.MONGODB_URI;


// Kết nối MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => {

        console.log('MongoDB connected');

        const server = app.listen(PORT, '0.0.0.0', () => {
            console.log(`Product API listening on port ${PORT}`);
        });

        server.on('error', (error) => {
            console.error('Server error:', error);
        });

    })
    .catch((error) => {

        console.error('MongoDB connection error:');
        console.error(error);

        process.exit(1);
    });