// const tablebody = document.querySelector('#tablebody')
// console.log(52)
// console.log(tablebody)

// Importing firebase
import { initializeApp } from 'firebase/app'
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
const db=getFirestore()

// Collection reference
const colref=collection(db,'consumers')

getDocs(colref)
  .then((snapshot)=>{
    let users = []
    snapshot.docs.forEach((doc) => {
        // console.log(25)
        users.push({...doc.data()})
    });
    console.log(users)
    console.log(users[0])

  })