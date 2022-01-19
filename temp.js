var blockPlayer = document.createElement("div");
blockPlayer.setAttribute("id", "blockPlayer");
document.body.appendChild(blockPlayer);

var stylePlayer = document.createElement("style");
stylePlayer.innerHTML = `
  #blockPlayer{
    background-color: black;
    height: 100px;
    width: 100px;
  }`;
document.head.appendChild(stylePlayer);

class balanceAccountPlayer {
  constructor(playerName, balancePlayer){
    this.playerName = playerName;
    this.balancePlayer = balancePlayer;
  }
  
  showBalancePlayer() {
    var balancePlayerDisplay = document.createElement("div");
    balancePlayerDisplay.innerHTML = this.balancePlayer;
    document.body.appendChild(balancePlayerDisplay);
    console.log(balancePlayerDisplay);
  }
  
}

var myBalance = new balanceAccountPlayer("Arnaud", 2500);

var showBalanceButton = document.createElement("button");
showBalanceButton.innerHTML = "Click here to display the balance";
showBalanceButton.setAttribute("onclick", "showBalancePlayer()");
document.body.appendChild(showBalanceButton);
