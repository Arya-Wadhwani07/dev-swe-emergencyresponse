const admin = require('firebase-admin')
const {firebaseAdminConfig} =require("../secrets")

admin.initializeApp({
    credential:admin.credential.cert(firebaseAdminConfig)
})