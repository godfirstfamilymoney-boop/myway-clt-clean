alert("index.js is running");

// ✅ Wait until page fully loads
window.onload = function () {

  // ✅ Firebase Config
  const firebaseConfig = {
    apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
    authDomain: "myway-clt-final.firebaseapp.com",
    projectId: "myway-clt-final",
    storageBucket: "myway-clt-final.firebasestorage.app",
    messagingSenderId: "207622732846",
    appId: "1:207622732846:web:92935a0cef94b261b773bf"
  };

  // ✅ Initialize Firebase ONLY ONCE
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();

  // ✅ Button Click
  document.getElementById("requestRide").onclick = async function () {

    alert("Button works!");

    // Grab values
    const pickup = document.getElementById("pickup").value;
    const dropoff = document.getElementById("dropoff").value;

    if (!pickup || !dropoff) {
      alert("Enter pickup + dropoff");
      return;
    }

    // ✅ Save Ride to Firestore
    await db.collection("rides").add({
      pickup: pickup,
      dropoff: dropoff,
      status: "Pending",
      createdAt: new Date()
    });

    // ✅ Redirect
    window.location.href = "status.html";
  };
};
