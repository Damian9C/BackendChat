const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const URI = process.env.MONGOURL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is active');
})
