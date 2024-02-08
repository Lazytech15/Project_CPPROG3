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

  var fn,fnid,studentemail,tri, Course_Code;
  let codecontainer = [];
  let dataID = [];
  let newdataID = [];
  let checksub = 0;
  const AllSubsData = [];

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
    const GenerateContainer = [];
    client.collection("GENERATE_CODE").get().then((querySnapshot) => {
        querySnapshot.forEach((GenerateData) => {
            const data = GenerateData.data();
            dataID = GenerateData.id;
            newdataID.push(GenerateData.id);
            const studentID = GenerateData.data().StudentID;
            const teacherName = GenerateData.data().TeacherName;
            Course_Code = GenerateData.data().CourseCode;
            GenerateContainer.push({ ...data, dataID});

            // Check if studentID is equal to inputValue
            if(dataID === sub1.value && studentID === studID.value ) {
                codecontainer.push(Course_Code);
                checksub=1;
                document.getElementById('verified1').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("sub2_verification").style="display: inline-flex;";
                document.getElementById("verified2").style="display:inline-flex;";
            } else if(dataID === sub2.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=2;
                document.getElementById('verified2').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("sub3_verification").style="display: inline-flex;";
                document.getElementById("verified3").style="display:inline-flex;";
            } else if(dataID === sub3.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=3;
                document.getElementById('verified3').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("sub4_verification").style="display: inline-flex;";
                document.getElementById("verified4").style="display:inline-flex;";
            }else if(dataID === sub4.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=4;
                document.getElementById('verified4').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("sub5_verification").style="display: inline-flex;";
                document.getElementById("verified5").style="display:inline-flex;";
            }else if(dataID === sub5.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=5;
                document.getElementById('verified5').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("sub6_verification").style="display: inline-flex;";
                document.getElementById("verified6").style="display:inline-flex;";
            }else if(dataID === sub6.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=6;
                document.getElementById('verified6').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("subjects-image").style="display:none";
                document.getElementById("verif-form-row2").style="display:block;";
                document.getElementById("sub7_verification").style="display: inline-flex;";
                document.getElementById("verified7").style="display:inline-flex;";
            }else if(dataID === sub7.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=7;
                document.getElementById('verified7').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("sub8_verification").style="display: inline-flex;";
                document.getElementById("verified8").style="display:inline-flex;";
            }else if(dataID === sub8.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=8;
                document.getElementById('verified8').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("sub9_verification").style="display: inline-flex;";
                document.getElementById("verified9").style="display:inline-flex;";
            }else if(dataID === sub9.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=9;
                document.getElementById('verified9').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("sub10_verification").style="display: inline-flex;";
                document.getElementById("verified10").style="display:inline-flex;";
            }else if(dataID === sub10.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=10;
                document.getElementById('verified10').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("sub11_verification").style="display: inline-flex;";
                document.getElementById("verified11").style="display:inline-flex;";
            }
            else if(dataID === sub11.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=11;
                document.getElementById('verified11').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
                document.getElementById("sub12_verification").style="display: inline-flex;";
                document.getElementById("verified12").style="display:inline-flex;";
            }
            else if(dataID === sub12.value && studentID === studID.value ){
                codecontainer.push(Course_Code);
                codecontainer = [...new Set(codecontainer)];
                checksub=12;
                document.getElementById('verified12').value = Course_Code + " " + teacherName;
                document.getElementById("next_button").style="display: block;";
            }
        })
    })
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
            console.log(subjectsData);
        });
        
    }else{
        subjectsData = [...codecontainer];
        console.log(subjectsData);
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
        console.log(error);
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
