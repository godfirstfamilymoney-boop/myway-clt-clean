// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD88ZxhCOxPs1IFzITYAGO0gpIyp4tLzr8",
  authDomain: "my-way-clt-2026.firebaseapp.com",
  projectId: "my-way-clt-2026",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ✅ Wait until page loads FIRST
window.onload = function () {

  // Button Click
 document.getElementById("requestRide").onclick = function () {
  alert("Button works!");
  window.location.href = "status.html";
};

};

