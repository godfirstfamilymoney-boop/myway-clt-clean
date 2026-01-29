// ===============================
// ✅ FIREBASE CONFIG
// ===============================

const firebaseConfig = {
  apiKey: "AIzaSyD88ZxhCOxPs1IFzITYAGO0gpIyp4tLzr8",
  authDomain: "my-way-clt-2026.firebaseapp.com",
  projectId: "my-way-clt-2026",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ===============================
// ✅ REQUEST RIDE BUTTON
// ===============================

document.getElementById("requestRide").onclick = async () => {
  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;

  if (!pickup || !dropoff) {
    alert("Enter both pickup and dropoff!");
    return;
  }

  // Save ride in Firestore
  await db.collection("rides").add({
    pickup: pickup,
    dropoff: dropoff,
    status: "Pending",
    createdAt: new Date()
  });

  alert("Ride Requested ✅");

  // Go to status page
  window.location.href = "status.html";
};
