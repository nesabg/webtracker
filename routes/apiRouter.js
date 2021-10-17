const router = require('express').Router()

const Webdata = require('../model/Webdata')

const { authorization } = require('../controllers/userController')

router.get('/all', authorization, async (req, res) => {

    const data = await Webdata.find()

    res.status(200),json(JSON.stringify(data))
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

    try{
        const response = await data.save()  
    }catch(e){
        console.error(e)
    }
    res.status(201).json({"data": "created"})

})



module.exports = router