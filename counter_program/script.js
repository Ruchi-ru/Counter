
const increaseBtn= document.getElementById("increasebtn");
const decreaseBtn = document.getElementById("decreasebtn");
const resetBtn = document.getElementById("resetbtn");
const counterLabel = document.getElementById("counterlabel");
let count = 0;

increasebtn.onclick= function(){
  count++;
  counterlabel.textContent = count;
}
resetbtn.onclick= function(){
  count= 0;
  counterlabel.textContent= count;
}
decreasebtn.onclick= function(){
  count--;
  counterlabel.textContent = count;
}