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
    const studentData =[];
    db.collection("PENDING-APPROVE-STUDENT").orderBy('createdAt').get().then((querySnapshot) => {
        querySnapshot.forEach((studentdata) => {
            const data = studentdata.data();
            studentData.push({ ...data });
            console.log(data);
            
        })
        studentsData(studentData);
  })
}
function studentsData(student) {
  const tableBody = document.getElementById('studentapproveTable');
  const uniqueStudentData = [...new Set(student)];

  uniqueStudentData.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.StudentID}</td>
      <td>${student.StudentName}</td>
      <td>${student.STATUS}</td>
      <td>
        <button class="approve-btn">Approved</button>
        <button class="deny-btn">Denied</button>
      </td>
    `;
    tableBody.appendChild(row);

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
  });
}
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



window.onload = getData;