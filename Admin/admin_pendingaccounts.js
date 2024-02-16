import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyByH0pNuEoNXna4Dj61C2QxIX-AfmFAnq0",
  authDomain: "antipolo-hackathon-project.firebaseapp.com",
  databaseURL: "https://antipolo-hackathon-project-default-rtdb.asia-southeast1.firebasedatabase.app",
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

    // Get references to the buttons and containers of Teacher and students 
    const selectStudentBtn = document.getElementById('selectStudent_btn');
    const selectTeacherBtn = document.getElementById('selectTeacher_btn');
    const pendingStudentsContainer = document.getElementById('pendingStudents');
    const pendingTeachersContainer = document.getElementById('pendingTeachers');

    // Add event listeners to the buttons
    selectStudentBtn.addEventListener('click', function() {
        pendingStudentsContainer.style.display = 'block'; // Show pendingStudentsContainer
        pendingTeachersContainer.style.display = 'none'; // Hide pendingTeachersContainer
    });

    selectTeacherBtn.addEventListener('click', function() {
        pendingStudentsContainer.style.display = 'none'; // Hide pendingStudentsContainer
        pendingTeachersContainer.style.display = 'block'; // Show pendingTeachersContainer
    });


    //Load Data in tables
document.addEventListener('DOMContentLoaded', async () => {
  try {
      const tableBody = document.querySelector('#pendingStudTable tbody');
      tableBody.innerHTML = ''; // Clear existing rows

      const querySnapshot = await getDocs(collection(db, 'PENDING-STUDENTS', 'STUDENT_DATA'));

      querySnapshot.forEach((doc) => {
          const subcollectionRef = doc.ref.collection(doc.id); // Replace 'SUBCOLLECTION_NAME' with the actual subcollection name
          subcollectionRef.get().then((subcollectionSnapshot) => {
              subcollectionSnapshot.forEach((subDoc) => {
                  const subData = subDoc.data();
                  const row = `
                      <tr>
                          <td>${doc.id}</td>
                          <td>${subData.Name}</td>
                          <td>${subData.password}</td>
                          <td><input type="checkbox" data-id="${doc.id}" class="accountCheckbox"></td>
                      </tr>
                  `;
                  tableBody.insertAdjacentHTML('beforeend', row);
              });
          });
      });
  } catch (error) {
      alert(error);
  }

  try {
    const tableBody = document.querySelector('#pendingTchrTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    const querySnapshot = await getDocs(collection(db, 'PENDING-TEACHERS'));

    querySnapshot.forEach((doc) => {
        const account = doc.data();
        const row = `
            <tr>
                <td>${doc.id}</td>
                <td>${account.TeacherName}</td>
                <td>${account.password}</td>
                <td><input type="checkbox" data-id="${doc.id}" class="accountCheckbox"></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
} catch (error) {
    alert(error);
}

    //show students accounts by default
  pendingStudentsContainer.style.display = 'block'; // Show pendingStudentsContainer
    pendingTeachersContainer.style.display = 'none'; // Hide pendingTeachersContainer
});

/*
async function displayAccounts() {
  try {
      const tableBody = document.querySelector('#accountsTable tbody');
      tableBody.innerHTML = ''; // Clear existing rows

      const querySnapshot = await getDocs(collection(db, 'TEACHER_LIST'));

      querySnapshot.forEach((doc) => {
          const account = doc.data();
          const row = `
              <tr>
                  <td>${doc.id}</td>
                  <td>${account.TeacherName}</td>
                  <td>${account.password}</td>
                  <td><input type="checkbox" data-id="${doc.id}" class="accountCheckbox"></td>
              </tr>
          `;
          tableBody.insertAdjacentHTML('beforeend', row);
      });
  } catch (error) {
      alert(error);
  }
}*/
    
document.getElementById('approve_button').addEventListener('click', async () => {

  try {
    const tableBody = document.querySelector('#pendingAccTable tbody');
    const checkboxes = document.querySelectorAll('#pendingAccTable tbody input[type="checkbox"]:checked');

    checkboxes.forEach(async (checkbox) => {
        const accountId = checkbox.dataset.id;
        const sourceRef = doc(db, "PENDING_ACCOUNTS", accountId);
        const docsnap = await getDoc(sourceRef);

        if (docsnap.exists()) {
            const data = docsnap.data();
            const destinationRef = collection(db, 'TEACHER_LIST');

            // Move the document to the destination collection
            await setDoc(doc(destinationRef, accountId), data);

            // Delete the document from the source collection
            await deleteDoc(sourceRef);
        }
    });


    document.getElementById('pop-up-message').innerHTML = "Accounts Approved";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show");
  } catch (error) {
      alert(error);
  }
});

document.getElementById('reject_button').addEventListener('click', async () => {

  try {
    const tableBody = document.querySelector('#pendingAccTable tbody');
    const checkboxes = document.querySelectorAll('#pendingAccTable tbody input[type="checkbox"]:checked');

    checkboxes.forEach(async (checkbox) => {
        const accountId = checkbox.dataset.id;
        const sourceRef = doc(db, "PENDING_ACCOUNTS", accountId);
        await deleteDoc(sourceRef);
    });

    document.getElementById('pop-up-message').innerHTML = "Accounts Deleted";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show");
  } catch (error) {
      alert(error);
  }
});

document.getElementById('delete_button').addEventListener('click', async () => {
  try {
    const tableBody = document.querySelector('#accountsTable tbody');
    const checkboxes = document.querySelectorAll('#accountsTable tbody input[type="checkbox"]:checked');

    checkboxes.forEach(async (checkbox) => {
        const accountId = checkbox.dataset.id;
        const sourceRef = doc(db, "TEACHER_LIST", accountId);
        await deleteDoc(sourceRef);
    });

    document.getElementById('pop-up-message').innerHTML = "Accounts Deleted";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show");
  } catch (error) {
      alert(error);
  }
});

document.getElementById('selectAllpend_button').addEventListener('click', async () => {
  const checkboxes = document.querySelectorAll('#pendingAccTable tbody input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = !checkbox.checked;
  });
});

document.getElementById('selectAllAcc_button').addEventListener('click', async () => {

  const checkboxes = document.querySelectorAll('#accountsTable tbody input[type="checkbox"]');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = !checkbox.checked;
  });
});


closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
  //location.reload();
});

