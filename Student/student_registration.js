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
  firebase.initializeApp(firebaseConfig);

  import {
    getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField
  }
  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  const client = firebase.firestore();
  const db = getFirestore();

  var Course_Code;
  let GenerateContainer = [];
  let codecontainer = [];
  let dataID = [];
  let newdataID = [];
  let IDrecieved = [];
  let checksub = 0;
  let teacherName;

    const sub1_btn = document.getElementById('verify-button');
    const nextbutton = document.getElementById('next_button');
    const backbutton = document.getElementById('back_button');
    const addsub = document.getElementById("addsub_button");

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
    let sub7 = document.getElementById('sub7_verification');
    let sub8 = document.getElementById('sub8_verification');
    let sub9 = document.getElementById('sub9_verification');
    let sub10 = document.getElementById('sub10_verification');
    let sub11 = document.getElementById('sub11_verification');
    let sub12 = document.getElementById('sub12_verification');

try{
function conditionStatement(){
            
            if (studID.value===""){
                document.getElementById('pop-up-message').innerHTML="Please finish fill up";
                document.getElementById('pop-up-message').style.textAlign = "center";
                myPopup.classList.add("show");
            }else{
                
                client.collection("GENERATE_CODE").get().then((querySnapshot) => {
                querySnapshot.forEach((GenerateData) => {
                const data = GenerateData.data();
                dataID = GenerateData.id;
                newdataID.push(GenerateData.id);
                const studentID = GenerateData.data().StudentID;
                teacherName = GenerateData.data().TeacherName;
                Course_Code = GenerateData.data().CourseCode;
                GenerateContainer.push({ ...data, dataID});
                IDrecieved.push(dataID);
                
                code01verified();
                code02verified();
                code03verified();
                code04verified();
                code05verified();
                code06verified();
                code07verified();
                code08verified();
                code09verified();
                code010verified();
                code011verified();
                code12verified();
               
            })   
        })
    }
}
function code01verified(){
    let Gcode01 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub1.value
    })
    if (Gcode01){
        codecontainer.push(Gcode01.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        GenerateContainer = [...new Set(GenerateContainer)];
        checksub=1;
        document.getElementById('verified1').value = Gcode01.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub2_verification").style="display: inline-flex;";
        document.getElementById("verified2").style="display:inline-flex;";
    }else{
        document.getElementById('verified1').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}
function code02verified(){
    let Gcode02 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub2.value
    })
    if (sub2.value ===""){
        //don nothing
    }else
    if(Gcode02){
        codecontainer.push(Gcode02.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        checksub=2;
        document.getElementById('verified2').value = Gcode02.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub3_verification").style="display: inline-flex;";
        document.getElementById("verified3").style="display:inline-flex;";
    }else{
        document.getElementById('verified2').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
        console.log(Gcode02);
    }
}
function code03verified(){
    let Gcode03 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub3.value
    })
    if (sub3.value ===""){
        //don nothing
    }else
    if(Gcode03){
        codecontainer.push(Gcode03.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        checksub=3;
        document.getElementById('verified3').value = Gcode03.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub4_verification").style="display: inline-flex;";
        document.getElementById("verified4").style="display:inline-flex;";
    }else{
        document.getElementById('verified3').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}
function code04verified(){
    let Gcode04 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub4.value
    })
    if (sub4.value ===""){
        //don nothing
    }else
    if (Gcode04){
        codecontainer.push(Gcode04.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        GenerateContainer = [...new Set(GenerateContainer)];
        checksub=4;
        document.getElementById('verified4').value = Gcode04.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub5_verification").style="display: inline-flex;";
        document.getElementById("verified5").style="display:inline-flex;";
    }else{
        document.getElementById('verified4').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}
function code05verified(){
    let Gcode05 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub5.value
    })
    if (sub5.value ===""){
        //don nothing
    }else
    if(Gcode05){
        codecontainer.push(Gcode05.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        checksub=5;
        document.getElementById('verified5').value = Gcode05.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub6_verification").style="display: inline-flex;";
        document.getElementById("verified6").style="display:inline-flex;";
    }else{
        document.getElementById('verified5').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}
function code06verified(){
    let Gcode06 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub6.value
    })
    if (sub6.value ===""){
        //don nothing
    }else
    if(Gcode06){
        codecontainer.push(Gcode06.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        checksub=6;
        document.getElementById('verified6').value = Gcode06.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub7_verification").style="display: inline-flex;";
        document.getElementById("verified7").style="display:inline-flex;";
    }else{
        document.getElementById('verified6').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}
function code07verified(){
    let Gcode07 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub7.value
    })
    if (sub7.value ===""){
        //don nothing
    }else
    if (Gcode07){
        codecontainer.push(Gcode07.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        GenerateContainer = [...new Set(GenerateContainer)];
        checksub=7;
        document.getElementById('verified7').value = Gcode07.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub8_verification").style="display: inline-flex;";
        document.getElementById("verified8").style="display:inline-flex;";
    }else{
        document.getElementById('verified7').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}
function code08verified(){
    let Gcode08 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub8.value
    })
    if (sub8.value ===""){
        //don nothing
    }else
    if(Gcode08){
        codecontainer.push(Gcode08.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        checksub=8;
        document.getElementById('verified8').value = Gcode08.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub9_verification").style="display: inline-flex;";
        document.getElementById("verified9").style="display:inline-flex;";
    }else{
        document.getElementById('verified8').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}
function code09verified(){
    let Gcode09 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub9.value
    })
    if (sub9.value ===""){
        //don nothing
    }else
    if(Gcode09){
        codecontainer.push(Gcode09.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        checksub=9;
        document.getElementById('verified9').value = Gcode09.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub10_verification").style="display: inline-flex;";
        document.getElementById("verified10").style="display:inline-flex;";
    }else{
        document.getElementById('verified9').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}
function code010verified(){
    let Gcode10 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub10.value
    })
    if (sub10.value ===""){
        //don nothing
    }else
    if (Gcode10){
        codecontainer.push(Gcode10.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        GenerateContainer = [...new Set(GenerateContainer)];
        checksub=10;
        document.getElementById('verified10').value = Gcode10.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub11_verification").style="display: inline-flex;";
        document.getElementById("verified11").style="display:inline-flex;";
    }else{
        document.getElementById('verified10').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}
function code011verified(){
    let Gcode11 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub11.value
    })
    if (sub5.value ===""){
        //don nothing
    }else
    if(Gcode11){
        codecontainer.push(Gcode11.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        checksub=11;
        document.getElementById('verified5').value = Gcode11.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
        document.getElementById("sub6_verification").style="display: inline-flex;";
        document.getElementById("verified6").style="display:inline-flex;";
    }else{
        document.getElementById('verified5').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}
function code12verified(){
    let Gcode12 = GenerateContainer.find(function(GenerateCode){
        return GenerateCode.dataID === sub12.value
    })
    if (sub12.value ===""){
        //don nothing
    }else
    if(Gcode12){
        codecontainer.push(Gcode12.CourseCode);
        codecontainer = [...new Set(codecontainer)];
        checksub=12;
        document.getElementById('verified12').value = Gcode12.CourseCode + " " + teacherName;
        document.getElementById("next_button").style="display: block;";
    }else{
        document.getElementById('verified12').value = "Please Check your verification";
        document.getElementById("next_button").style="display: none;";
    }
}


async function SaveRegistrationFrom(){
    const currentData =[];
    let subjectsData =[];
    var ref = doc(db, "STUDENT_LIST","STUDENT_DATA", studID.value, password.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        currentData.push(docsnap.data().subjects);
        currentData.forEach((subject) => {
            subjectsData = [...subject, ...codecontainer];
        });
        
    }else{
        subjectsData = [...codecontainer];
    }
    try {
        if(studID.value =="" && fName.value =="" && lName.valuev =="" && password.value ==""){
        alert("Please Finish the fill up first");
        ShowPersonalData();
        }else{
            for (let i=0;i<checksub;i++){
                var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,password.value);
                setDoc( 
                ref, {
                    studentID : studID.value,
                    name : fName.value + " " + mI.value +" "+ lName.value,
                    password : password.value,
                    subjects : subjectsData.flat().filter((subject) => subject),
            })
            const collectionRef = client.collection("GENERATE_CODE");
            const docRef = collectionRef.doc(newdataID[i]);
            docRef.delete()
            document.getElementById('pop-up-message').innerHTML="Registered Successful!";
            document.getElementById('pop-up-message').style.textAlign = "center";
            myPopup.classList.add("show");
            document.getElementById("student-id").style="display: block;";
            document.getElementById("password").style="display: none;";
            document.getElementById("addsub_button").style="display: none;";
            HidePersonalData(); 
            ShowSubjects();
            cleanUp(); 
            }
        }
        
    } catch (error) {
        document.getElementById('pop-up-message').innerHTML="Please Check the data you input before proceeding";
        document.getElementById('pop-up-message').style.textAlign = "center";
        myPopup.classList.add("show");
        document.getElementById("password").style="display: none;";
        HidePersonalData();
        ShowSubjects();
        cleanUp();
    }
    
}
async function checkingaccount(){
    if(password.value ==""){
        document.getElementById('pop-up-message').innerHTML="Please enter password first!";
        document.getElementById('pop-up-message').style.textAlign = "center";
        myPopup.classList.add("show");
    }else if(lName.value==""){
        //do nothing
    }else{
    var ref = doc(db, "STUDENT_LIST","STUDENT_DATA", studID.value, password.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var pass = docsnap.data().password;
        if (pass === password.value){
            document.getElementById('pop-up-message').innerHTML="It's look like you already registered, it will save to add subjects";
            document.getElementById('pop-up-message').style.textAlign = "center";
            myPopup.classList.add("show");
            document.getElementById("register_button").style="display: none;";
            document.getElementById("subjects-warning").style="display: none;";
            document.getElementById("addsubject-warning").style="display: block;";
            document.getElementById("addsub_button").style="display: block;";
            const addname  = docsnap.data().name;
            const Toseperate = addname.split(" ");
            fName.value = Toseperate[0];
            mI.value = Toseperate[1];
            lName.value = Toseperate[2];
            fName.readOnly=true;
            mI.readOnly=true;
            lName.readOnly=true;
        }
    }else{
        const collectionRef = client.collection("STUDENT_LIST");
        const docRef = collectionRef.doc("STUDENT_DATA");
        const inputSubcollectionName = studID.value;
        // Fetch the subcollection and check its size
        docRef.collection(inputSubcollectionName).get().then((querySnapshot) => {
            if (querySnapshot.size > 0) {
                document.getElementById('pop-up-message').innerHTML="Its seems that you already have an account, please check your password";
                document.getElementById('pop-up-message').style.textAlign = "center";
                myPopup.classList.add("show");
                password.value="";
                fName.value="";
                lName.value="";
                mI.value="";
            } else {
                SaveRegistrationFrom();
            }
        });
        }
    }
}
        addsub.addEventListener('click', SaveRegistrationFrom);
        password.addEventListener('change',checkingaccount);
        sub1_btn.addEventListener('click',conditionStatement);
        nextbutton.addEventListener('click', function() {
            ShowPersonalData();
            document.getElementById("password").style="display: block;";
            document.getElementById("student-id").style="display: none;";
        });
        backbutton.addEventListener('click', function() {
            HidePersonalData();
            ShowSubjects();
            document.getElementById("next_button").style="display: block;";
            document.getElementById("password").style="display: none;";
            document.getElementById("student-id").style="display: block;";
        });
            //confirmation for register
        document.getElementById("register_button").addEventListener("click", function() {
            // Ask for confirmation
            var userConfirmation = confirm("Are you sure you want to finish registration? Take note you cannot change your password after registration");
            // Check the user's response
            if (userConfirmation) {
                checkingaccount();
                

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
        document.getElementById("verified1").value="";
        document.getElementById("sub2_verification").style="display: none;";
        document.getElementById("verified2").style="display: none;";
        document.getElementById("sub3_verification").style="display: none;";
        document.getElementById("verified3").style="display: none;";
        document.getElementById("sub4_verification").style="display: none;";
        document.getElementById("verified4").style="display: none;";
        document.getElementById("sub5_verification").style="display: none;";
        document.getElementById("verified5").style="display: none;";
        document.getElementById("sub6_verification").style="display: none;";
        document.getElementById("verified6").style="display: none;";
    }
    closePopup.addEventListener("click", function () {
        myPopup.classList.remove("show");
      });
      window.addEventListener("click", function (event) {
      if (event.target == myPopup) {
        myPopup.classList.remove("show");
      }
      });
      
      function HidePersonalData(){
        document.getElementById("personal-data-container").style="display: none;";
        document.getElementById("register_button").style="display: none;";
        document.getElementById("personal-datawarning").style="display: none;";
        }
      function ShowPersonalData(){
        document.getElementById("subjects-container").style="display: none;";
        document.getElementById("verify-button").style="display: none;";
        document.getElementById("subjects-warning").style="display: none;";
        document.getElementById("next_button").style="display: none;";
        document.getElementById("personal-data-container").style="display: flex;";
        document.getElementById("register_button").style="display: block;";
        document.getElementById("personal-datawarning").style="display: block;";
        document.getElementById("back_button").style="display: block;";
        document.getElementById("password").style="display: block;"
        }
      function ShowSubjects(){
        document.getElementById("subjects-container").style="display: block;";
        document.getElementById("verify-button").style="display: block;";
        document.getElementById("subjects-warning").style="display: block;";
        document.getElementById("back_button").style="display: none;";
        document.getElementById("password").style="display: none;"
        }
