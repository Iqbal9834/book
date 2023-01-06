const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./src/services/db.seq')
let environement = require('./src/configs/config')
let bookRoutes = require("./src/routes/book.route")


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Establish database connection
connection.conn()


let PORT  = environement.getValue('PORT')
app.use('/v1/book-directory', bookRoutes);


app.listen(PORT, (error) =>{
    if(!error) console.log("App is listening on port "+ PORT)
    else console.log("Error occurred, server can't start", error);
});
