const express = require ('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require("./config/database");
dotenv.config();

connectDB();
const app = express();



app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/user', require("./routes/UserRouters"));


app.get("/", (req, res) =>{
    res.status(200).send({
        message: "Server is running",
    });
});

const port = process.env.PORT || 8080;

app.listen(port, () =>{
    console.log(
        `Server is running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`
    )
})