const express = require('express')

const apiRouter = require('../routes/apiRouter')

module.exports = (app) => {

    app.use(express.json())
    app.use('/api', apiRouter)
    
}