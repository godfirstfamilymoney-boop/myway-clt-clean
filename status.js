alert("status.js running");

const db = firebase.firestore();
const rideId = localStorage.getItem("rideId");

if (!rideId) {
  document.getElementById("statusText").innerText = "No ride found";
}

// LIVE updates
db.collection("rides").doc(rideId)
.onSnapshot((doc) => {

  if (!doc.exists) return;

  const ride = doc.data();

  document.getElementById("pickup").innerText = ride.pickup;
  document.getElementById("dropoff").innerText = ride.dropoff;
  document.getElementById("statusText").innerText = ride.status;

  // Lights
  document.getElementById("pendingDot").style.opacity =
    ride.status === "Pending" ? "1" : "0.3";

  document.getElementById("driverDot").style.opacity =
    ride.status === "Driver Assigned" ? "1" : "0.3";

  document.getElementById("completeDot").style.opacity =
    ride.status === "Completed" ? "1" : "0.3";

  // Go to receipt when done
  if (ride.status === "Completed") {
    setTimeout(() => {
      window.location.href = "receipt.html";
    }, 1500);
  }
});
// 🔥 TEST MODE — AUTO OPEN DRIVER PAGE AFTER 2 SECONDS
setTimeout(() => {
  window.open("driver.html", "_blank");
}, 2000);
