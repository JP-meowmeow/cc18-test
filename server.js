const express = require('express')
const app = express()

const port = process.env.PORT || 9102
app.listen(port,()=>console.log('server on',port))