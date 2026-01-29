alert("index.js is running");

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
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



