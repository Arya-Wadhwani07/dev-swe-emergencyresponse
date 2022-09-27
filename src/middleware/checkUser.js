const admin = require('firebase-admin')
require('./firebaseadmin')

const checkUser = async(req,res,next)=>{
    if(!req.header("Authorization") || req.header("Authorization")==undefined){
        throw new Error("USER NOT AUTHORISED!")
    }
    const idToken = req.header("Authorization").replace("Bearer ","")
    // console.log(idToken)
    try{
        admin.auth().verifyIdToken(idToken).then((decodedToken)=>{
            req.user = decodedToken
            // console.log(decodedToken)
            next()
        })
    } catch(e){
        console.log(e)
    }
}

module.exports =checkUser