import express from 'express';
import path from 'path'
const port = 8000;


const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(express.urlencoded());

app.get('/registration', (req, res) => {
    res.sendFile(__dirname + '/src/registration.html')
})
app.post('/registration', (req, res) => {
    res.sendFile(__dirname + '/src/registration.html')
})

app.get('/', (req, res) => {
    console.log(req.query, 'Post triggered')
    res.sendFile(__dirname + '/src/form.html')
})
app.post('/', (req, res) => {
    console.log(req.body, 'Post triggered')
    res.sendFile(__dirname + '/src/form.html')
})




app.listen(port, (error) => {
    console.log(`Server is running at http://localhost:${port}`)
    error && console.log(error);
});