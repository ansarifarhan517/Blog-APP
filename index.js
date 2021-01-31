const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome To First page' })
})

app.use('/api/accounts',require('./api/accounts'));
app.use('/api',require('./api/listing-api'));

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})