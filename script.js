// ------------------ Ship ------------------ //

// Adding the Ship to body

var imgPyu = document.createElement("img");
imgPyu.src = "knight/k1.png";
imgPyu.setAttribute("id", "pyuShip");
document.body.appendChild(imgPyu);


// Function to move the ship to the right
//const screenWidth = window.screen.width;
//pixel from left to right base = ship
var positionPlayer = 0;
const nbPxlMvRightShip = 25;
const nbPxlMvLeftShip = -25;
const strPxlMvShip = "px";

function moveToRightShip() {
  var mRightShip = document.getElementById("pyuShip");
  positionPlayer += nbPxlMvRightShip;
  var styleRightShip = positionPlayer + strPxlMvShip;
  mRightShip.style.left = styleRightShip;
}

function moveToLeftShip() {
  var mLeftShip = document.getElementById("pyuShip");
  positionPlayer += nbPxlMvLeftShip;
  var styleLeftShip = positionPlayer + strPxlMvShip;
  mLeftShip.style.left = styleLeftShip;
}


// ------------------ Button ------------------ //

// Adding right button

var btnMoveRight = document.createElement("button");
btnMoveRight.innerHTML = "RIGHT";
btnMoveRight.setAttribute("class", "btn");
btnMoveRight.setAttribute("id", "btnShipMoveRight");
btnMoveRight.setAttribute("onclick", "moveToRightShip()");
document.body.appendChild(btnMoveRight);


//Adding left button

var btnMoveLeft = document.createElement("button");
btnMoveLeft.innerHTML = "LEFT";
btnMoveLeft.setAttribute("class", "btn");
btnMoveLeft.setAttribute("id", "btnShipMoveLeft");
btnMoveLeft.setAttribute("onclick", "moveToLeftShip()");
document.body.appendChild(btnMoveLeft);









