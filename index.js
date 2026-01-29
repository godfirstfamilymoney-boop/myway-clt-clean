✅ NOW FIX index.js (THIS IS THE REAL ISSUE)
Replace your entire index.js with this:
// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD88ZxhCOxPs1IFzITYAGO0gpIyp4tLzr8",
  authDomain: "my-way-clt-2026.firebaseapp.com",
  projectId: "my-way-clt-2026",
};

// ✅ Initialize Firebase ONLY ONCE
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ✅ Button Click Redirect Test
document.getElementById("requestRide").onclick = async () => {
  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;

  if (!pickup || !dropoff) {
    alert("Enter pickup and dropoff!");
    return;
  }

  // ✅ Save ride to Firestore
  await db.collection("rides").add({
    pickup: pickup,
    dropoff: dropoff,
    status: "Pending",
    createdAt: new Date(),
  });

  // ✅ Redirect
  window.location.href = "status.html";
};
