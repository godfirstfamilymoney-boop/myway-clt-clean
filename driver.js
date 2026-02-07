// Firebase already initialized before this file

const db = firebase.firestore();

// Get latest ride LIVE
db.collection("rides")
  .orderBy("createdAt", "desc")
  .limit(1)
  .onSnapshot((snapshot) => {

    if (snapshot.empty) return;

    const doc = snapshot.docs[0];
    const ride = doc.data();

    document.getElementById("pickup").innerText = ride.pickup;
    document.getElementById("dropoff").innerText = ride.dropoff;
    document.getElementById("statusText").innerText = ride.status;

    // Update dots
    document.getElementById("pendingDot").style.opacity =
      ride.status === "Pending" ? "1" : "0.3";

    document.getElementById("driverDot").style.opacity =
      ride.status === "Driver Assigned" ? "1" : "0.3";

    document.getElementById("completeDot").style.opacity =
      ride.status === "Completed" ? "1" : "0.3";

    // Auto go to receipt when completed
    if (ride.status === "Completed") {
      setTimeout(() => {
        window.location.href = "receipt.html";
      }, 1500);
    }
  });

