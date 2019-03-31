const path = require('path');
//third party imports
const express = require('express');
const mongoose = require('mongoose');
//Routes
const items = require('./routes/api/items');

const app = express();

//Body Parser Middleware
app.use(express.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo needs further investigation 
mongoose.connect(db,{ useNewUrlParser: true }) 
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//Use routes
app.use('/api/items',items);

//serve static assets if in production
if (process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));
