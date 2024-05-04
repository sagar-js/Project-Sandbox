const texts = ["mobile design", "web design", "3D animation"];

let currentIndex = 0;

function changeText() {
    document.getElementById("change_Text").textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 1000);