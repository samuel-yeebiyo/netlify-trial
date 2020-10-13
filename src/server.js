const express = require('express')
const app = express()
const serverless = require('serverless-http')

const router  = express.Router()

app.use(express.json())


router.get('/', (req,res)=>{
    res.json({
        'title':"This is the netlify app"
    })
})

app.use('/.netlify/functions/server', router)

module.exports.handler = serverless(app)