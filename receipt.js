// ===============================
// 🔥 FIREBASE CONFIG (FULL SAFE)
// ===============================

const firebaseConfig = {
  apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
  storageBucket: "myway-clt-final.firebasestorage.app",
  messagingSenderId: "207622732846",
  appId: "1:207622732846:web:92935a0cef94b261b773bf"
};

// ✅ Safe Init
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();


// ===============================
// 📌 ELEMENT
// ===============================

const receiptBox = document.getElementById("receiptBox");


// ===============================
// 🧾 LOAD RECEIPT
// ===============================

async function loadReceipt() {
  receiptBox.innerHTML = "Loading receipt...";

  try {
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
      <h3>Ride Completed ✅</h3>

      <p><strong>Pickup:</strong> ${ride.pickup}</p>
      <p><strong>Dropoff:</strong> ${ride.dropoff}</p>

      <p><strong>Status:</strong> ${ride.status}</p>

      <p><strong>Miles:</strong> ${ride.miles || "N/A"}</p>
      <p><strong>Minutes:</strong> ${ride.minutes || "N/A"}</p>

      <h3>Total Paid: 💳 $${ride.fare || "12.00"}</h3>

      <p><strong>Rating:</strong> ⭐ ${ride.rating || "Not rated"}</p>
      <p><strong>Tip:</strong> 💰 $${ride.tip || "0"}</p>
    `;
  } catch (err) {
    console.error(err);
    receiptBox.innerHTML = "Receipt Error ❌ " + err.message;
  }
}

loadReceipt();


