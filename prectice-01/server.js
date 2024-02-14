require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')

const app = express()
const route = express.Router()

// const file = (req, res) =>  {
//     fs.readFile('demofile1.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     })
// }

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//  get request
// 1 =======
route.get('/', (req, res, next) => {
    const file = path.join(__dirname, '/index.html')

    res.sendFile(file)
})

// 2 =======
route.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get success',
        data: [{
            name: 'riya parmar',
            course: 'full-stack dev'
        },
        {
            name: 'rahul',
            course: 'node js'
        }]
    })
})

// 3 =========
route.get('/getData', (req, res, next) => {
    res.status(200).json({
        message: 'data get successs',
        data: {
            email: 'riya@gmail.com'
        }
    })
})

// 4 =========
route.get('/getUser', (req, res, next) => {
    res.status(200).json({
        message: 'get user success',
        data: {
            userName: 'riya parmar',
            email: 'riya@gmail.com',
            password: 'riya@123'
        }
    })
})

// 5 =========
route.get('/getAdmin', (req, res, next) => {
    res.status(200).json({
        message: 'get admin success',
        data: {
            adminName: 'riya parmar',
            email: 'riya@gmail.com',
            password: 'riya@123'
        }
    })
})


// post request 
// 1 ========
route.post('/', (req, res, next) => {

    let { name, course } = req.body
    console.log(req.body);

    res.status(200).json({
        message: 'data added succesfully',
        data: { name, course }
    })
})

// 2 ========
route.post('/post', (req, res, next) => {
    res.status(200).json({
        message: 'added success'
    })
})

// 3 ========
route.post('/add', (req, res, next) => {
    const body = req.body

    let num1 = parseInt(body.num1)
    let num2 = parseInt(body.num2)

    let sum = num1 + num2

    res.status(200).json({
        message: 'sum success',
        sum
    })
})

//  4 ========
route.post('/postData', (req, res, next) => {
    const body = req.body

    let fname = body.fname
    let lname = body.lname

    console.log(body);

    let join = fname + lname
    res.status(200).json({
        message: 'data add successfully',
        join
    })
})

//  5 =======


// routes use
app.use(route)

// server
http.createServer(app).listen(process.env.PORT, () => { console.log('server start'); })

// app.listen(3001, () => {
//     console.log('server start');
// })