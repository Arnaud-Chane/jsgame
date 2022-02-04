// ------------------ Style Section ------------------ //

// Style for the Ship
var styleShip = document.createElement("style");
styleShip.innerHTML = `
#pyuShip {
  position: absolute;
  top: 58%;
  height: 100px;
  width: 100px;
}
`;
document.head.appendChild(styleShip);

// Style for buttons

var styleBtn = document.createElement("style");
styleBtn.innerHTML = `
.btn {
  position: absolute;
  top: 80%;
  height:80px;
  width: 80px;
}

#btnShipMoveRight {
  right: 10%;
}

#btnShipMoveLeft {
  left: 10%;
}

#btnSpawnEnemies {
  left: 37%;
}
`;
document.head.appendChild(styleBtn);






