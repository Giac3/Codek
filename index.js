const express = require('express')

const PORT = 4000

const app = express()

app.use(express.static('front'))


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))