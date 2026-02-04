// ✅ Firebase Config (PUT YOURS HERE)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Button Click
document.getElementById("requestRide").onclick = async () => {

  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;

  if (!pickup || !dropoff) {
    alert("Enter pickup + dropoff!");
    return;
  }

  // Save Ride
  await db.collection("rides").add({
    pickup: pickup,
    dropoff: dropoff,
    status: "Pending",
    createdAt: new Date()
  });

  // Go to Status Page
  window.location.href = "status.html";
};

