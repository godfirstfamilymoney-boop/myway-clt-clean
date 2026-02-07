alert("driver.js running");

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Load latest ride
async function loadRide() {
  const snapshot = await db.collection("rides")
    .orderBy("createdAt", "desc")
    .limit(1)
    .get();

  if (snapshot.empty) {
    document.getElementById("rideInfo").innerText = "No rides yet";
    return;
  }

  const doc = snapshot.docs[0];
  const ride = doc.data();

  document.getElementById("rideInfo").innerText =
    "Pickup: " + ride.pickup +
    "\nDropoff: " + ride.dropoff +
    "\nStatus: " + ride.status;

  // Save ride ID
  window.currentRideId = doc.id;
}

loadRide();

// Accept ride
document.getElementById("acceptRide").onclick = async function () {
  if (!window.currentRideId) return;

  await db.collection("rides").doc(window.currentRideId).update({
    status: "Driver Assigned"
  });

  alert("Ride accepted");
  loadRide();
};
