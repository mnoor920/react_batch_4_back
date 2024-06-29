import express from 'express'
import Connection from './database/db.js'
import Router from './routes/route.js'
const app = express()
const port = 4000






app.use('/', Router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


Connection();