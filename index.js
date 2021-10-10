require('dotenv').config()

const app = require('express')()
const mongoose = require('mongoose')

const port = process.env.PORT
const dbUrl = process.env.DB_URL

require('./config')(app)

mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    
    if(err){    
        return console.error('BIT ERROR WITH DB', err)
    }

    app.get('/', (req,res) => {
        res.json({
            "test": "Testov"
        })
    })
    
    app.listen(port, console.log(`Server is up! on port ${port}`))
})