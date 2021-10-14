const router = require('express').Router()
const bcrypt = require('bcrypt')

const User = require('../model/User')

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/g

router.post('/user/register', async (req, res) => {
    const { email, password } = req.body

    //Todo validation fields
    if(!emailRegex.test(email)){
        return res.json('not valid email adres')
    }

    if(!passRegex.test(password)){
        return res.json('password must have be 8 character and have at least 1 Uppercase letter, 1 Lowercase letter, 1 number, 1 special character')
    }

    //Todo adding bcrypt hashing password

    const salt = await bcrypt.genSalt(+process.env.SALT)
    const hashedPass = await bcrypt.hash(password, salt)

    const currentUser = new User({
        email,
        password: hashedPass
    })

    try{
       const data = await currentUser.save()

       return res.json(JSON.stringify(data))

    }catch(e){
        return res.json(e)
    }

})

module.exports = router