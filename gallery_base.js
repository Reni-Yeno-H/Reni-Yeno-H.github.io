"use strict";
/*
   CISC 3140 Summer Term Project
    
    Reni's Bakery
    Author: Hao Ren Yuan
    Date: June 11, 2021 - July 8,2021

    Filename: gallery_base.js
*/

var myIndex = 0;
        rotate();
        function rotate() {
            var i;
            var x = document.getElementsByClassName("foods");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) { myIndex = 1 }
            x[myIndex - 1].style.display = "block";
            setTimeout(rotate, 2000); 
        }