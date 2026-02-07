alert("driver.js running");

// 🔥 Firebase Config (same project as other pages)
const firebaseConfig = {
  apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
};

// Init safely (prevents double init)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// Elements
const rideInfo = document.getElementById("driverRideInfo");
const acceptBtn = document.getElementById("acceptRide");
const completeBtn = document.getElementById("completeRide");

// Hide Complete button first
completeBtn.style.display = "none";

let currentRideId = null;

// ===============================
// 🚘 LOAD LATEST RIDE
// ===============================
async function loadRide() {
  const snapshot = await db
    .collection("rides")
    .orderBy("createdAt", "desc")
    .limit(1)
    .get();

  if (snapshot.empty) {
    rideInfo.innerText = "No rides yet";
    return;
  }

  const doc = snapshot.docs[0];
  currentRideId = doc.id;
  const ride = doc.data();

  rideInfo.innerHTML = `
    <strong>Pickup:</strong> ${ride.pickup}<br>
    <strong>Dropoff:</strong> ${ride.dropoff}<br>
    <strong>Status:</strong> ${ride.status}
  `;

  // Show correct button based on status
  if (ride.status === "Pending") {
    acceptBtn.style.display = "block";
    completeBtn.style.display = "none";
  }

  if (ride.status === "Driver Assigned") {
    acceptBtn.style.display = "none";
    completeBtn.style.display = "block";
  }
}

loadRide();


// ===============================
// ✅ ACCEPT RIDE
// ===============================
acceptBtn.onclick = async function () {
  if (!currentRideId) return;

  await db.collection("rides").doc(currentRideId).update({
    status: "Driver Assigned"
  });

  alert("Ride Accepted 🚗");

  loadRide(); // refresh screen
};


// ===============================
// 🏁 COMPLETE RIDE
// ===============================
completeBtn.onclick = async function () {
  if (!currentRideId) return;

  await db.collection("rides").doc(currentRideId).update({
    status: "Completed"
  });

  alert("Ride Completed 🏁");

  // Go to receipt
  window.location.href = "receipt.html";
};
