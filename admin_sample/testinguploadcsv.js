import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByH0pNuEoNXna4Dj61C2QxIX-AfmFAnq0",
    authDomain: "antipolo-hackathon-project.firebaseapp.com",
    projectId: "antipolo-hackathon-project",
    storageBucket: "antipolo-hackathon-project.appspot.com",
    messagingSenderId: "88056856756",
    appId: "1:88056856756:web:9597da80bb7239996bd7e1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import {
    getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField, serverTimestamp
  }
  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

  const db = getFirestore();

  //send verification via email
  var Email = { send: function (a) { return new Promise(function (n, e) 
    { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, 
    function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) 
    { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
    a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) 
    { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: 
    function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

    const teacher_id = localStorage.getItem('teacher_id');
    const teacher_name = localStorage.getItem('teacher_name');
    let codecontainer = [];
    let subjectsData =[];
    let pass;
    let count = 0;
    let allsubs = []; 
    let imageqr = document.getElementById("displayQR");
    let tname = document.getElementById("tname");
    let selectCourscode = document.getElementById("select-coursecode");
    let viewQR = document.getElementById("viewQR");


    var stdnum, stdname , academic, trimester , section, day , time, cc , cd, prelim , midterm, finals
    , remark, cu,fn, en, email ;
    let fileName;
    const input = document.querySelector("#input-file");
    input.onchange = (e) => {
        const [file] = e.target.files;
        console.log(file.name);
        fileName = file.name;
    };

const submitBtn = document.getElementById('submit-button');
    
    document.getElementById('submit-button').addEventListener('click', ()=>{
        

           
                    var ref = doc(db, "PENDING-STUD-DATA",fileName);
                    setDoc(
                    ref, {
                        Alldata : results,
                        Teacher_Name: "Jose Rizal",
                        Teacher_ID : "UA12345",
                        File_Name : fileName,
                        createdAt : serverTimestamp()
                        })
                    alert("Save Successfully");
                })
                    

                     /*   
                    generateVerifCode();
                        var verificationCode = generateVerifCode();
                        var ref = doc(db, "GENERATE_CODE", verificationCode);
                            setDoc(
                            ref, {
                                StudentID : stdnum,
                                CourseCode : cc,
                                TeacherName : teacher_name,
                                TeacherID : teacher_id,
                                sem : trimester,
                                StudentEmail : email
                                }
                            )
                    //send email for Prelim grade
                    
                    try {
                        
                        Email.send({
                            Host : "smtp.elasticemail.com",
                            Username : "guzmancarlo.123@gmail.com",
                            Password : "7B3C28305E4F62DE97199FC2B2EE724F27AC",
                            To : email,
                            From : "ecr.gradecloudsync@gmail.com",
                            Subject : "Prelims Grade in " + cc + " Now Available for Viewing" ,
                            Body : "<b><h1>Dear, " + stdname
                                    + "</h1><h4> Welcome to eCR-GradeCSync (eGCS) – Your Academic Hub for streamlined grading and transparent student evaluation at ICCT COLLEGES!" 
                                    + "<br> Thank you for choosing eCR-GradeCSync (eGCS) to enhance your academic experience. We are thrilled to have you on board."
                                    + "</h4></b><br>"
                                    + "<br> Registration Details: " 
                                    + "<br>"
                                    + "<br> Student ID: " + stdnum
                                    + "<br> Teacher Name: " + teacher_name
                                    + "<br> Course Enrolled: " + cc
                                    + "<br><h2> Verfication Code: " + verificationCode
                                    + "<br><h2> Prelims Grade: " + prelim
                                    + "</h2><br>"
                                    + "<br> <h4><i>Just copy and paste your subject verification code<i></h4>"
                                    + "<p style='text-align: center;'><i><b>Note: Make sure you have received all your Subjects' verification code for this trimester before you register</b></i></p>"
                                    + "<h2><p style='text-align: center;'><a href='https://lazytech15.github.io/StudentShowMyGrades/?fbclid=IwAR1Aezel-HCXPQaVo2KJDyxNU1z_pLm7_E2FgdM6IbppadK-hi0vDYNsGb8' style='background-color: #4CAF50; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 10px;'>Click to Register Now</a></p></h2>"
                                    + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, "
                                    + "<br>you'll have quick access to your grades and valuable insights into your academic progress. "
                                    + "<br> Best regards,"
                                    + "<br>"
                                    + "<br> eCR-GradeCSync (eGCS) Team "
                              
                        })
                        
                        
                        .then(()=>{
                            if(count == i){
                                console.log(codecontainer);
            
                                var ref = doc(db, "TEACHER_LIST", teacher_id);
                                setDoc(
                                    ref, {
                                        TeacherID : teacher_id,
                                        TeacherName : teacher_name,
                                        password : pass,
                                        subjects : subjectsData.flat().filter((subject) => subject),
                                        }
                                 )

                                document.getElementById('pop-up-top').style="display: none";
                                document.getElementById('pop-up-message').innerHTML="Success! The verification codes and preliminary grades have been uploaded, and notifications have been sent to your students via email";
                                document.getElementById('pop-up-message').style.textAlign = "center";
                                myPopup.classList.add("show");
                                cleanUp();
                            }
                            else{
                                count + 1;
                            }
                        })
                        .catch((error)=>{
                            alert("Added failed:"+error);
                        });
                    } catch (error) {
                        alert("Added failed:"+error);
                    }
    
                }else if(finals==""){
                    var ref = doc(db, stdnum,cc);
                    setDoc(
                    ref, {
                        STUDENT_NUM : stdnum,
                        STUDENT_NAME : stdname,
                        ACADEMIC_YEAR : academic,
                        EMAIL_ADDRESS : email,
                        TRIMESTER : trimester,
                        SECTION : section,
                        DAY : day,
                        TIME : time,
                        COURSE_CODE : cc,
                        COURSE_DESCRIPTION : cd,
                        PRELIM : prelim,
                        MIDTERM : midterm,
                        FINALS : finals,
                        REMARK : remark,
                        CREDIT_UNITS : cu,
                        FACULTY_NAME : fn,
                        createdAt : serverTimestamp()
                        }
                        
                    )
    
                    //send email for Midterm grade
                    Email.send({
                        Host : "smtp.elasticemail.com",
                        Username : "guzmancarlo.123@gmail.com",
                        Password : "EC1DDABA0B7E4D10378C0E9FCCD26459D54D",
                        To : email,
                        From : "ecr.gradecloudsync@gmail.com",
                        Subject : "Midterms Grade in " + cc + " Now Available for Viewing" ,
                        Body : "<b><h1>Dear, " + stdname
                            + "</h1><h4> Welcome to eCR-GradeCSync (eGCS) – Your Academic Hub for streamlined grading and transparent student evaluation at ICCT COLLEGES!" 
                            + "<br> Thank you for choosing eCR-GradeCSync (eGCS) to enhance your academic experience. We are thrilled to have you on board."
    
                            + "</h4></b><br>"
                            + "<br> Grade Details: " 
                            + "<br>"
                            + "<br> Student ID: " + stdnum
                            + "<br> Teacher Name: " + teacher_name
                            + "<br> Course Enrolled: " + cc
                            + "<br> Prelims Grade: " + prelim 
                            + "<br><h2> Midterms Grade: " + midterm   
                            + "</h2><br>"
                            + "<p style='text-align: center;'><i><b>You can also view your grades in eGCS student page by clicking this button</b></i></p>"
                            + "<h2><p style='text-align: center;'><a href='https://lazytech15.github.io/StudentShowMyGrades/?fbclid=IwAR1Aezel-HCXPQaVo2KJDyxNU1z_pLm7_E2FgdM6IbppadK-hi0vDYNsGb8' style='background-color: #002060; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 10px;'>Go to eCR-GradeCSync</a></p></h2>"
                            + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, "
                            + "<br>you'll have quick access to your grades and valuable insights into your academic progress. "
                            + "<br> Best regards,"
                            + "<br>"
                            + "<br> eCR-GradeCSync (eGCS) Team "
                           
                    })
                    .then(()=>{
                        if(count == i){
                            document.getElementById('pop-up-top').style="display: none";
                            document.getElementById('pop-up-message').innerHTML="Success! Midterm grades have been uploaded, and notifications have been sent to your students via email.";
                            document.getElementById('pop-up-message').style.textAlign = "center";
                            myPopup.classList.add("show");
                            cleanUp();
                        }
                        else{
                            count + 1;
                        }
                    })
                    .catch((error)=>{
                        alert("Added failed:"+error);
                    });
                }else if(!finals==""){
                    
                    var ref = doc(db, stdnum,cc);
                    setDoc(
                    ref, {
                        STUDENT_NUM : stdnum,
                        STUDENT_NAME : stdname,
                        ACADEMIC_YEAR : academic,
                        EMAIL_ADDRESS : email,
                        TRIMESTER : trimester,
                        SECTION : section,
                        DAY : day,
                        TIME : time,
                        COURSE_CODE : cc,
                        COURSE_DESCRIPTION : cd,
                        PRELIM : prelim,
                        MIDTERM : midterm,
                        FINALS : finals,
                        REMARK : remark,
                        CREDIT_UNITS : cu,
                        FACULTY_NAME : fn,
                        createdAt : serverTimestamp()
                        }
                        
                    )
    
                    //send email for Finals grade
                    Email.send({
                        Host : "smtp.elasticemail.com",
                        Username : "guzmancarlo.123@gmail.com",
                        Password : "EC1DDABA0B7E4D10378C0E9FCCD26459D54D",
                        To : email,
                        From : "ecr.gradecloudsync@gmail.com",
                        Subject : "Finals Grade in " + cc + " Now Available for Viewing" ,
                        Body : "<b><h1>Dear, " + stdname
                            + "</h1><h4> Welcome to eCR-GradeCSync (eGCS) – Your Academic Hub for streamlined grading and transparent student evaluation at ICCT COLLEGES!" 
                            + "<br> Thank you for choosing eCR-GradeCSync (eGCS) to enhance your academic experience. We are thrilled to have you on board."
                            + "</h4></b><br>"
                            + "<br> Grade Details: " 
                            + "<br>"
                            + "<br> Student ID: " + stdnum
                            + "<br> Teacher Name: " + teacher_name
                            + "<br> Course Enrolled: " + cc
                            + "<br> Prelims Grade: " + prelim 
                            + "<br> Midterms Grade: " + midterm  
                            + "<br><h2> Finals Grade: " + finals   
                            + "</h2><br>"
                            + "<p style='text-align: center;'><i><b>You can also view your grades in eGCS student page by clicking this button</b></i></p>"
                            + "<h2><p style='text-align: center;'><a href='https://lazytech15.github.io/StudentShowMyGrades/?fbclid=IwAR1Aezel-HCXPQaVo2KJDyxNU1z_pLm7_E2FgdM6IbppadK-hi0vDYNsGb8' style='background-color: #002060; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 10px;'>Go to eCR-GradeCSync</a></p></h2>"
                            + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, "
                            + "<br>you'll have quick access to your grades and valuable insights into your academic progress. "
                            + "<br> Best regards,"
                            + "<br>"
                            + "<br> eCR-GradeCSync (eGCS) Team "
                           
                    })
                    .then(()=>{
                        if(count == i){
                            document.getElementById('pop-up-top').style="display: none";
                            document.getElementById('pop-up-message').innerHTML="Success! Final grades have been uploaded, and notifications have been sent to your students via email.";
                            document.getElementById('pop-up-message').style.textAlign = "center";
                            myPopup.classList.add("show");
                            cleanUp();
                        }
                        else{
                            count + 1;
                        }
                    })
                    .catch((error)=>{
                        alert("Added failed:"+error);
                    });
                    */                        
            
    

    function generateVerifCode() {
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        //const specialCharacters = '!#*_';
    
            //put all characters in one variable (except special character)
        const allCharacters = uppercaseLetters + numbers +lowercaseLetters;
        let randomVerifCode = '';
    
        // Include at least one uppercase letter, one number, and one special character
        randomVerifCode += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
        randomVerifCode += numbers[Math.floor(Math.random() * numbers.length)];
        randomVerifCode += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    
        // Complete the rest of the password with random characters
        for (let i = 1; i <= 5; i++) {
            randomVerifCode += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }
        return randomVerifCode;
        }

      /*  

        async function transferData() {
                const ref = doc(db, "TEACHER_LIST", teacher_id);
                const docsnap = await getDoc(ref);
                if (docsnap.exists()) {
                    allsubs.push(docsnap.data().subjects);
                    allsubs.forEach((subject) => {
                        subjectsData = [subject, codecontainer];
                    });

                    pass = docsnap.data().password;
                    allsubs = docsnap.data().subjects;
                    const selectElement = document.getElementById("select-coursecode");
        
                    for (let i = 0; i < allsubs.length; i++) {
                        const newOption = document.createElement("option");
                        newOption.text = allsubs[i]; // Set the display text for the new option
                        newOption.value = allsubs[i]; // Set the value for the new option
                        selectElement.add(newOption); // Add the option to the select element
                    }
                    
        }
    }
    viewQR.addEventListener('click', function(){
        let generateQR = generateVerifCode() +","+ selectCourscode.value +","+generateVerifCode()+tname.value;
        imageqr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + generateQR;
    });     

window.onload = transferData;

*/

        closePopup.addEventListener("click", function () {
            myPopup.classList.remove("show");
        });
        window.addEventListener("click", function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove("show");
        }
        });
        function cleanUp(){
            fileInput.value = null;
            fileNameEl.textContent = '';
            clearTable();

            // Show dropzone again
            dropzone.style.display = '';

            // Hide secondary navigation bar again
            secondaryNav.style.display = '';
        }