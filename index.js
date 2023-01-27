const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

require('dotenv').config()


const PORT = process.env.PORT || 4000

const app = express()

const limiter = rateLimit({
    windowMS: 5*60*1000,
    max: 100,

})

app.use(limiter);
app.set('trust proxy', 1)

app.use(express.static('front'))

app.use('/api', require('./routes/index.js'))


app.use(cors())
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))