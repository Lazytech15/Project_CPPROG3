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

    var teacher_id = localStorage.getItem('teacher_id');
    var teacher_name = localStorage.getItem('teacher_name');

    let count = 0; 

    var stdnum, stdname , academic, trimester , section, day , time, cc , cd, prelim , midterm, finals
    , remark, cu,fn, en, email ;


const submitBtn = document.getElementById('submit-button');
    
    document.getElementById('submit-button').addEventListener('click', ()=>{
    
        try {
            for (let i=0; i<results.data.length;i++){
                stdnum = results.data[i].STUDENT_NUM;
                stdname = results.data[i].STUDENT_NAME;
                academic = results.data[i].ACADEMIC_YEAR;
                trimester = results.data[i].TRIMESTER;
                section = results.data[i].SECTION;
                day = results.data[i].DAY;
                time = results.data[i].TIME;
                cc = results.data[i].COURSE_CODE;
                cd = results.data[i].COURSE_DESCRIPTION;
                prelim = results.data[i].PRELIM_GRADE;
                midterm = results.data[i].MIDTERM_GRADE;
                finals = results.data[i].FINAL_GRADE;
                remark = results.data[i].REMARK;
                cu = results.data[i].CREDIT_UNITS;
                fn = results.data[i].FACULTY_NAME;
                en = results.data[i].ECR_NAME;
                email=results.data[i].EMAIL; 
                     
        
                    //for Verification Only
                /*if(prelim == "" && midterm=="" && finals==""){
                    var ref = doc(db, stdnum,cc+trimester+trimester);
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
            
                    //send verification email for student registration/re-register
                        Email.send({
                            Host : "smtp.elasticemail.com",
                            Username : "guzmancarlo.123@gmail.com",
                            Password : "EC1DDABA0B7E4D10378C0E9FCCD26459D54D",
                            // backup Password : "76255F8348DC19DB61D000EBDBDB25AB5220",
                            To : email,
                            From : "ecr.gradecloudsync@gmail.com",
                            Subject : "Welcome to eCR-GradeCSync (eGCS) - Your Academic Hub!" ,
                            Body : "<b><h1>Dear, " + stdname
                                + "</h1><h4> Welcome to eCR-GradeCSync (eGCS) – Your Academic Hub for streamlined grading and transparent student evaluation at ICCT COLLEGE!" 
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
                                + "<h2><p style='text-align: center;'><a href='http://e-class-record-cloud-sync-student.fast-page.org/student_registration.html' style='background-color: #4CAF50; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 10px;'>Click to Register Now</a></p></h2>"
                                + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, "
                                + "<br>you'll have quick access to your grades and valuable insights into your academic progress. "
                                + "<br> Best regards,"
                                + "<br>"
                                + "<br> eCR-GradeCSync (eGCS) Team "
                               
                        })
                        .then(()=>{
                            if(count == i){
                            document.getElementById('pop-up-message').innerHTML="Success! Verification codes for your students have been successfully uploaded and sent to their respective email addresses.";
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

                        //For Prelim Grades Only
                if(midterm=="" && finals==""){
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
                                    + "</h1><h4> Welcome to eCR-GradeCSync (eGCS) – Your Academic Hub for streamlined grading and transparent student evaluation at ICCT COLLEGE!" 
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
                                    + "<h2><p style='text-align: center;'><a href='xxxxxx' style='background-color: #4CAF50; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 10px;'>Click to Register Now</a></p></h2>"
                                    + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, "
                                    + "<br>you'll have quick access to your grades and valuable insights into your academic progress. "
                                    + "<br> Best regards,"
                                    + "<br>"
                                    + "<br> eCR-GradeCSync (eGCS) Team "
                               
                        })
                        .then(()=>{
                            if(count == i){
                                document.getElementById('pop-up-message').innerHTML="Success! Verification Codes have been uploaded, and notifications have been sent to your students via email.";
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
                            + "</h1><h4> Welcome to eCR-GradeCSync (eGCS) – Your Academic Hub for streamlined grading and transparent student evaluation at ICCT COLLEGE!" 
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
                            + "<h2><p style='text-align: center;'><a href='http://e-class-record-cloud-sync-student.fast-page.org/student_ui.html' style='background-color: #002060; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 10px;'>Go to eCR-GradeCSync</a></p></h2>"
                            + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, "
                            + "<br>you'll have quick access to your grades and valuable insights into your academic progress. "
                            + "<br> Best regards,"
                            + "<br>"
                            + "<br> eCR-GradeCSync (eGCS) Team "
                           
                    })
                    .then(()=>{
                        if(count == i){
                            document.getElementById('pop-up-message').innerHTML="Success! MIDTERM grades have been uploaded, and notifications have been sent to your students via email.";
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
                            + "</h1><h4> Welcome to eCR-GradeCSync (eGCS) – Your Academic Hub for streamlined grading and transparent student evaluation at ICCT COLLEGE!" 
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
                            + "<h2><p style='text-align: center;'><a href='http://e-class-record-cloud-sync-student.fast-page.org/student_ui.html' style='background-color: #002060; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 10px;'>Go to eCR-GradeCSync</a></p></h2>"
                            + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, "
                            + "<br>you'll have quick access to your grades and valuable insights into your academic progress. "
                            + "<br> Best regards,"
                            + "<br>"
                            + "<br> eCR-GradeCSync (eGCS) Team "
                           
                    })
                    .then(()=>{
                        if(count == i){
                            document.getElementById('pop-up-message').innerHTML="Success! FINAL grades have been uploaded, and notifications have been sent to your students via email.";
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
                }                             
            }
        } catch (error) {
            alert(error)
        }
    });
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