// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD88ZxhCOxPs1IFzITYAGO0gpIyp4tLzr8",
  authDomain: "my-way-clt-2026.firebaseapp.com",
  projectId: "my-way-clt-2026",
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ✅ Wait until page loads
window.onload = function () {

  document.getElementById("requestRide").onclick = async function () {

    const pickup = document.getElementById("pickup").value;
    const dropoff = document.getElementById("dropoff").value;

    if (!pickup || !dropoff) {
      alert("Enter pickup + dropoff");
      return;
    }

    // ✅ Save Ride
    await db.collection("rides").add({
      pickup: pickup,
      dropoff: dropoff,
      status: "Pending",
      createdAt: new Date(),
    });

    // ✅ Redirect
    window.location.href = "status.html";
  };

};
