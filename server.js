// const eventEmitter = require('events');
import EventEmmiter from "events";
import express from 'express';
import path from 'path'
const port = 8000;

const app = express();

const __dirname = path.resolve();

app.use('/', (req, res) => {
    // res.send('<h1>Hello world</h1>')
    res.sendFile(__dirname + '/src/form.html')
})

app.listen(port, (error) => {
    console.log(`Server is running at http://localhost:${port}`)
    error && console.log(error);
});