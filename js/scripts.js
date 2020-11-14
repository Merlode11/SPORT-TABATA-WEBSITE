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
var generate_pdf = document.getElementById("genrate_pdf");
var error = document.getElementById("error")

// Exercices
const exsForm = document.getElementById("exsForm")
const ex1 = document.getElementById("ex1")
const ex2 = document.getElementById("ex2")
const ex3 = document.getElementById("ex3")
const ex4 = document.getElementById("ex4")
const ex5 = document.getElementById("ex5")
const ex6 = document.getElementById("ex6")
const ex7 = document.getElementById("ex7")
const ex8 = document.getElementById("ex8")

let exsChoosed = []
exsChoosed.push(ex1.options[ex1.selectedIndex].text)
exsChoosed.push(ex2.options[ex2.selectedIndex].text)
exsChoosed.push(ex3.options[ex3.selectedIndex].text)
exsChoosed.push(ex4.options[ex4.selectedIndex].text)
exsChoosed.push(ex5.options[ex5.selectedIndex].text)
exsChoosed.push(ex6.options[ex6.selectedIndex].text)
exsChoosed.push(ex7.options[ex7.selectedIndex].text)
exsChoosed.push(ex8.options[ex8.selectedIndex].text)

// Music
const musicForm = document.getElementById("Musicform")
const Custom = document.getElementById("customMusic")
const Music = document.getElementById("music")

const times = document.getElementById("times")
const repsNum = document.getElementById("repsNum")
const RecupTime = document.getElementById("RecupTime")

const ressenti = document.getElementById("ressenti")

// Update the count down every 1 second
// var x = setInterval(function() {
// 
//   // Get today's date and time
//   var now = new Date().getTime();
//     
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
//     
//   // Time calculations for days, hours, minutes and seconds
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     
//   // Output the result in an element with id="demo"
//   chrono.innerHTML = minutes + " : " + seconds;
//     
//   // If the count down is over, write some text
//   if (distance <= 1) {
//     clearInterval(x);
//     chrono.innerHTML = "STOP";
// 	chrono.classList.add("text-danger")
//   }
// }, 1000);

/* Events */

// On Click en startbtn
startbtn.onclick = function(){
    chrono.classList.remove("text-danger")
    chrono.style.display = "block";
	mhdiv.style.display = "flex";

    chrono.innerHTML = "PRÊT ?"
    Start_Music ()
    setTimeout(function(){ chrono.innerHTML = "FEU" }, 2000);
    setTimeout(function(){ chrono.innerHTML = "GO !" }, 3000);
    setTimeout(function(){
        ex.style.display = "block";
        tabata()
    }, 4000);
}

// On form change
exsForm.onchange = function(){
	// Array
	exsChoosed = []
	exsChoosed.push(ex1.options[ex1.selectedIndex].text)
	exsChoosed.push(ex2.options[ex2.selectedIndex].text)
	exsChoosed.push(ex3.options[ex3.selectedIndex].text)
	exsChoosed.push(ex4.options[ex4.selectedIndex].text)
	exsChoosed.push(ex5.options[ex5.selectedIndex].text)
	exsChoosed.push(ex6.options[ex6.selectedIndex].text)
	exsChoosed.push(ex7.options[ex7.selectedIndex].text)
	exsChoosed.push(ex8.options[ex8.selectedIndex].text)

    if (exsChoosed.includes("Choisir")) {
        startbtn.disabled = true
        error.style.display ="block"
    } else {
        startbtn.disabled = false
        error.style.display ="none"
    }
}
// selectedEx1 = ex1.options[ex1.selectedIndex].text

ex.style.display = "none";
chrono.style.display = "none";
mhdiv.style.display = "none";
generate_pdf.style.display = "none";

if (exsChoosed.includes("Choisir")) {
    startbtn.disabled = true
    error.style.display ="block"
} else {
    startbtn.disabled = false
    error.style.display ="none"
}

function tabata () {
    exsChoosed.forEach(e => {
        ex.innerHTML = e
            startTimer(20, 20).then(() => {
                console.log(`REPOS`)
                ex.innerHTML = 'REPOS'
                startTimer(10, 10)
            })
        })
}


function startTimer(TIME_LIMIT, timeLeft) {
    let timePassed = 0;
    chrono.classList.remove("text-danger")
    const timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        chrono.innerHTML = formatTime(timeLeft);
        if (timeLeft === 3 ) {
            const audio = new Audio('https://raw.githubusercontent.com/Merlode11/SPORT-TABATA-WEBSITE/main/assets/sounds/Exercices/STOP.mp3');
            audio.play();
        }
        if (timeLeft <= 0) {
                clearInterval(timerInterval);
                chrono.innerHTML = "STOP";
                chrono.classList.add("text-danger");
        }
    }, 1000);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}
function Start_Music () {

    if (Custom.value && Music.options[Music.selectedIndex].text !== 'Aucune') {
        const url = Custom.value
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            //error
        }

        // YouTube video ID
        var videoID = "CMNry4PE93Y";

        // Fetch video info (using a proxy if avoid CORS errors)

        fetch('https://cors-anywhere.herokuapp.com/' + "https://www.youtube.com/get_video_info?video_id=" + videoID).then(response => {

            if (response.ok) {
                response.text().then(ytData => {

                    // parse response to find audio info
                    var ytData = parse_str(ytData);
                    var getAdaptiveFormats = JSON.parse(ytData.player_response).streamingData.adaptiveFormats;
                    var findAudioInfo = getAdaptiveFormats.findIndex(obj => obj.audioQuality);

                    // get the URL for the audio file
                    var audioURL = getAdaptiveFormats[findAudioInfo].url;

                    // update the <audio> element src
                    var youtubeAudio = document.getElementById('youtube');
                    youtubeAudio.src = audioURL;

                });
            }
        });


        function parse_str(str) {
            return str.split('&').reduce(function (params, param) {
                var paramSplit = param.split('=').map(function (value) {
                    return decodeURIComponent(value.replace('+', ' '));
                });
                params[paramSplit[0]] = paramSplit[1];
                return params;
            }, {});
        }
    } else {
        const audio = new Audio(`https://raw.githubusercontent.com/Merlode11/SPORT-TABATA-WEBSITE/main/assets/sounds/Musics/${Music.options[Music.selectedIndex].value}.mp3`);
        audio.play();
    }
}