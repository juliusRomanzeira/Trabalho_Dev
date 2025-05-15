const mongoose = require('mongoose');

const dbconfig = 'mongodb+srv://juliusromanzeira:Tarcizinho1@cluster0.otw4je2.mongodb.net/cadastros?retryWrites=true&w=majority&appName=Cluster0';

const connection = mongoose.connect(dbconfig, {
    useNewURLParser: true,
    useUnifiedTopology: true
});

module.exports = connection;
