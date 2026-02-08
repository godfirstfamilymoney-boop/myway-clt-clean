alert("index.js running");

// Firebase already loaded in HTML
const db = firebase.firestore();

document.getElementById("requestRide").onclick = async function () {

  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;

  if (!pickup || !dropoff) {
    alert("Enter pickup and dropoff");
    return;
  }

  // Create ride in Firebase
  const docRef = await db.collection("rides").add({
    pickup: pickup,
    dropoff: dropoff,
    status: "Pending",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  // SAVE rideId so ALL pages use SAME ride
  localStorage.setItem("rideId", docRef.id);

  // Go to status page
  window.location.href = "status.html";
};
