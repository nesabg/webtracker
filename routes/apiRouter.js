const router = require('express').Router()

const Webdata = require('../model/Webdata')

const { authorization } = require('../controllers/userController')

router.get('/all', authorization, async (req, res) => {

    const data = await Webdata.find()

    res.status(200).json(JSON.stringify(data))
})

router.post('/insertSession', async(req, res) => {

    const { ip, os, browser, documentTitle, crds } = req.body
    
    const data = await new Webdata({
        ip,
        os,
        browser,
        crds,
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

router.delete('/delete/:id', authorization, async(req, res) => {

    try{
        const response = await Webdata.findByIdAndDelete(req.params.id)
    } catch(err) {
        err.kind === 'ObjectId' ? res.status(400).json('Not valid record id') : res.status(500).json(err.kind)
        return
    }
  
    res.status(202).json('Successfully delete the record')
})



module.exports = router