// ------------------ Style Section ------------------ //

// Style for the Ship
var styleShip = document.createElement("style");
styleShip.innerHTML = `
#pyuShip {
  position: absolute;
  height: 100px;
  width: 100px;
}
`;
document.head.appendChild(styleShip);

// Style for buttons

var styleBtn = document.createElement("style");
styleBtn.innerHTML = `
.btnShipMove {
  position: absolute;
  top: 250px;
  height:20px;
  width: 80px;
}

#btnShipMoveRight {
  right: 25%;
}

#btnShipMoveLeft {
  left: 25%;
}
`
document.head.appendChild(styleBtn);








// ------------------ Buttons ------------------ //

// Adding the Ship to body

var imgPyu = document.createElement("img");
imgPyu.src = "pyu.png";
imgPyu.setAttribute("id", "pyuShip");
document.body.appendChild(imgPyu);


// Function to move the ship to the right
const screenWidth = window.screen.width;
console.log(screenWidth);
//pixel from left to right base = ship
var widthFromRightOfShip = 1500;
var nbPxlMvRightShip = -5;

finalWidthRight = widthFromRightOfShip + nbPxlMvRightShip;

var stPxlMvRightShip = "px";
var styleRightShip = finalWidthRight + stPxlMvRightShip;

function moveToRightShip() {
  var mRightShip = document.getElementById("pyuShip");
//  nbPxlMvRightShip += -5;
  mRightShip.style.right = styleRightShip;
  console.log(styleRightShip);
}


// Adding right button

var btnMoveRight = document.createElement("button");
btnMoveRight.innerHTML = "RIGHT";
btnMoveRight.setAttribute("class", "btnShipMove");
btnMoveRight.setAttribute("id", "btnShipMoveRight");
btnMoveRight.setAttribute("onclick", "moveToRightShip()");
document.body.appendChild(btnMoveRight);


//Adding left button

var btnMoveLeft = document.createElement("button");
btnMoveLeft.innerHTML = "LEFT";
btnMoveLeft.setAttribute("class", "btnShipMove");
btnMoveLeft.setAttribute("id", "btnShipMoveLeft");
document.body.appendChild(btnMoveLeft);

