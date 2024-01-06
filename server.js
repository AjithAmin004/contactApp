const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

app.use(express.json())
const routes = require('./routes/contactRoute')
const PORT = process.env.PORT || 2000
app.use('/api/v1/contacts',routes)

app.listen(PORT,()=>{
    console.log('server is running on port',PORT)
})