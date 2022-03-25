const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config(); 


const PORT = process.env.PORT || 8080; 

const serverURI = 'http://localhost:' + PORT;
const mongoURI = process.env.MONGO_URI; 



app.listen(PORT, () => console.log('Server running at: ' + serverURI));

if(!mongoURI) {
    console.log('no connection string found.') 
}else {
    mongoose.connect(mongoURI, () => console.log('Connected to DB'))
}
