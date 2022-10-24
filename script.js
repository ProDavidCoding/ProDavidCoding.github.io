var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 


speech = true;
let transcript;

window.SpeechRecognition = window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', e => {

    if(speech == true) {

        transcript = Array.from(e.results)

        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

        if((transcript.split(" ")).includes("reminders")) {
            location.href = './reminders.html';
        } else if((transcript.split(" ")).includes("activities")) {
            location.href = './activities.html';
        } else if((transcript.split(" ")).includes("quiz")) {
            location.href = './quiz.html';
        } else if((transcript.split(" ")).includes("talk")) {
            location.href = './talk.html';
        } else if((transcript.split(" ")).includes("home")) {
            location.href = './index.html';
        } else if((transcript.split(" ")).includes("help")) {
            goHelp();
        } else if((transcript.split(" ")).includes("radio")) {
            location.href = './radio.html';
        } else if((transcript.split(" ")).includes("play")) {
            playAudio();
        }

    }

});

recognition.start();

var counter = 0;
var interval = setInterval(function(){
      counter++;
},1000)


recognition.onend = function() {
 if(counter <= 5 * 600000)
    recognition.start();
 else
   clearInterval(interval)
}

function goSomeoneHome() {
    window.location.href = "./help.html";
}

function goHelp() {
    window.location.href = "./help.html";
}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
}

function updateDate() {
    let str = '';
    let day_name = '';
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let day = d.getDay();
    if(day == 0) {
        day_name = 'Mon';
    }
    if(day == 1) {
        day_name = 'Tue';
    }
    if(day == 2) {
        day_name = 'Wed'
    }
    if(day = 3) {
        day_name = 'Thu';
    }
    if(day = 4) {
        day_name = 'Fri';
    }
    if(day = 5) {
        day_name = 'Sat';
    }
    if(day = 6) {
        day_name = 'Sun';
    }

    str = day_name + ', ' + monthNames[d.getMonth()] + ' ' + d.getDate();
    document.getElementById("date").innerHTML = str;
}

function updateTime() {
    var today = new Date();
    var minutes = today.getMinutes();
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    var time = today.getHours() + ":" + minutes;
    document.getElementById("time").innerHTML = time;
}

let dots = 0;

function dotsChange() {
    if(dots == 0) {
        document.getElementById("call_status_message").innerHTML = 'Searching.';
    } else if(dots == 1) {
        document.getElementById("call_status_message").innerHTML = 'Searching..';
    } else if(dots == 2) {
        document.getElementById("call_status_message").innerHTML = 'Searching...';
    } else {
        document.getElementById("call_status_message").innerHTML = 'Searching';
    }

    if(dots < 3) {
        dots += 1;
    } else {
        dots = 0;
    }
}

setInterval(updateTime, 1000);
setInterval(updateDate, 1000);
setInterval(dotsChange, 1000);
