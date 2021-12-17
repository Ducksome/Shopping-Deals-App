const express = require("express");
const app = express();
const router = express.Router()

app.use(express.json())

const amazonRouter = require('./routes/amazon')
app.use('/amazon', amazonRouter)

app.listen(8080, () => console.log("Connected on port 8080"))