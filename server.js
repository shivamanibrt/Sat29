// const eventEmitter = require('events');
import EventEmmiter from "events";
import express from 'express';
import path from 'path'

const app = express();

const __dirname = path.resolve();
console.log(__dirname)
app.use('/', (req, res) => {
    // res.send('<h1>Hello world</h1>')
    res.sendFile(__dirname + '/src/form.html')
})

app.listen(8000, (error) => {
    error && console.log(error);
    console.log(`your server running at http://localhost:${8000}`)
})