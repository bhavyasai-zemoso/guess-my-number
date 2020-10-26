'use strict';

//var x=localStorage.getItem("secretNumber");
var x=sessionStorage.getItem("secretNumber");
//alert(x)
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};


document.querySelector('.play_again').addEventListener('click', function () {
window.location.href = "index.html";
});

 function myoutput() {
    document.getElementById('_gover').innerHTML = "Game Over";
    setTimeout(function () {
      document.getElementById('_gover').innerHTML = "";
    }, 500);
  }
this.setInterval(myoutput,1000);
    document.getElementById('secret').innerHTML = "The secret number is "+localStorage.getItem("secretNumber");

