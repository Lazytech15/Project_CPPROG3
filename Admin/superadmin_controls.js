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

  displayTeachers();
 
  var tchrtable = document.getElementById('tchrAccTable');

async function displayTeachers() {
  try {
      const tableBody = document.querySelector('#tchrAccTable tbody');
      tableBody.innerHTML = ''; // Clear existing rows

      const querySnapshot = await getDocs(collection(db, 'ADMIN_LIST'));
    
      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          const account = doc.data();
          const row = `
              <tr>
                  <td>${doc.id}</td>
                  <td>${account.password}</td>
                  <td>${account.accountType}</td>
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
    const ref = doc(db, "ADMIN_LIST", );
            const docsnap = await getDoc(ref);
            if(docsnap.exists()){  
                await deleteDoc(docsnap);
            } 

    document.getElementById('pop-up-message').innerHTML = "Accounts Deleted";
    document.getElementById('pop-up-message').style.textAlign = "center";
    myPopup.classList.add("show");
  } catch (error) {
      alert(error);
  }
});

document.getElementById('selectAllTchr_btn').addEventListener('click',  () => {
  const checkboxes = document.querySelectorAll('#tchrAccTable tbody input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = !checkbox.checked;
  });
});

document.getElementById('jstest').addEventListener('click',  () => {
  alert("works")
});


closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
  //location.reload();
});

