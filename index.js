alert("index.js loaded");

// Wait until page fully loads
window.onload = function () {

  const btn = document.getElementById("requestRide");

  if (!btn) {
    alert("Button NOT found");
    return;
  }

  btn.onclick = function () {
    alert("Button clicked — working!");

    // Go to status page
    window.location.href = "status.html";
  };

};
