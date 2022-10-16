// Importing firebase
import { initializeApp } from 'firebase/app'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore,collection,getDocs,doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9u8jUmSTSuU-meocjz24hxOV24wD8l8k",
  authDomain: "hackout-b8535.firebaseapp.com",
  projectId: "hackout-b8535",
  storageBucket: "hackout-b8535.appspot.com",
  messagingSenderId: "301251699223",
  appId: "1:301251699223:web:a255c1659bb7441327f252"
};

// Initializing firebase
initializeApp(firebaseConfig)

// Initializing services
const auth=getAuth()
const db=getFirestore()

// Collection reference
const colref=collection(db,'helpers')
const col2ref=collection(db,'transporters')



getDocs(colref)
  .then((snapshot)=>{
    let users = []
    snapshot.docs.forEach((doc) => {
        // console.log(25)
        users.push({...doc.data()})
    });
    console.log(users)
    console.log(users[0])

    
    const salary1=document.querySelector('#salary1')
    salary1.innerHTML=users[0].salary
    const working1=document.querySelector('#working1')
    working1.innerHTML=users[0].timing

    const salary2=document.querySelector('#salary2')
    salary2.innerHTML=users[1].salary
    const working2=document.querySelector('#working2')
    working2.innerHTML=users[1].timing

    const salary3=document.querySelector('#salary3')
    salary3.innerHTML=users[2].salary
    const working3=document.querySelector('#working3')
    working3.innerHTML=users[2].timing
  })