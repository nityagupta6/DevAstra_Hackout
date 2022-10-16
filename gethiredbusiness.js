// Importing firebase
import { initializeApp } from 'firebase/app'
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore,collection,addDoc } from 'firebase/firestore'

// let menuIcon = document.querySelector('.menuIcon');
//         let nav = document.querySelector('.overlay-menu');

//         menuIcon.addEventListener('click', () => {
//             if (nav.style.transform != 'translateX(0%)') {
//                 nav.style.transform = 'translateX(0%)';
//                 nav.style.transition = 'transform 0.2s ease-out';
//             } else { 
//                 nav.style.transform = 'translateX(-100%)';
//                 nav.style.transition = 'transform 0.2s ease-out';
//             }
//         });


//         // Toggle Menu Icon ========================================
//         let toggleIcon = document.querySelector('.menuIcon');

//         toggleIcon.addEventListener('click', () => {
//             if (toggleIcon.className != 'menuIcon toggle') {
//                 toggleIcon.className += ' toggle';
//             } else {
//                 toggleIcon.className = 'menuIcon';
//             }
//         });

let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });


        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });
        // image input
        function readURL(input) {
            if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function(e) {
                $('.image-upload-wrap').hide();
                $('.file-upload-image').attr('src', e.target.result);
                $('.file-upload-content').show();
                $('.image-title').html(input.files[0].name);
              };
          
              reader.readAsDataURL(input.files[0]);
          
            } else {
              removeUpload();
            }
          }
          
          function removeUpload() {
            $('.file-upload-input').replaceWith($('.file-upload-input').clone());
            $('.file-upload-content').hide();
            $('.image-upload-wrap').show();
          }
          $('.image-upload-wrap').bind('dragover', function() {
            $('.image-upload-wrap').addClass('image-dropping');
          });
          $('.image-upload-wrap').bind('dragleave', function() {
            $('.image-upload-wrap').removeClass('image-dropping');
          });

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
const colref=collection(db,'transporters')

const signupbutton=document.querySelector('#submitbutton')
const signupform=document.querySelector('#signupform')

signupbutton.addEventListener('click',(e)=>{
  e.preventDefault()
  const email=document.querySelector('#mail').value
  const name=document.querySelector('#name').value
  const useraddress=document.querySelector('#user_add').value
  const password=document.querySelector('#password').value
  const phone=document.querySelector('#phone').value
  const vehicle=document.querySelector('#vehicle').value
  const description=document.querySelector('#write_to_us').value
  const area=document.querySelector('#area').value
  const timing=document.querySelector('#job-time').value
  const salary=document.querySelector('#ex-salary').value
  const gender=document.querySelector('#gender').value
  

//   console.log('here')
//   console.log(name)
//   console.log(phone)
//   console.log(email)
//   console.log(password)
//   console.log(useraddress)
// console.log(vehicle)
// console.log(description)
// console.log(area)
// console.log(timing)
// console.log(gender)

  createUserWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
      console.log(cred.user)
      addDoc(colref,{
        uid: cred.user.uid,
        name: name,
        address: useraddress,
        phonenumber: phone,
        salary: salary,
        vehicle: vehicle,
        description: description,
        gender: gender,
        timing: timing,
        area: area
      })
      .then(()=>{
        signupform.reset()
      })
    })
    .catch((err)=>{
      console.log(err)
    })

//   console.log('clicked')
// })

})