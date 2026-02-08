alert("driver.js running");

const db = firebase.firestore();
const rideId = localStorage.getItem("rideId");

if (!rideId) {
  document.getElementById("rideInfo").innerText = "No ride found";
}

// Load ride
db.collection("rides").doc(rideId)
.onSnapshot((doc) => {

  if (!doc.exists) return;

  const ride = doc.data();

  document.getElementById("rideInfo").innerText =
    "Pickup: " + ride.pickup +
    "\nDropoff: " + ride.dropoff +
    "\nStatus: " + ride.status;
});

// 🔥 AUTO ACCEPT RIDE AFTER PAGE LOAD (TEST MODE)
setTimeout(async () => {
  

  await db.collection("rides").doc(window.currentRideId).update({
    status: "Driver Assigned"
  });

  console.log("Driver auto accepted");
  loadRide();
}, 2000);

// 🔥 AUTO ACCEPT RIDE AFTER PAGE LOAD (TEST MODE)
setTimeout(async () => {
  if (!rideId) return;

  await db.collection("rides").doc(rideId).update({
    status: "Driver Assigned"
  });

  console.log("Driver auto accepted");
}, 2000);


// 🔥 AUTO COMPLETE RIDE (TEST MODE)
setTimeout(async () => {
  if (!rideId) return;

  await db.collection("rides").doc(rideId).update({
    status: "Completed"
  });

  console.log("Ride auto completed");
}, 5000);



