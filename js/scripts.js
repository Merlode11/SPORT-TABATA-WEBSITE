/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  
  
/* Get the different elements */

// Views
var chrono = document.getElementById("chrono")
var ex = document.getElementById("exercice");
var mhdiv = document.getElementById("masthead-divider");
var startbtn = document.getElementById("start");

// Exercices
const exsForm = document.getElementById("exsForm")
const ex1 = exsForm.getElementById("ex1")
const ex2 = exsForm.getElementById("ex2")
const ex3 = exsForm.getElementById("ex3")
const ex4 = exsForm.getElementById("ex4")
const ex5 = exsForm.getElementById("ex5")
const ex6 = exsForm.getElementById("ex6")
const ex7 = exsForm.getElementById("ex7")
const ex8 = exsForm.getElementById("ex8")

const times = document.getElementById("times")
const repsNum = times.getElementById("repsNum")
const RecupTime = times.getElementById("RecupTime")

const ressenti = document.getElementById("ressenti")


  // Set the date we're counting down to
var countDownDate = new Date("Nov 12, 2020 14:23:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  chrono.innerHTML = minutes + " : " + seconds;
    
  // If the count down is over, write some text 
  if (distance <= 1) {
    clearInterval(x);
    chrono.innerHTML = "STOP";
	chrono.classList.add("text-danger")
  }
}, 1000);

/* Events */

// On Clic en startbtn
startbtn.onclick = function(){
	ex.style.display = "block";
	chrono.style.display = "block";
	mhdiv.style.display = "block";
}

// On form change
startbtn.onchange = function(){
	// Array
	const ex1 = exsForm.getElementById("ex1")
	const ex2 = exsForm.getElementById("ex2")
	const ex3 = exsForm.getElementById("ex3")
	const ex4 = exsForm.getElementById("ex4")
	const ex5 = exsForm.getElementById("ex5")
	const ex6 = exsForm.getElementById("ex6")
	const ex7 = exsForm.getElementById("ex7")
	const ex8 = exsForm.getElementById("ex8")
}

// selectedEx1 = ex1.options[ex1.selectedIndex].text

ex.style.display = "none";
chrono.style.display = "none";
mhdiv.style.display = "none";
	
  
