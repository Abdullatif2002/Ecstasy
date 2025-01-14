const express = require('express')
const cors = require('cors')
const { EcstasyRouter} = require('./routes/ecstasy.js')
const { userRouter} = require('./routes/user.js')


const port = 3001
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/', EcstasyRouter)
app.use('/user',userRouter)

app.listen(port,() =>{
    console.log(`Server is listening on port ${port}`)
})