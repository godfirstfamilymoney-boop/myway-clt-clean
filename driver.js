alert("driver.js running");

// Firebase (only initialize once)
const firebaseConfig = {
  apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

let currentRideId = null;

// Load latest ride
async function loadRide() {
  const snapshot = await db.collection("rides")
    .orderBy("createdAt", "desc")
    .limit(1)
    .get();

  if (snapshot.empty) return;

  const doc = snapshot.docs[0];
  const ride = doc.data();
  currentRideId = doc.id;

  document.getElementById("pickup").innerText = ride.pickup;
  document.getElementById("dropoff").innerText = ride.dropoff;
  document.getElementById("statusText").innerText = ride.status;
}

loadRide();

// Accept Ride
document.getElementById("acceptRide").onclick = async () => {
  if (!currentRideId) return;

  await db.collection("rides").doc(currentRideId).update({
    status: "Driver Assigned"
  });

  loadRide();
};

// Complete Ride
document.getElementById("completeRide").onclick = async () => {
  if (!currentRideId) return;

  await db.collection("rides").doc(currentRideId).update({
    status: "Completed"
  });

  window.location.href = "receipt.html";
};

