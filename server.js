import express from 'express';
import path from 'path';
import fs from 'fs';
const port = 8000;


const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const fn = __dirname + '/userList.text';

app.get('/registration', (req, res) => {
    res.sendFile(__dirname + '/src/registration.html')
})

app.post('/registration', (req, res) => {
    const { email, password } = req.body;
    const dataStr = email + "|" + password + "\n";

    fs.appendFile(fn, dataStr, (error) => {
        error && console.log(error)
    });
    res.sendFile(__dirname + '/src/registration.html');
})

app.get('/', (req, res) => {
    console.log(req.query, 'Post triggered')
    res.sendFile(__dirname + '/src/form.html')
})
app.post('/', (req, res) => {
    console.log(req.body, "Clg ")
    const { email, password } = req.body;
    const str = email + "|" + password;

    // read the file and get content as a string 
    fs.readFile(fn, (error, data) => {
        error && console.log(error);
        console.log(data.toString())
        const userLsitStr = data.toString().split("\n");
        // console.log(userLsitStr);
        if (userLsitStr.includes(str)) {
            return res.send("<h1> Logged in succesfully </ h1>")
        }
        res.send("<h1> Invalid login </h1 > Login again")
    })
    // check if the incomming data exist as a string in the data
})


app.listen(port, (error) => {
    console.log(`Server is running at http://localhost:${port}`)
    error && console.log(error);
});