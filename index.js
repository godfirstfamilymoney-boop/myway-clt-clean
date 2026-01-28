// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD88ZxhCOxPs1IFzITYAGO0gpIyp4tLzr8",
  authDomain: "my-way-clt-2026.firebaseapp.com",
  projectId: "my-way-clt-2026",
};

// ✅ Initialize Firebase ONLY ONCE
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// ✅ Wait for page to fully load
window.onload = () => {
  const btn = document.getElementById("requestRide");

  btn.onclick = async () => {
    const pickup = document.getElementById("pickup").value;
    const dropoff = document.getElementById("dropoff").value;

    if (!pickup || !dropoff) {
      alert("Enter pickup + dropoff");
      return;
    }

    // ✅ Save Ride Request
    await db.collection("rides").add({
      pickup,
      dropoff,
      status: "Pending",
      createdAt: new Date(),
    });

    alert("Ride Requested!");

    // ✅ Go to Status Page
    window.location.href = "status.html";
  };
};
