const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../model/User')

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

router.post('/user/register', async (req, res) => {
    const { email, password } = req.body

    //Todo validation fields
    if(!emailRegex.test(email)){
        return res.status(403).json('not valid email adres')
    }

    if(!passRegex.test(password)){
        return res.status(403).json('password must have be 8 character and have at least 1 Uppercase letter, 1 Lowercase letter, 1 number, 1 special character')
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

       return res.status(201).json(JSON.stringify(data))

    }catch(e){
        return res.status(403).json('This user already exist')
    }

})

router.post('/user/login', async (req, res) => {
    const { email, password } = req.body

    const fetchedUser = await User.findOne({ email }).exec()

    if(!fetchedUser) {
        return res.json('Username or password are incorrect')
    }

    const status = await bcrypt.compare(password, fetchedUser.password)

    if(!status){
        return res.json('Username or password are incorrect')
    }

    const payload = {
        id: fetchedUser._id.toString(),
        email: fetchedUser.email
    }

    const token = await jwt.sign({payload}, process.env.JWT_SECRET, { expiresIn: '1h' }) 

    return res.status(200).json(token)
})

module.exports = router