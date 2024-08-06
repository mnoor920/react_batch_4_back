import express from 'express'
import Connection from './database/db.js'
import Router from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 4000




app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


Connection();