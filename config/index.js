const express = require('express')
const cors = require('cors')

const apiRouter = require('../routes/apiRouter')
const userRouter = require('../routes/userRouter')

module.exports = (app) => {

    app.use(express.json())
    app.use('/static', express.static('static'))

    app.use(cors())
    
    app.use('/api', apiRouter)
    app.use('/api', userRouter)

}