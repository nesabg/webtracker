require('dotenv').config()

const app = require('express')()
const port = process.env.PORT

console.log(port);

app.get('/', (req, res) =>{
    res.send('Hello`s Webtracker')
})

app.listen(port, console.log(`Server is up! on port ${port}`))