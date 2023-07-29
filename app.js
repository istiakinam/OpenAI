const express = require('express')
const { generateMeta, generateImage } = require('./controllers/openaiController')

//setup app
const app = express()
app.listen(4000, () => console.log('Listening in 4000 port'))

//middleware
app.use(express.json())
app.use(express.static('public'))

//routes
app.post('/openai/meta', generateMeta)
app.post('/openai/image', generateImage)