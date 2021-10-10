const router = require('express').Router()

const Webdata = require('../model/Webdata')

router.get('/all', (req, res) => {
    res.json({
        "ok": "Super"
    })
})

router.post('/insertSession', async(req, res) => {

    const { ip, os, browser, documentTitle } = req.body
    
    const data = await new Webdata({
        ip,
        os,
        browser,
        date: new Date(),
        documentTitle
    })

    console.log(data)

    try{
        const response = await data.save()  
    }catch(e){
        console.error(e)
    }
    res.status(201).json({"data": "created"})

})

module.exports = router