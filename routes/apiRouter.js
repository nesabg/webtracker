const router = require('express').Router()

const Webdata = require('../model/Webdata')

router.get('/all', (req, res) => {
    res.json({
        "ok": "Super"
    })
})

router.post('/insertSession', async(req, res) => {
    const data = new Webdata(req.body)

    try{
        const response = await data.save()  
    }catch(e){
        console.error(e)
    }

    res.json(JSON.stringify(response))
    
})

module.exports = router