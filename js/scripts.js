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
var errorStart = document.getElementById("errorStart")

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

let exsChoosedValue = []
exsChoosedValue.push(ex1.options[ex1.selectedIndex].value)
exsChoosedValue.push(ex2.options[ex2.selectedIndex].value)
exsChoosedValue.push(ex3.options[ex3.selectedIndex].value)
exsChoosedValue.push(ex4.options[ex4.selectedIndex].value)
exsChoosedValue.push(ex5.options[ex5.selectedIndex].value)
exsChoosedValue.push(ex6.options[ex6.selectedIndex].value)
exsChoosedValue.push(ex7.options[ex7.selectedIndex].value)
exsChoosedValue.push(ex8.options[ex8.selectedIndex].value)

//saving the values in local storage
localStorage.setItem("ex1", ex1.options[ex1.selectedIndex].text);
localStorage.setItem("ex2", ex2.options[ex2.selectedIndex].text);
localStorage.setItem("ex3", ex3.options[ex3.selectedIndex].text);
localStorage.setItem("ex4", ex4.options[ex4.selectedIndex].text);
localStorage.setItem("ex5", ex5.options[ex5.selectedIndex].text);
localStorage.setItem("ex6", ex6.options[ex6.selectedIndex].text);
localStorage.setItem("ex7", ex7.options[ex7.selectedIndex].text);
localStorage.setItem("ex8", ex8.options[ex8.selectedIndex].text);



// Sounds
const musicForm = document.getElementById("Musicform")
const Custom = document.getElementById("customMusic")
var errorCustom = document.getElementById("errorCustom")
const Music = document.getElementById("music")
const Voix_OFF = document.getElementById("customCheck1")
var YoutubeMusic = document.getElementById("YoutubeMusic")

const times = document.getElementById("times")
const repsNum = document.getElementById("repsNum")
const RecupTime = document.getElementById("RecupTime")

const ressenti = document.getElementById("ressenti")
const generatePDF = document.getElementById("generatePDF")

localStorage.setItem("ressenti", ressenti.value);
localStorage.setItem("repsNum", repsNum.options[repsNum.selectedIndex].text);
localStorage.setItem("RecupTime", RecupTime.options[RecupTime.selectedIndex].text);
let exNum = 0

/* On Page load */
ex.style.display = "none";
chrono.style.display = "none";
mhdiv.style.display = "none";
generate_pdf.style.display = "none";
startbtn.style.display = "block";

if (exsChoosed.includes("Choisir")) {
    startbtn.disabled = true
    errorStart.style.display ="block"
} else {
    startbtn.disabled = false
    errorStart.style.display ="none"
}

/* Events */

// On Click en startbtn
startbtn.onclick = function(){
    chrono.classList.remove("text-danger")
    chrono.style.display = "block";
	mhdiv.style.display = "flex";
    generate_pdf.style.display = "none";
    startbtn.style.display = "none";
    YoutubeMusic.innerHTML = '<audio id="youtube" autoplay></audio>'

    chrono.innerHTML = "PRÊT ?"
    setTimeout(function(){ chrono.innerHTML = "FEU" }, 2000);
    setTimeout(function(){ chrono.innerHTML = "GO !" }, 3000);
    setTimeout(function(){
        ex.style.display = "block";
        tabata()
    }, 4000);
    setTimeout(function(){
        ex.innerHTML = 'LONG REPOS'
        startTimer(RecupTime.value, RecupTime.value, 'GO')
        exNum = 0
    }, 240000);
    setTimeout(function(){
        tabata()
    }, 240000 + parseInt(RecupTime.value) * 1000);

    if (parseInt(repsNum.value) >= 3) {
        setTimeout(function(){
            ex.innerHTML = 'LONG REPOS'
            startTimer(RecupTime.value, RecupTime.value, 'GO')
        }, 240000 * 2 + parseInt(RecupTime.value) * 2);
        setTimeout(function(){
            tabata()
        }, 240000 * 2 + parseInt(RecupTime.value) * 1000 * 3);
    } else {
        setTimeout(function(){
            chrono.innerHTML = "FIN DU TABATA"
            ex.style.display = "none";
            generate_pdf.style.display = "block";
            startbtn.style.display = "block";
        }, 240000 * 2 + parseInt(RecupTime.value) * 2);
    }
    
    if (parseInt(repsNum.value) === 4) {
        setTimeout(function(){
            ex.innerHTML = 'LONG REPOS'
            startTimer(RecupTime.value, RecupTime.value, 'GO')
        }, 240000 * 3 + parseInt(RecupTime.value) * 1000 * 3);
        setTimeout(function(){
            tabata()
        }, 240000 * 3 + parseInt(RecupTime.value) * 1000 * 4);
        setTimeout(function(){
                chrono.innerHTML = "FIN DU TABATA"
                ex.style.display = "none";
                generate_pdf.style.display = "block";
                startbtn.style.display = "block";
        }, 240000 * 4 + parseInt(RecupTime.value) * 1000 * 4);
    } else {
        setTimeout(function(){
            chrono.innerHTML = "FIN DU TABATA"
            ex.style.display = "none";
            generate_pdf.style.display = "block";
            startbtn.style.display = "block";
        }, 240000 * 3 + parseInt(RecupTime.value) * 1000 * 3);
    }

}

generatePDF.onclick = function () {
    window.open(
        `https://dhtml2pdf.herokuapp.com/api.php?url=${document.location.origin}result.html&result_type=show`, "_blank");
}

// On form change
exsForm.onchange = function(){
	exsChoosed = []
	exsChoosed.push(ex1.options[ex1.selectedIndex].text)
	exsChoosed.push(ex2.options[ex2.selectedIndex].text)
	exsChoosed.push(ex3.options[ex3.selectedIndex].text)
	exsChoosed.push(ex4.options[ex4.selectedIndex].text)
	exsChoosed.push(ex5.options[ex5.selectedIndex].text)
	exsChoosed.push(ex6.options[ex6.selectedIndex].text)
	exsChoosed.push(ex7.options[ex7.selectedIndex].text)
	exsChoosed.push(ex8.options[ex8.selectedIndex].text)

    exsChoosedValue = []
    exsChoosedValue.push(ex1.options[ex1.selectedIndex].value)
    exsChoosedValue.push(ex2.options[ex2.selectedIndex].value)
    exsChoosedValue.push(ex3.options[ex3.selectedIndex].value)
    exsChoosedValue.push(ex4.options[ex4.selectedIndex].value)
    exsChoosedValue.push(ex5.options[ex5.selectedIndex].value)
    exsChoosedValue.push(ex6.options[ex6.selectedIndex].value)
    exsChoosedValue.push(ex7.options[ex7.selectedIndex].value)
    exsChoosedValue.push(ex8.options[ex8.selectedIndex].value)

    localStorage.setItem("ex1", ex1.options[ex1.selectedIndex].text);
    localStorage.setItem("ex2", ex2.options[ex2.selectedIndex].text);
    localStorage.setItem("ex3", ex3.options[ex3.selectedIndex].text);
    localStorage.setItem("ex4", ex4.options[ex4.selectedIndex].text);
    localStorage.setItem("ex5", ex5.options[ex5.selectedIndex].text);
    localStorage.setItem("ex6", ex6.options[ex6.selectedIndex].text);
    localStorage.setItem("ex7", ex7.options[ex7.selectedIndex].text);
    localStorage.setItem("ex8", ex8.options[ex8.selectedIndex].text);

    if (exsChoosed.includes("Choisir")) {
        startbtn.disabled = true
        errorStart.style.display ="block"
    } else {
        startbtn.disabled = false
        errorStart.style.display ="none"
    }
}
Custom.onchange = function () {
    var url = Custom.value
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (!match && Music.text === 'Aucune') {
        errorCustom.style.display ="block"
    } else {
        errorCustom.style.display ="none"
    }
}

ressenti.onchange = function () {
    localStorage.setItem("ressenti", ressenti.value);
    if (!ressenti.value) {
        generatePDF.disabled = true
    } else {
        generatePDF.disabled = false
    }
}
repsNum.onchange = function () {
    localStorage.setItem("repsNum", repsNum.options[repsNum.selectedIndex].text);

}

RecupTime.onchange = function () {
    localStorage.setItem("RecupTime", RecupTime.options[RecupTime.selectedIndex].text);
}

/* Functions */
function tabata () {
    exNum = 0
    Start_Music()
    next(exNum)
    setTimeout(function(){
        next(exNum)
    }, 30000)
    setTimeout(function(){
        next(exNum)
    }, 60000)
    setTimeout(function(){
        next(exNum)
    }, 90000)
    setTimeout(function(){
        next(exNum)
    }, 120000)
    setTimeout(function(){
        next(exNum)
    }, 150000)
    setTimeout(function(){
        next(exNum)
    }, 180000)
    setTimeout(function(){
        next(exNum)
    }, 210000)
}

function next(n) {
    ex.innerHTML = "EX" + (n +1) + " : " + exsChoosed[n]
    startTimer(20, 20, 'STOP')

    if (n !== 7) setTimeout(function(){
             ex.innerHTML = 'REPOS'
             startTimer(10, 10, 'GO')
    }, 20002)
    exNum = exNum +1
}

// State = text at end
function startTimer(TIME_LIMIT, timeLeft, state) {
        let timePassed = 0;
        const timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            chrono.innerHTML = formatTime(timeLeft);
            if (timeLeft === 5 && Voix_OFF.checked && state === 'GO') {
                const audio = new Audio(`https://raw.githubusercontent.com/Merlode11/SPORT-TABATA-WEBSITE/main/assets/sounds/Exercices/${exsChoosedValue[exNum]}.mp3`);
                audio.play();
            }
            if (timeLeft === 3 && Voix_OFF.checked) {
                const audio = new Audio(`https://raw.githubusercontent.com/Merlode11/SPORT-TABATA-WEBSITE/main/assets/sounds/Exercices/${state}.mp3`);
                audio.play();
            }
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                chrono.innerHTML = state;
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
    if (Custom.value && Music.text !== 'Aucune') {
        let videoID = null;
        const url = Custom.value
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            videoID = match[2];
        }

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