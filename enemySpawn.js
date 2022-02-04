// ------------------ Enemies ------------------ //

var enemiesIdArray = [];
var enemiesNbId = 0;
var enemiesStrId = "alien";
var enemyId = "";

var strPx = "px";
var nbPxleft = 0;
var posXEnemy = "";



var btnSpawnEnemies = document.createElement("button");
btnSpawnEnemies.innerHTML = "Enemies Spawn";
btnSpawnEnemies.setAttribute("class", "btn");
btnSpawnEnemies.setAttribute("id", "btnSpawnEnemies");
btnSpawnEnemies.setAttribute("onclick", "enemySpawn()");
document.body.appendChild(btnSpawnEnemies);




function enemySpawn(){
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
  enemiesNbId += 1;
  enemyId = enemiesStrId + enemiesNbId;
  enemiesIdArray.push(enemyId);
  enemies.setAttribute("id", enemyId);
  console.log(enemies.id);
  console.log(enemiesIdArray);
  document.body.appendChild(enemies);
  nbPxLeft += 10;
  posXEnemy = nbPxLeft + strPx;
  
  
}



class enemySpawnId {
  constructor(enemyId){
    
  }
}
