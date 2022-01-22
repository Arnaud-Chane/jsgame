class BalanceAccountPlayer {
  constructor(namePlayer, balancePlayer){
    this.namePlayer = namePlayer;
    this.balancePlayer = balancePlayer;
  }
  
  showBalance() {
    alert("Actual balance : " + this.balancePlayer + "€");
  }

  deposit(amount){
    this.balancePlayer += amount;
    this.showBalance();
  }

  withdraw(amount) {
    if (amount > this.balance) {
      alert("Impossible");
    } else {
      alert("Withdrawal : " + amount + "€");
      this.balance -= amount;
      this.showBalance();
    }
  }
}
