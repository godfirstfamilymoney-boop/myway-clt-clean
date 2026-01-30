alert("index.js is running");

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
  storageBucket: "myway-clt-final.firebasestorage.app",
  messagingSenderId: "207622732846",
  appId: "1:207622732846:web:92935a0cef94b261b773bf"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("requestRide").onclick = function () {
  alert("Button works!");

// ✅ Wait until page loads FIRST
window.onload = function () {

  // Button Click
 document.getElementById("requestRide").onclick = function () {
  alert("Button works!");
  window.location.href = "status.html";
};

};





