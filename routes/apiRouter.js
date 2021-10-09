const router = require('express').Router()

const Webdata = require('../model/Webdata')

router.get('/all', (req, res) => {
    res.json({
        "ok": "Super"
    })
})

router.post('/insertSession', async(req, res) => {
    
    const data = await new Webdata(req.body)

    try{
        const response = await data.save()  
        console.log(response)
    }catch(e){
        console.error(e)
    }
    res.status(201).json({"data": "created"})

})

module.exports = router