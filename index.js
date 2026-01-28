window.onload = function () {
  alert("INDEX.JS IS RUNNING!");

  document.getElementById("requestRide").onclick = function () {
    alert("BUTTON CLICK WORKS!");
    window.location.href = "status.html";
  };
};
