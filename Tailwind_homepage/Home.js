// Project Code
const texts = ["mobile design", "web design", "3D animation"];

let currentIndex = 0;

function changeText() {
    document.getElementById("change_Text").textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 1000);


// hover collapse
let i = 0;
let j = 0;
let k = 0;

function Myclick() {
    if (i == 0) {
        document.getElementById("hover_collapse").style.opacity = "1";
        document.getElementById("hover_collapse").style.height = "100px";
        i=1;
    }
    else if (i == 1) {
        document.getElementById("hover_collapse").style.opacity = "0";
        document.getElementById("hover_collapse").style.height = "0px";
        i=0;
    }
}

function Myclick2() {
    if (j == 0) {
        document.getElementById("hover_collapse2").style.opacity = "1";
        document.getElementById("hover_collapse2").style.height = "100px";
        j=1;
    }
    else if (j == 1) {
        document.getElementById("hover_collapse2").style.opacity = "0";
        document.getElementById("hover_collapse2").style.height = "0px";
        j=0;
    }
}

function Myclick3() {
    if (k == 0) {
        document.getElementById("hover_collapse3").style.opacity = "1";
        document.getElementById("hover_collapse3").style.height = "100px";
        k=1;
    }
    else if (k == 1) {
        document.getElementById("hover_collapse3").style.opacity = "0";
        document.getElementById("hover_collapse3").style.height = "0px";
        k=0;
    }
}
