const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://Gabriel:Gabriel@cluster0-lao7e.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());

app.use(routes);


app.listen(3333);




// MongoDB (Não-relacional)
