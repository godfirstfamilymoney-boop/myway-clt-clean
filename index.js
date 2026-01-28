// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD88ZxhCOxPs1IFzITYAGO0gpIyp4tLzr8",
  authDomain: "my-way-clt-2026.firebaseapp.com",
  projectId: "my-way-clt-2026",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Button Click
document.getElementById("requestRide").onclick = function () {

  let pickup = document.getElementById("pickup").value;
  let dropoff = document.getElementById("dropoff").value;

  if (!pickup || !dropoff) {
    alert("Enter both pickup and dropoff locations!");
    return;
  }

  alert("Ride Requested ✅");

  // Send user to status page
  window.location.href = "status.html";
};
