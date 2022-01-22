// Style Section

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


// Adding the Ship to body

var imgPyu = document.createElement("img");
imgPyu.src = "pyu.png";
imgPyu.setAttribute("id", "pyuShip");
document.body.appendChild(imgPyu);


// Adding right button

var btnMoveRight = document.createElement("button");
btnMoveRight.innerHTML = "RIGHT";
btnMoveRight.setAttribute("class", "btnShipMove");
btnMoveRight.setAttribute("id", "btnShipMoveRight");
document.body.appendChild(btnMoveRight);


//Adding left button

var btnMoveLeft = document.createElement("button");
btnMoveLeft.innerHTML = "LEFT";
btnMoveLeft.setAttribute("class", "btnShipMove");
btnMoveLeft.setAttribute("id", "btnShipMoveLeft");
document.body.appendChild(btnMoveLeft);