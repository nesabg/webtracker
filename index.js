require('dotenv').config()

const app = require('express')()
const mongoose = require('mongoose')

const port = process.env.PORT
const dbUrl = process.env.DB_URL

mongoose.connect(dbUrl, (err) => {
    
    if(err){    
        return console.error('BIT ERROR WITH DB', err)
    }

    app.listen(port, console.log(`Server is up! on port ${port}`))
})