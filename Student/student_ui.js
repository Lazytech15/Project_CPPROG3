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
  
  //SUBJECT01 getting the value of table data row 1
  var sub1 = document.getElementById("sub1");
  var cd1 =document.getElementById("cd1");
  var pr1 = document.getElementById("pr1");
  var md1 =document.getElementById("md1");
  var fn1 = document.getElementById("fn1");
  var section1 =document.getElementById("section1");
  var f_n1 = document.getElementById("f_n1");
  var cu1 = document.getElementById("cu1");
  
  //SUBJECT02 getting the value of table data row 2
  var sub2 = document.getElementById("sub2");
  var cd2 =document.getElementById("cd2");
  var pr2 = document.getElementById("pr2");
  var md2 =document.getElementById("md2");
  var fn2 = document.getElementById("fn2");
  var section2 =document.getElementById("section2");
  var f_n2 = document.getElementById("f_n2");
  var cu2 = document.getElementById("cu2");

  //SUBJECT01 getting the value of table data row 1
  var sub3 = document.getElementById("sub3");
  var cd3 =document.getElementById("cd3");
  var pr3 = document.getElementById("pr3");
  var md3 =document.getElementById("md3");
  var fn3 = document.getElementById("fn3");
  var section3 =document.getElementById("section3");
  var f_n3 = document.getElementById("f_n3");
  var cu3 = document.getElementById("cu3");
  
  //SUBJECT02 getting the value of table data row 2
  var sub4 = document.getElementById("sub4");
  var cd4 =document.getElementById("cd4");
  var pr4 = document.getElementById("pr4");
  var md4 =document.getElementById("md4");
  var fn4 = document.getElementById("fn4");
  var section4 =document.getElementById("section4");
  var f_n4 = document.getElementById("f_n4");
  var cu4 = document.getElementById("cu4");

  //SUBJECT01 getting the value of table data row 1
  var sub5 = document.getElementById("sub5");
  var cd5 =document.getElementById("cd5");
  var pr5 = document.getElementById("pr5");
  var md5 =document.getElementById("md5");
  var fn5 = document.getElementById("fn5");
  var section5 =document.getElementById("section5");
  var f_n5 = document.getElementById("f_n5");
  var cu5 = document.getElementById("cu5");
  
  //SUBJECT02 getting the value of table data row 2
  var sub6 = document.getElementById("sub6");
  var cd6 =document.getElementById("cd6");
  var pr6 = document.getElementById("pr6");
  var md6 =document.getElementById("md6");
  var fn6 = document.getElementById("fn6");
  var section6 =document.getElementById("section6");
  var f_n6 = document.getElementById("f_n6");
  var cu6 = document.getElementById("cu6");

  var stdname;
  var data1;
  var data2;
  var data3;
  var data4;
  var data5;
  var data6;
  var stname = document.getElementById("stname");
  var tri_sem = document.getElementById("tri_sem");
  var school_year = document.getElementById("school_year");
  var logout_btn = document.getElementById("logout_btn");

  const db = getFirestore();

  var selectedVariable ="1st";
  selectedVariable = variableSelect.value;
  



//checking if there is an error in the program

  try
  {

    async function LoadDataAdvance(){
      var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",localStorage.getItem('student_id'),selectedVariable);
      const docsnap = await getDoc(ref);
      if(docsnap.exists()){  
      //assigning value from firestore to table data
      stdname = docsnap.data().name;
      data1 = docsnap.data().subOne;
      data2 = docsnap.data().subTwo;
      data3 = docsnap.data().subThree;
      data4 = docsnap.data().subFour;
      data5 = docsnap.data().subFive;
      data6 = docsnap.data().subSix;
      stname.innerHTML = localStorage.getItem('student_id') +"_"+ stdname;
    }
  }

  //getting/verifying the data from firestore using the file path from the data collect in log-in form "Global Variable".
    async function subject01(){
        var ref = doc(db, "CLASS_RECORD",localStorage.getItem('student_id'),data1 + selectedVariable,selectedVariable);
        const docsnap = await getDoc(ref);

        if(docsnap.exists()){
          //assigning value from firestore to table data
          sub1.innerHTML = docsnap.data().COURSE_CODE;
          cd1.innerHTML=docsnap.data().COURSE_DESCRIPTION;
          pr1.innerHTML = docsnap.data().PRELIM;
          md1.innerHTML=docsnap.data().MIDTERM;
          fn1.innerHTML = docsnap.data().FINALS;
          section1.innerHTML=docsnap.data().SECTION;
          f_n1.innerHTML = docsnap.data().FACULTY_NAME;
          cu1.innerHTML=docsnap.data().CREDIT_UNITS; 
          tri_sem.innerHTML=docsnap.data().TRIMESTER;
          school_year.innerHTML=docsnap.data().ACADEMIC_YEAR;

          }
      }

      //getting/verifying the data from firestore using the file path from the data collect in log-in form "Global Variable".
    async function subject02(){
      var ref = doc(db, "CLASS_RECORD",localStorage.getItem('student_id'),data2+selectedVariable,selectedVariable);
      const docsnap = await getDoc(ref);
      if(docsnap.exists()){  
      //assigning value from firestore to table data
      sub4.innerHTML = docsnap.data().COURSE_CODE;
      cd4.innerHTML=docsnap.data().COURSE_DESCRIPTION;
      pr4.innerHTML = docsnap.data().PRELIM;
      md4.innerHTML=docsnap.data().MIDTERM;
      fn4.innerHTML = docsnap.data().FINALS;
      section4.innerHTML=docsnap.data().SECTION;
      f_n4.innerHTML = docsnap.data().FACULTY_NAME;
      cu4.innerHTML=docsnap.data().CREDIT_UNITS;
      tri_sem.innerHTML=docsnap.data().TRIMESTER;
          school_year.innerHTML=docsnap.data().ACADEMIC_YEAR;
        }
    }

    //getting/verifying the data from firestore using the file path from the data collect in log-in form "Global Variable".
      async function subject03(){
        var ref = doc(db, "CLASS_RECORD",localStorage.getItem('student_id'),data3+selectedVariable,selectedVariable);
        const docsnap = await getDoc(ref);
        if(docsnap.exists()){  
        //assigning value from firestore to table data
        sub2.innerHTML = docsnap.data().COURSE_CODE;
        cd2.innerHTML=docsnap.data().COURSE_DESCRIPTION;
        pr2.innerHTML = docsnap.data().PRELIM;
        md2.innerHTML=docsnap.data().MIDTERM;
        fn2.innerHTML = docsnap.data().FINALS;
        section2.innerHTML=docsnap.data().SECTION;
        f_n2.innerHTML = docsnap.data().FACULTY_NAME;
        cu2.innerHTML=docsnap.data().CREDIT_UNITS;
        tri_sem.innerHTML=docsnap.data().TRIMESTER;
          school_year.innerHTML=docsnap.data().ACADEMIC_YEAR;
          }
      }

      //getting/verifying the data from firestore using the file path from the data collect in log-in form "Global Variable".
    async function subject04(){
      var ref = doc(db, "CLASS_RECORD",localStorage.getItem('student_id'),data4+selectedVariable,selectedVariable);
      const docsnap = await getDoc(ref);

      if(docsnap.exists()){
        //assigning value from firestore to table data
        sub3.innerHTML = docsnap.data().COURSE_CODE;
        cd3.innerHTML=docsnap.data().COURSE_DESCRIPTION;
        pr3.innerHTML = docsnap.data().PRELIM;
        md3.innerHTML=docsnap.data().MIDTERM;
        fn3.innerHTML = docsnap.data().FINALS;
        section3.innerHTML=docsnap.data().SECTION;
        f_n3.innerHTML = docsnap.data().FACULTY_NAME;
        cu3.innerHTML =docsnap.data().CREDIT_UNITS;
        tri_sem.innerHTML=docsnap.data().TRIMESTER;
          school_year.innerHTML=docsnap.data().ACADEMIC_YEAR; 
        }
    }
  

    //getting/verifying the data from firestore using the file path from the data collect in log-in form "Global Variable".
    async function subject05(){
      var ref = doc(db, "CLASS_RECORD",localStorage.getItem('student_id'),data5 + selectedVariable,selectedVariable);
      const docsnap = await getDoc(ref);

      if(docsnap.exists()){
        //assigning value from firestore to table data
        sub5.innerHTML = docsnap.data().COURSE_CODE;
        cd5.innerHTML=docsnap.data().COURSE_DESCRIPTION;
        pr5.innerHTML = docsnap.data().PRELIM;
        md5.innerHTML=docsnap.data().MIDTERM;
        fn5.innerHTML = docsnap.data().FINALS;
        section5.innerHTML=docsnap.data().SECTION;
        f_n5.innerHTML = docsnap.data().FACULTY_NAME;
        cu5.innerHTML=docsnap.data().CREDIT_UNITS;
        tri_sem.innerHTML=docsnap.data().TRIMESTER;
          school_year.innerHTML=docsnap.data().ACADEMIC_YEAR; 
        }
    }
  //getting/verifying the data from firestore using the file path from the data collect in log-in form "Global Variable".
    async function subject06(){
      var ref = doc(db, "CLASS_RECORD",localStorage.getItem('student_id'),data6 + selectedVariable,selectedVariable);
      const docsnap = await getDoc(ref);
      if(docsnap.exists()){  
      //assigning value from firestore to table data
      sub6.innerHTML = docsnap.data().COURSE_CODE;
      cd6.innerHTML=docsnap.data().COURSE_DESCRIPTION;
      pr6.innerHTML = docsnap.data().PRELIM;
      md6.innerHTML=docsnap.data().MIDTERM;
      fn6.innerHTML = docsnap.data().FINALS;
      section6.innerHTML=docsnap.data().SECTION;
      f_n6.innerHTML = docsnap.data().FACULTY_NAME;
      cu6.innerHTML=docsnap.data().CREDIT_UNITS;
      tri_sem.innerHTML=docsnap.data().TRIMESTER;
      school_year.innerHTML=docsnap.data().ACADEMIC_YEAR;
        }
    }
    /*  
    setInterval(function() {
      subject01();
      subject02();
      subject03();
      subject04();
      subject05();
      subject06();
    }, 10);
    */
    
 //autoload the function without human interference     
    window.onload=function(){
      selectedVariable = variableSelect.value;
      LoadDataAdvance();  
  }
  function exitlogout(){
  window.open("index.html");
  window.close();
  }
    
  logout_btn.addEventListener('click',exitlogout);    
       
        //calling function
        variableSelect.addEventListener('change', function() {
          selectedVariable = variableSelect.value;
          LoadDataAdvance();
          subject01();
          subject02();
          subject03();
          subject04();
          subject05();
          subject06();
          
        });
        
        
      }
      catch(Error){
        console.log(Error);
      }