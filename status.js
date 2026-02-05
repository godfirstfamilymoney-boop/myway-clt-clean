// Firebase Config (PUT YOURS)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Elements
const statusBox = document.getElementById("statusBox");

const dotPending = document.getElementById("dotPending");
const dotAssigned = document.getElementById("dotAssigned");
const dotCompleted = document.getElementById("dotCompleted");

// Listen for latest ride
db.collection("rides")
  .orderBy("createdAt", "desc")
  .limit(1)
  .onSnapshot((snap) => {

    if (snap.empty) {
      statusBox.innerHTML = "No rides found 🚫";
      return;
    }

    const ride = snap.docs[0].data();

    statusBox.innerHTML = `
      <strong>Pickup:</strong> ${ride.pickup}<br/>
      <strong>Dropoff:</strong> ${ride.dropoff}<br/>
      <strong>Status:</strong> ${ride.status}
    `;

    // Reset dots
    dotPending.classList.remove("active");
    dotAssigned.classList.remove("active");
    dotCompleted.classList.remove("active");

    // Activate based on status
    if (ride.status === "Pending") {
      dotPending.classList.add("active");
    }

    if (ride.status === "Driver Assigned") {
      dotPending.classList.add("active");
      dotAssigned.classList.add("active");
    }

    if (ride.status === "Completed") {
      dotPending.classList.add("active");
      dotAssigned.classList.add("active");
      dotCompleted.classList.add("active");
    }
  });
