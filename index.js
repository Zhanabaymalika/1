const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');

const PORT = 8000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://malikazhanabay:Malika@cluster0.rzajo4v.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, () => console.log('server started'));
    }
    catch(e) {
        console.error(e);
    }
}
start();