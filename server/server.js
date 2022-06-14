const {MongoClient} = require("mongodb")
const express = require("express")

let db

const app = express()

var cors = require('cors')

app.use(cors())

app.get("/", async (req,res) => {
    const allProperty = await db.collection("auckland_property").find().toArray()
    res.send(allProperty)
})

async function start() {
    const client = new MongoClient("mongodb://admin:admin@127.0.0.1:27017/mission6?&authSource=admin")
    await client.connect()
    db = client.db()
    app.listen(5000)
}
start()