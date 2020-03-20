const express = require('express');
const cors = require('cors');
const mongoose =require('mongoose');

require('dotenv').config();
const app=express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("utkarshDB ka MONGODB CHAL RAHA HAI");
})

const ExerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', ExerciseRouter); //koi jaega /exervies me toh apna DATA dikhega
app.use('/users', usersRouter);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });
} 

app.listen(port, () => {
    console.log( 'ser ver is running on port: ${port} ')
})