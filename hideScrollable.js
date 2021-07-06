/*
   New Perspectives on HTML and CSS, 7th Edition
   Tutorial 7
   Tutorial Case


   Filename: rb_formsubmit.js

   Purpose: The purpose of this program is to simply report on a
            successful completition of a valid Web form.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that the
            student does not have to continually retype test values
            in the survey form.


*/

(function(){

   var doc = document.documentElement;
   var w = window;
 
   var prevScroll = w.scrollY || doc.scrollTop;
   var curScroll;
   var direction = 0;
   var prevDirection = 0;
 
   var header = document.getElementById('site-header');
 
   var checkScroll = function() {
 
     /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */
 
     curScroll = w.scrollY || doc.scrollTop;
     if (curScroll > prevScroll) { 
       //scrolled up
       direction = 2;
     }
     else if (curScroll < prevScroll) { 
       //scrolled down
       direction = 1;
     }
 
     if (direction !== prevDirection) {
       toggleHeader(direction, curScroll);
     }
     
     prevScroll = curScroll;
   };
 
   var toggleHeader = function(direction, curScroll) {
     if (direction === 2 && curScroll > 52) { 
       
       //replace 52 with the height of your header in px
 
       header.classList.add('hide');
       prevDirection = direction;
     }
     else if (direction === 1) {
       header.classList.remove('hide');
       prevDirection = direction;
     }
   };
   
   window.addEventListener('scroll', checkScroll);
 
 })();
