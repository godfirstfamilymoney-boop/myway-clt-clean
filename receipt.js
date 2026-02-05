// Firebase Config (PUT YOURS)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const receiptBox = document.getElementById("receiptBox");

// Load latest completed ride
async function loadReceipt() {

  const snap = await db
    .collection("rides")
    .orderBy("createdAt", "desc")
    .limit(1)
    .get();

  if (snap.empty) {
    receiptBox.innerHTML = "No rides found 🚫";
    return;
  }

  const ride = snap.docs[0].data();

  receiptBox.innerHTML = `
    <strong>Pickup:</strong> ${ride.pickup}<br/><br/>
    <strong>Dropoff:</strong> ${ride.dropoff}<br/><br/>
    <strong>Status:</strong> ${ride.status}<br/><br/>
    <h3>Total Paid: 💳 $${ride.fare || "0.00"}</h3>
  `;
}

loadReceipt();
