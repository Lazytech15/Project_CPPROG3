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

  var cc1;
  var cc2;
  var cc3;
  var cc4;
  var cc5;
  var cc6;
  var checksub;
  var fn;
  var fnid;
  var tri;


    
    var sub1_btn = document.getElementById('verify-button');

    let studID = document.getElementById('student-id');
    let fName = document.getElementById('first-name');
    let mI = document.getElementById('middle-initial');
    let lName = document.getElementById('last-name');
    let email = document.getElementById('email');
    let section = document.getElementById('section');
    let password = document.getElementById('password');

    let sub1 = document.getElementById('sub1_verification');
    let sub2 = document.getElementById('sub2_verification');
    let sub3 = document.getElementById('sub3_verification');
    let sub4 = document.getElementById('sub4_verification');
    let sub5 = document.getElementById('sub5_verification');
    let sub6 = document.getElementById('sub6_verification');

    let verif1 = document.getElementById('verified1');
    let verif2 = document.getElementById('verified2');
    let verif3 = document.getElementById('verified3');
    let verif4 = document.getElementById('verified4');
    let verif5 = document.getElementById('verified5');
    let verif6 = document.getElementById('verified6');

    let register_button = document.getElementById('register_button');

try{
function conditionStatement(){
if (sub1.value == ""){
    document.getElementById('pop-up-message').innerHTML="Please Enter Verification First!";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show"); 
    //make label blank just in case when verif code is cleared 
    verif1.value = ' --';
    verif2.value = ' --';
    verif3.value = ' --';
    verif4.value = ' --';
    verif5.value = ' --';
    verif6.value = ' --';
}else if(sub2.value=="" && sub3.value=="" && sub4.value=="" && sub5.value=="" && sub6.value==""){
    sub1_verified();
    checksub=1;
    //make label blank just in case when verif code is cleared 
    verif2.value = ' --';
    verif3.value = ' --';
    verif4.value = ' --';
    verif5.value = ' --';
    verif6.value = ' --';
}else if(sub3.value=="" && sub4.value=="" && sub5.value=="" && sub6.value==""){
    sub1_verified();
    sub2_verified();
    checksub=2;
    //make label blank just in case when verif code is cleared 
    verif3.value = ' --';
    verif4.value = ' --';
    verif5.value = ' --';
    verif6.value = ' --';
}else if(sub4.value=="" && sub5.value=="" && sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    checksub=3;
    //make label blank just in case when verif code is cleared 
    verif4.value = ' --';
    verif5.value = ' --';
    verif6.value = ' --';
}else if(sub5.value=="" && sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    sub4_verified();
    checksub=4;
    //make label blank just in case when verif code is cleared 
    verif5.value = ' --';
    verif6.value = ' --';
}else if(sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    sub4_verified();
    sub5_verified();
    checksub=5;
    //make label blank just in case when verif code is cleared 
    verif6.value = ' --';
}
else if(!sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    sub4_verified();
    sub5_verified();
    sub6_verified();
    checksub=6;
}
else{
    
}

}
 
async function sub1_verified(){
    var ref = doc(db, "GENERATE_CODE", sub1.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc1 = docsnap.data().CourseCode;
        tri = docsnap.data().sem;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        verif1.value = cc1 + " - " + fn;
    }
        
    else{
        verif1.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif1.value = "Verification does not exist";
    }
}
async function sub2_verified(){
    var ref = doc(db, "GENERATE_CODE", sub2.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc2 = docsnap.data().CourseCode;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        verif2.value = cc2 + " - " + fn;
    }
        
    else{
        verif2.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif2.value = "Verification does not exist";
    }
}
async function sub3_verified(){
    var ref = doc(db, "GENERATE_CODE", sub3.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc3 = docsnap.data().CourseCode;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        verif3.value = cc3 + " - " + fn;
    }
        
    else{
        verif3.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif3.value = "Verification does not exist";
    }
}
async function sub4_verified(){
    var ref = doc(db, "GENERATE_CODE", sub4.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc4 = docsnap.data().CourseCode;
        tri = docsnap.data().sem;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        verif4.value = cc4 + " - " + fn;
    }
        
    else{
        verif4.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif4.value = "Verification does not exist";
    }
}
async function sub5_verified(){
    var ref = doc(db, "GENERATE_CODE", sub5.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc5 = docsnap.data().CourseCode;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        verif5.value = cc5 + " - " + fn;
    }
        
    else{
        verif5.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif5.value = "Verification does not exist";
    }
}

async function sub6_verified(){
    var ref = doc(db, "GENERATE_CODE", sub6.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc6 = docsnap.data().CourseCode;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        verif6.value = cc6 + " - " + fn;
    }
        
    else{
        verif6.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif6.value = "Verification does not exist";
    }
}



function SaveRegistrationFrom(){
    try {
        if(studID.value=="" || fName.value=="" || lName.value=="" || password.value==""){
        alert("Please Finish the fill up first");
        }else if(checksub==1){
            var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
                setDoc( 
                ref, {
                studentID : studID.value,
                name : fName.value + " " + mI.value +" "+ lName.value,
                password : password.value,
                trimester : tri,
                subOne : cc1
            })
            document.getElementById('pop-up-message').innerHTML="Registered Successful!";
            document.getElementById('pop-up-message').style.textAlign = "center";
            myPopup.classList.add("show"); 
            cleanUp();
            
        }else if(checksub==2){
            var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
                setDoc( 
                ref, {
                studentID : studID.value,
                name : fName.value + " " + mI.value +" "+ lName.value,
                password : password.value,
                trimester : tri,
                subOne : cc1,
                subTwo : cc2
            })
            document.getElementById('pop-up-message').innerHTML="Registered Successful!";
            document.getElementById('pop-up-message').style.textAlign = "center";
            myPopup.classList.add("show"); 
            cleanUp();
        }else if(checksub==3){
            var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
                setDoc( 
                ref, {
                studentID : studID.value,
                name : fName.value + " " + mI.value +" "+ lName.value,
                password : password.value,
                trimester : tri,
                subOne : cc1,
                subTwo : cc2,
                subThree : cc3
            })
            document.getElementById('pop-up-message').innerHTML="Registered Successful!";
            document.getElementById('pop-up-message').style.textAlign = "center";
            myPopup.classList.add("show"); 
            cleanUp();
        }else if(checksub==4){
            var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
                setDoc( 
                ref, {
                studentID : studID.value,
                name : fName.value + " " + mI.value +" "+ lName.value,
                password : password.value,
                trimester : tri,
                subOne : cc1,
                subTwo : cc2,
                subThree : cc3,
                subFour : cc4
            })
            document.getElementById('pop-up-message').innerHTML="Registered Successful!";
            document.getElementById('pop-up-message').style.textAlign = "center";
            myPopup.classList.add("show"); 
            cleanUp();
        }else if(checksub==5){
            var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
                setDoc( 
                ref, {
                studentID : studID.value,
                name : fName.value + " " + mI.value +" "+ lName.value,
                password : password.value,
                trimester : tri,
                subOne : cc1,
                subTwo : cc2,
                subThree : cc3,
                subFour : cc4,
                subFive : cc5
            })
            document.getElementById('pop-up-message').innerHTML="Registered Successful!";
            document.getElementById('pop-up-message').style.textAlign = "center";
            myPopup.classList.add("show"); 
            cleanUp();
            
        }else if(checksub==6){
            var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
                setDoc( 
                ref, {
                studentID : studID.value,
                name : fName.value + " " + mI.value +" "+ lName.value,
                password : password.value,
                trimester : tri,
                subOne : cc1,
                subTwo : cc2,
                subThree : cc3,
                subFour : cc4,
                subFive : cc5,
                subSix : cc6
            })
            document.getElementById('pop-up-message').innerHTML="Registered Successful!";
            document.getElementById('pop-up-message').style.textAlign = "center";
            myPopup.classList.add("show"); 
            cleanUp();
            
        }

        
    } catch (error) {
        alert(error)
    }
}
        sub1_btn.addEventListener('click',conditionStatement);

            //confirmation for register
        document.getElementById("register_button").addEventListener("click", function() {
            // Ask for confirmation
            var userConfirmation = confirm("Are you sure you want to finish registration? Take note you cannot change your password after registration");

            // Check the user's response
            if (userConfirmation) {
                SaveRegistrationFrom()

            } else {

            }
        });
        
        }catch(Error){
        console.log(Error);
    }
    function cleanUp(){
        studID.value="";
        fName.value="";
        mI.value="";
        lName.value="";
        password.value="";
        sub1.value=""
        sub2.value=""
        sub3.value=""
        sub4.value=""
        sub5.value=""
        sub6.value=""
        verif2.value = ' --';
        verif3.value = ' --';
        verif4.value = ' --';
        verif5.value = ' --';
        verif6.value = ' --';
    }
    closePopup.addEventListener("click", function () {
        myPopup.classList.remove("show");
      });
      window.addEventListener("click", function (event) {
      if (event.target == myPopup) {
        myPopup.classList.remove("show");
      }
      });