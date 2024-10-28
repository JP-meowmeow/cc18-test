const express = require('express')
const app = express()

const port = process.env.PORT || 9002
app.listen(port,()=>console.log('server on',port))