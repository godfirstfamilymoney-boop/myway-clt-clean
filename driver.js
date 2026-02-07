// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCbSpg1Xh5Cg9fGNgO-tsw__O8Y7VDT_HM",
  authDomain: "myway-clt-final.firebaseapp.com",
  projectId: "myway-clt-final",
  storageBucket: "myway-clt-final.firebasestorage.app",
  messagingSenderId: "207622732846",
  appId: "1:207622732846:web:92935a0cef94b261b773bf"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// LIVE LISTEN TO RIDES
db.collection("rides").orderBy("createdAt", "desc")
.onSnapshot(snapshot => {

  let html = "";

  snapshot.forEach(doc => {
    const ride = doc.data();
    const id = doc.id;

    html += `
      <div style="border:1px solid #444;padding:10px;margin:10px;border-radius:8px;">
        <b>Pickup:</b> ${ride.pickup}<br>
        <b>Dropoff:</b> ${ride.dropoff}<br>
        <b>Status:</b> ${ride.status}<br><br>

        <button onclick="updateRide('${id}','Driver Assigned')">Accept Ride</button>
        <button onclick="updateRide('${id}','Completed')">Complete Ride</button>
      </div>
    `;
  });

  document.getElementById("ridesList").innerHTML = html;
});


// UPDATE RIDE STATUS
function updateRide(id, newStatus) {
  db.collection("rides").doc(id).update({
    status: newStatus
  });
}
