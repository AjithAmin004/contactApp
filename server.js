const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const routes = require('./routes/contactRoute');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

const PORT = process.env.PORT || 2000

connectDb()
app.use(express.json())
app.use('/api/v1/contacts',routes)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log('server is running on port',PORT)
})