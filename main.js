x = 0;
y = 0;
draw_circle = "" ;
draw_rectangle = "" ;

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening to you speak please =)"
    recognition.start();
}

recognition.onresults = function(event) {
    console.log(event);
    
    var content = event.results[0][0].transcript ;

    if(content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(math.random() * 600);
        document.getElementById("status").innerHTML = "We are drawing a circle";
        draw_circle = "set";
    }
    if(content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "We are drawing a rectangle";
        draw_rectangle = "set";
    }
}

function setup() {
   create = createCanvas(900, 600);
}

function draw() {
    if(draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle Is Drawn =)";
        draw_circle = "";
    }
    if(draw_rectangle == "set") {
        radius = Math.floor(Math.random() * 100);
        rect(x, y, radius);
        document.getElementById("status").innerHTML = "Rectangle Is Drawn =)";
        draw_rectangle = "";
    }
}