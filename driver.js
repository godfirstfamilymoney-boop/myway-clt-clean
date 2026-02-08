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


// ACCEPT RIDE
document.getElementById("acceptRide").onclick = async function () {

  await db.collection("rides").doc(rideId).update({
    status: "Driver Assigned"
  });
};


// COMPLETE RIDE
document.getElementById("completeRide").onclick = async function () {

  await db.collection("rides").doc(rideId).update({
    status: "Completed",
    fare: 15
  });
};
