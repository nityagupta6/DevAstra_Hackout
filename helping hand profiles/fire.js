// Importing firebase
import { initializeApp } from 'firebase/app'
// import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
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
// const auth=getAuth()
const db=getFirestore()

// Collection reference
const colref=collection(db,'helpers')
// const col2ref=collection(db,'transporters')

const row1=document.querySelector('#row1')
let htmlcontent=""
// console.log(htmlcontent)

getDocs(colref)
  .then((snapshot)=>{
    let users = []
    snapshot.docs.forEach((doc) => {
        // console.log(25)
        users.push({...doc.data()})
    });
    console.log(users)
    // console.log(users[0])

    for(let i=2 ; i<=4 ; i++){
      let temphtml=
      '<li>'+
      '<div class="card" style="width: 18rem;">'+
          '<div class="card-body">'+
            '<h5 class="card-title">'+ users[i].name +'</h5>'+
          '</div>'+
          '<ul class="list-group list-group-flush">'+
            '<li id="salary1" class="list-group-item">'+ users[i].salary +'</li>'+
            '<li id="working1" class="list-group-item">' + 'Working Hours :' + users[i].timing +'</li>'+
            '<li id="area1" class="list-group-item">' + 'Area :' + users[i].area + '</li>'+
          '</ul>'+
          '<div class="card-body">' +
            '<a href="#" class="card-link">Details</a>'+
          '</div>' +
        
        '</div>'+
      "</li>"
      htmlcontent+=temphtml
    }
    row1.innerHTML=htmlcontent
  })