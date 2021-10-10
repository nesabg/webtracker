const express = require('express')
const cors = require('cors')

const apiRouter = require('../routes/apiRouter')

module.exports = (app) => {

    app.use(express.json())
    app.use('/static', express.static('static'))

    app.use(cors())
    
    app.use('/api', apiRouter)

}