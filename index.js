const express = require('express')
const redoc = require('redoc-express')

const port = 3002
const app = express()

app.get('/v0.0.json', (req, res) => {
    res.sendFile('/output/v0.0.json', { root: "." })
})

app.get('/', redoc({
    title: "Finexio API Local Preview",
    specUrl: "/v0.0.json",
    redocOptions: {
        expandResponses: "200,201"
    }
}))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})