// Firebase Config (PUT YOURS)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Elements
const rideBox = document.getElementById("driverRideInfo");
const acceptBtn = document.getElementById("acceptRide");
const completeBtn = document.getElementById("completeRide");

let latestRideId = null;

// Load latest ride
async function loadRide() {

  const snap = await db
    .collection("rides")
    .orderBy("createdAt", "desc")
    .limit(1)
    .get();

  if (snap.empty) {
    rideBox.innerHTML = "No rides available 🚫";
    acceptBtn.style.display = "none";
    return;
  }

  const doc = snap.docs[0];
  latestRideId = doc.id;
  const ride = doc.data();

  rideBox.innerHTML = `
    <strong>Pickup:</strong> ${ride.pickup}<br/>
    <strong>Dropoff:</strong> ${ride.dropoff}<br/>
    <strong>Status:</strong> ${ride.status}
  `;
}

loadRide();

// Accept Ride
acceptBtn.onclick = async () => {

  await db.collection("rides").doc(latestRideId).update({
    status: "Driver Assigned"
  });

  alert("Ride Accepted ✅");

  acceptBtn.style.display = "none";
  completeBtn.style.display = "block";
};

// Complete Ride
completeBtn.onclick = async () => {

  await db.collection("rides").doc(latestRideId).update({
    status: "Completed",
    fare: 15.00
  });

  alert("Ride Completed 🏁");

  window.location.href = "receipt.html";
};
