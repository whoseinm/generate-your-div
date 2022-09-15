function divOptions() {
  var width = document.getElementById("widthInput").value;
  var height = document.getElementById("heightInput").value;
  var radius = document.getElementById("radiusInput").value;
  var color = document.getElementById("divColor").value;
  var textColor = document.getElementById("textColor").value;
  var fontSize = document.getElementById("textSize").value;
  var text = document.getElementById("textInput").value;
  var div = document.getElementById("div");


  div.style.width = width;
  div.style.height = height;
  div.style.borderRadius = radius;
  div.style.background = color;
  div.innerHTML = text;
  div.style.color = textColor;
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.fontWeight = "500";
  div.style.fontSize = fontSize + "px";
  document.getElementById("div").style.top = "50%";
  document.getElementById("div").style.left = "50%";
  document.getElementById("div").style.transform = "translate(-50%, -50%)";
  // rotate(" + rotateDeg + "deg)";

}

// RESET BUTTON
function resetAll() {
  var div = document.getElementById("div");

  //   div.style.width = "0px";
  //   div.style.height = "0px";
  //   div.style.borderRadius = "0px";
  //   div.style.background = "white";

  document.getElementById("textSize").value = "14";
  document.getElementById("rotateDeg").value = "0";
  document.getElementById("div").style.width = "0px";
  document.getElementById("div").style.height = "0px";
  document.getElementById("textInput").value = "";
  document.getElementById("div").innerHTML = "";
  document.getElementById("widthInput").value = "";
  document.getElementById("heightInput").value = "";
  document.getElementById("radiusInput").value = "";
  document.getElementById("divColor").value = "";



  document.getElementById("div").style.top = "50%";
  document.getElementById("div").style.left = "50%";
  document.getElementById("div").style.transform = "translate(-50%, -50%)";
}

let div = document.getElementById("div");


function rotateDiv() {
  var div = document.getElementById("div");
  var rotateDeg = document.getElementById("rotateDeg").value;

  div.style.transform = "translate(-50%, -50%) rotate(" + rotateDeg + "deg)";
}



