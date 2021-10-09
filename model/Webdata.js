const mongoose = require('mongoose')

const WebdataSchema = new mongoose.Schema({
    ip: {
        type: String
    },
    os: {
        type: String
    },
    dateCome: {
        type: String
    }
})

module.exports = mongoose.model('Webdata', WebdataSchema)