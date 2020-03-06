var express = require('express');
var app = express();

var messages = [
    { text: 'some text', owner: 'Tim' },
    { text: 'other message', owner: 'Jane' },
    { text: 'newest message', owner: 'Greg' }
];

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/messages', (req, res) => {
    res.json(messages);
})

app.post('/message', (req, res) => {
    console.log(req.body);
})

app.listen(1234);