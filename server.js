const express = require('express')
const request = require('request')
const app = express()

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

app.get('/img', function (req, res) {
    let url = "https://url"
    console.log('/img going to url', url)
    auth = "Basic " + Buffer.from("-----:----").toString("base64")
    request.get({
        url: url,
        headers: {
            "Authorization": auth
        }
    }).pipe(res)
});

app.get('/', (req, res) => {
    res.send(`Trust me. You are the best`)
})

app.listen(3000, () => {
    console.log(`Yes, we are listening at port 3000`)
})