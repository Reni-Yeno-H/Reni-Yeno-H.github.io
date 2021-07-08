"use strict";
/*
  CISC 3140 Summer Term Project
    
    Reni's Bakery
    Author: Hao Ren Yuan
    Date: June 11, 2021 - July 8,2021

    Filename: user_system.js
*/

function displayGreeting() {
  /* document.getElementById('logout').style.display ='none'; */
  var username = document.getElementById('username').value;
  document.getElementById('loginMessage').innerHTML = 'Welcome ' + username + '!';
  /* document.getElementById('logout').style.visibility = 'visible'; */
  
}

function purchaseGreeting(){
  var cardHolder = document.getElementById('cardHolder').value;
  document.getElementById('loginMessage').innerHTML = 'Thank you for your purchase ' + cardHolder + '! Shop with us next time!';
}
