alert("index.js is running ✅");

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
  storageBucket: "myway-clt-final.firebasestorage.app",
  messagingSenderId: "207622732846",
  appId: "1:207622732846:web:92935a0cef94b261b773bf"
};

// ✅ Initialize Firebase ONCE
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// ✅ Button Click
document.getElementById("requestRide").onclick = async function () {
  alert("Request Ride Clicked 🚘");

  // Grab input values
  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;

  if (!pickup || !dropoff) {
    alert("Enter BOTH pickup and dropoff!");
    return;
  }

  // ✅ Save ride request in Firestore
  await db.collection("rides").add({
    pickup: pickup,
    dropoff: dropoff,
    status: "Pending",
    createdAt: new Date()
  });

  alert("Ride Requested ✅ Redirecting...");

  // ✅ Go to status page
  window.location.href = "status.html";
};
