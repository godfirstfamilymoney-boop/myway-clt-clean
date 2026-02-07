alert("status.js running");

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Get ride ID
const rideId = localStorage.getItem("rideId");

if (!rideId) {
  document.getElementById("statusText").innerText = "No ride found";
}

// LIVE LISTENER (auto update)
db.collection("rides").doc(rideId)
  .onSnapshot((doc) => {
    if (!doc.exists) return;

    const ride = doc.data();

    document.getElementById("pickup").innerText = ride.pickup;
    document.getElementById("dropoff").innerText = ride.dropoff;
    document.getElementById("statusText").innerText = ride.status;

    // Status lights
    document.getElementById("pendingDot").style.opacity =
      ride.status === "Pending" ? "1" : "0.3";

    document.getElementById("driverDot").style.opacity =
      ride.status === "Driver Assigned" ? "1" : "0.3";

    document.getElementById("completeDot").style.opacity =
      ride.status === "Ride Completed" ? "1" : "0.3";
  });
