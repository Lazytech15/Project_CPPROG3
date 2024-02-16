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

  import {
    getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField
  }
  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const client = getFirestore();

  function getData(){
    const extractData =[];
    db.collection("PENDING-STUD-DATA").orderBy('createdAt').get().then((querySnapshot) => {     
      
      querySnapshot.forEach((studentdata) => {
            const data = studentdata.data();
            extractData.push({...data});
        })
        csvData(extractData)
  })
}
function csvData(student) {
  const tableBody = document.getElementById('student-container');
  
  student.forEach((students) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${students.Teacher_Name}</td>
      <td>${students.Teacher_ID}</td>
      <td>${students.File_Name}</td>
      <td>
        <button class="view-btn">Details</button>
        <button class="approve-btn">Approved</button>
        <button class="deny-btn">Denied</button>
      </td>
    `;
    tableBody.appendChild(row);

    // Get the buttons within this row
    const viewButton = row.querySelector('.view-btn');
    const approveButton = row.querySelector('.approve-btn');
    const denyButton = row.querySelector('.deny-btn');

     // Attach event listeners
     viewButton.addEventListener('click', () => {
      // Handle approval logic (e.g., update status to "Approved")
      viewData();
      document.getElementById("student-table-design").style="display: block;";
    });

     approveButton.addEventListener('click', () => {
      // Handle approval logic (e.g., update status to "Approved")
      
      console.log(`Student ${student.StudentName} and ${student.STATUS} approved.`);
      student.STATUS = 'Approved';
      row.querySelector('td:nth-child(3)').textContent = student.STATUS;
      const accountID = student.StudentID;
      const pass = student.password;
      approveAccounts(accountID,pass);
    });

    denyButton.addEventListener('click', () => {
      // Handle denial logic (e.g., update status to "Denied")
      student.STATUS = 'Reject';
      row.querySelector('td:nth-child(3)').textContent = student.STATUS;
      console.log(`Student ${student.StudentName} denied.`);
      const accountID = student.StudentID;
      rejectAccount(accountID,`${student.StudentName}`);
    });
  })
}




  window.onload = getData;


  function viewData(){
    const extractData =[];
    db.collection("PENDING-STUD-DATA").orderBy('createdAt').get().then((querySnapshot) => {     
      
      querySnapshot.forEach((studentdata) => {
            const data = studentdata.data().Alldata.data;
            for (let i = 0; i < data.length; i++) {
              extractData.push(data[i]);
          }
          studentsData(extractData);
        })       
  })
}
function studentsData(student) {
  const tableBody = document.getElementById('student-data-list');
  
  student.forEach((students) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${students.STUDENT_NUM}</td>
      <td>${students.STUDENT_NAME}</td>
      <td>${students.ACADEMIC_YEAR}</td>
      <td>${students.TRIMESTER}</td>
      <td>${students.SECTION}</td>
      <td>${students.DAY}</td>
      <td>${students.TIME}</td>
      <td>${students.COURSE_CODE}</td>
      <td>${students.COURSE_DESCRIPTION}</td>
      <td>${students.EMAIL}</td>
      <td>${students.PRELIM_GRADE}</td>
      <td>${students.MIDTERM_GRADE}</td>
      <td>${students.FINAL_GRADE}</td>
      <td>${students.REMARK}</td>
      <td>${students.CREDIT_UNITS}</td>
      <td>${students.FACULTY_NAME}</td>
      <td>${students.ECR_NAME}</td>
      <td>
        <button class="approve-btn">Approved</button>
        <button class="deny-btn">Denied</button>
      </td>
    `;
    tableBody.appendChild(row);
/*
    // Get the buttons within this row
    const approveButton = row.querySelector('.approve-btn');
    const denyButton = row.querySelector('.deny-btn');

    // Attach event listeners
    approveButton.addEventListener('click', () => {
      // Handle approval logic (e.g., update status to "Approved")
      
      console.log(`Student ${student.StudentName} and ${student.STATUS} approved.`);
      student.STATUS = 'Approved';
      row.querySelector('td:nth-child(3)').textContent = student.STATUS;
      const accountID = student.StudentID;
      const pass = student.password;
      approveAccounts(accountID,pass);
    });

    denyButton.addEventListener('click', () => {
      // Handle denial logic (e.g., update status to "Denied")
      student.STATUS = 'Reject';
      row.querySelector('td:nth-child(3)').textContent = student.STATUS;
      console.log(`Student ${student.StudentName} denied.`);
      const accountID = student.StudentID;
      rejectAccount(accountID,`${student.StudentName}`);
    });
    */
  });
}
/*
async function approveAccounts(student_id, student_password) {
  console.log(student_id, student_password);
  const sourceRef = doc(client, "PENDING-APPROVE-STUDENT", student_id);
  const docsnap = await getDoc(sourceRef);
  if (docsnap.exists()) {
    const destinationRef = doc(client, "STUDENT_LIST","STUDENT_DATA", student_id,student_password);
    await setDoc(destinationRef, docsnap.data());

    // Delete the document from the source collection
    await deleteDoc(sourceRef);
  }
}

async function rejectAccount(student_id,StudentName){
  console.log(student_id);
  const sourceRef = doc(client, "PENDING-APPROVE-STUDENT", student_id);
        await deleteDoc(sourceRef);
        alert("Reject Account for " + StudentName);
}
*/


