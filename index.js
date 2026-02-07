// ✅ Firebase Config (PUT YOURS HERE)
const firebaseConfig = {
  apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Button Click
document.getElementById("requestRide").onclick = async () => {

  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;

  if (!pickup || !dropoff) {
    alert("Enter pickup + dropoff!");
    return;
  }

  // Save Ride
  await db.collection("rides").add({
    pickup: pickup,
    dropoff: dropoff,
    status: "Pending",
    createdAt: new Date()
  });

  // Go to Status Page
  window.location.href = "status.html";
};

