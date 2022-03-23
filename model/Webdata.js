const mongoose = require('mongoose')

const WebdataSchema = new mongoose.Schema({
    ip: {
        type: String
    },
    os: {
        type: String
    },
    date: {
        type: String
    },
    browser: {
        type: String
    },
    crds: {
        type: String
    },
    documentTitle: {
        type: String
    }
})

module.exports = mongoose.model('Webdata', WebdataSchema)