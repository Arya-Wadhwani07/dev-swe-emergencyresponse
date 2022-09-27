// const firebase = require('firebase')
const firebaseConfig = {
    apiKey: "AIzaSyD4bX50s5gvY71LZCZHebqmGc_S-UQhT8A",
    authDomain: "devswemergencyresponse.firebaseapp.com",
    projectId: "devswemergencyresponse",
    storageBucket: "devswemergencyresponse.appspot.com",
    messagingSenderId: "498370827044",
    appId: "1:498370827044:web:474bbfdb8b3419a7a599b1",
    measurementId: "G-MK814HRKE9"
}
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const createUser = async () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const promise = await auth.createUserWithEmailAndPassword(email, password)
    auth.currentUser.getIdToken(true).then((idToken)=>{
        console.log(idToken)
    })
}

const signIn = async()=>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const promise = await firebase.auth().signInWithEmailAndPassword(email, password)
    auth.currentUser.getIdToken(true).then((idToken)=>{
        console.log(idToken)
    })
}