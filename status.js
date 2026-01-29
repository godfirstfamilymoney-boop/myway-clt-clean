// ✅ Firebase Config
const firebaseConfig = {
apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ✅ Grab HTML Elements
const statusBox = document.getElementById("statusBox");
const rideStatus = document.getElementById("rideStatus");

const dotRequested = document.getElementById("dotRequested");
const dotAssigned = document.getElementById("dotAssigned");
const dotComplete = document.getElementById("dotComplete");

// ✅ Listen to Latest Ride
db.collection("rides")
  .orderBy("createdAt", "desc")
  .limit(1)
  .onSnapshot((snapshot) => {
    if (snapshot.empty) return;

    const ride = snapshot.docs[0].data();

    // Show Ride Info
    statusBox.innerHTML = `
      <b>Pickup:</b> ${ride.pickup}<br>
      <b>Dropoff:</b> ${ride.dropoff}
    `;

    // Show Status Text
    rideStatus.innerText = ride.status;

    // Reset dots
    dotRequested.style.background = "gray";
    dotAssigned.style.background = "gray";
    dotComplete.style.background = "gray";

    // Update dots
    if (ride.status === "Pending") {
      dotRequested.style.background = "lime";
    }

    if (ride.status === "Driver Assigned") {
      dotRequested.style.background = "lime";
      dotAssigned.style.background = "lime";
    }

    if (ride.status === "Completed") {
      dotRequested.style.background = "lime";
      dotAssigned.style.background = "lime";
      dotComplete.style.background = "lime";
    }
  });

