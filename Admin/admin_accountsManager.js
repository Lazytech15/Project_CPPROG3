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
    getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField
  }
  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  
  const db = getFirestore();

  displayStudents();
  displayTeachers();
 
  var tchrtable = document.getElementById('tchrAccTable');

  // Get the input fields
  var teacherIdInput = document.getElementById('teacher-id');
  var teacherNameInput = document.getElementById('teacher-name');
  var teacherPasswordInput = document.getElementById('teacher-password');
  
  // Add click event listener to table rows
  tchrtable.addEventListener('click', function(event) {
    // Check if the clicked element is a table cell (td)
    if (event.target.tagName.toLowerCase() === 'td') {
      // Get the row of the clicked cell
      var row = event.target.parentNode;
      
      // Get the cells of the row
      var cells = row.getElementsByTagName('td');
      
      // Update input fields with values from the row
      teacherIdInput.value = cells[0].innerText;
      teacherNameInput.value = cells[1].innerText;
      teacherPasswordInput.value = cells[2].innerText;
    }
  });

    //Load Data in tables
async function displayStudents() {
  try {
    const tableBody = document.querySelector('#studAccTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    const querySnapshot = await getDocs(collection(db, 'TEACHER_LIST'));
  
    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        const account = doc.data();
        const row = `
            <tr>
                <td>${doc.id}</td>
                <td>${account.TeacherName}</td>
                <td>${account.password}</td>
                <td>${account.createdAt}</td>
                <td><input type="checkbox" data-id="${doc.id}" class="accountCheckbox"></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
      });
    } else {
      alert('no document')
    }
  
  } catch (error) {
    alert(error);
}
};


async function displayTeachers() {
  try {
      const tableBody = document.querySelector('#tchrAccTable tbody');
      tableBody.innerHTML = ''; // Clear existing rows

      const querySnapshot = await getDocs(collection(db, 'TEACHER_LIST'));
    
      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          const account = doc.data();
          const row = `
              <tr>
                  <td>${doc.id}</td>
                  <td>${account.TeacherName}</td>
                  <td>${account.password}</td>
                  <td>${account.createdAt}</td>
                  <td><input type="checkbox" data-id="${doc.id}" class="accountCheckbox"></td>
              </tr>
          `;
          tableBody.insertAdjacentHTML('beforeend', row);
        });
      } else {
        alert('no document')
      }
  } catch (error) {
      alert(error);
  }
};
    
document.getElementById('delete_button').addEventListener('click', async () => {
  try {
    const tableBody = document.querySelector('#accountsTable tbody');
    const checkboxes = document.querySelectorAll('#tchrAccTable tbody input[type="checkbox"]:checked');

    checkboxes.forEach(async (checkbox) => {
        const accountId = checkbox.dataset.id;
        const sourceRef = doc(db, "TEACHER_LIST", accountId);
        await deleteDoc(sourceRef);
    });s

    document.getElementById('pop-up-message').innerHTML = "Accounts Deleted";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show");
  } catch (error) {
      alert(error);
  }
});

document.addEventListener('DOMContentLoaded', function() {

  
  // Get the "Select All" checkbox
  var selectAllCheckbox = document.getElementById('selectAllTchr');

  // Get all checkboxes in the table rows
  var checkboxes = document.querySelectorAll('#tchrAccTable tbody input[type="checkbox"]');

  // Add click event listener to "Select All" checkbox
  selectAllCheckbox.addEventListener('click', function() {
    alert('wor')
    // Iterate over all checkboxes in the rows and update their checked property
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });
});

document.getElementById('jstest').addEventListener('click',  () => {
  alert("works")
});


closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
  //location.reload();
});

