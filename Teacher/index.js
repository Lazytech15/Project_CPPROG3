import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFWV4k9-XmABgNGmleyXLTcuEn41rMHK8",
    authDomain: "hackathon-26f12.firebaseapp.com",
    databaseURL: "https://hackathon-26f12-default-rtdb.firebaseio.com",
    projectId: "hackathon-26f12",
    storageBucket: "hackathon-26f12.appspot.com",
    messagingSenderId: "1071789540560",
    appId: "1:1071789540560:web:6227da20f3a3a3a9ab0ad5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import {
    getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField
  }
  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  
  const db = getFirestore();

  
  //getting the value from input box and button
  const uname = document.getElementById("teacher_id");
  const upass = document.getElementById("password");
  const logbtn = document.getElementById("teacher_btn");


  //checking if there is an error in the program
  try
  {

  //checking the the data from firestore
  async function GetaDocument(){
  if(uname.value == "admin" && upass.value=="password"){
    window.open("admin_form.html");
    window.close();
    }else if(uname.value=="" || upass.value==""){
      document.getElementById('pop-up-message').innerHTML="Please fill up first!";
      document.getElementById('pop-up-message').style.textAlign = "center";
      myPopup.classList.add("show");
    }else{
    var ref = doc(db, "TEACHER_LIST", uname.value);
    const docsnap = await getDoc(ref);
  //if the value is true then assign the collect data ('password') to a variable pass
    if(docsnap.exists()){
        var pass = docsnap.data().password;
  //if the value from the variable pass is equal to the value of upass that the user input/    
        if(pass == upass.value){
          //assigning data from firestore to variable
          var teacher_name = docsnap.data().TeacherName;
          var teacher_id = docsnap.data().TeacherID;
          //make it global to be able to access in different js file.
          localStorage.setItem('teacher_name', teacher_name);
          localStorage.setItem('teacher_id', teacher_id);
          
          //opening the student_UI
          window.location.assign("Teacher_Workplace.html");

      
        }
        
        else{
            document.getElementById('pop-up-message').innerHTML="Please check your password";
            document.getElementById('pop-up-message').style.textAlign = "center";
            myPopup.classList.add("show");
            upass.value="";
          }
              
    }
    else{
        document.getElementById('pop-up-message').innerHTML="Teacher ID and Password doesn't exist!";
        document.getElementById('pop-up-message').style.textAlign = "center";
        myPopup.classList.add("show");
        uname.value="";
        upass.value="";
    }
  }
}
  logbtn.addEventListener('click', GetaDocument);
}
//view the error in console
catch(Error){
  console.log(Error);
}
closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
if (event.target == myPopup) {
    myPopup.classList.remove("show");
}
});