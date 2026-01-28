alert("index.js is connected!");

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD88ZxhCOxPs1IFzITYAGO0gpIyp4tLzr8",
  authDomain: "my-way-clt-2026.firebaseapp.com",
  projectId: "my-way-clt-2026",
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ✅ Request Ride Button
document.getElementById("requestRide").onclick = async function () {
  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;

  // Stop if empty
  if (!pickup || !dropoff) {
    alert("Please enter both pickup and dropoff locations.");
    return;
  }

  // ✅ Save ride to Firestore
  await db.collection("rides").add({
    pickup: pickup,
    dropoff: dropoff,
    status: "Pending",
    createdAt: new Date(),
  });

  // ✅ Go to Status Page
  window.location.href = "status.html";
};

