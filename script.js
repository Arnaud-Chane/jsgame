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
`
document.head.appendChild(styleBtn);








// ------------------ Ship ------------------ //

// Adding the Ship to body

var imgPyu = document.createElement("img");
imgPyu.src = "pyuBig.png";
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



// ------------------ Enemies ------------------ //

var btnSpawnEnemies = document.createElement("button");
btnSpawnEnemies.innerHTML = "Enemies Spawn";
btnSpawnEnemies.setAttribute("class", "btn");
btnSpawnEnemies.setAttribute("id", "btnSpawnEnemies");
btnSpawnEnemies.setAttribute("onclick", "EnemySpawn()");
document.body.appendChild(btnSpawnEnemies);


function EnemySpawn(){
  var enemies = document.createElement("div");
  enemies.style = 
  `
    position: absolute; 
    top: 20px; 
    left: 70px; 
    height: 50px; 
    width: 50px; 
    background-color: black; 
    border-radius: 50%;
  `;
  
  document.body.appendChild(enemies);
  
}

