let gobutton = document.getElementById("gobutton");
let readybutton = document.getElementById("readybutton");
let stopbutton = document.getElementById("stopbutton");
let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function stop() {
    stopLight.style.backgroundColor = "#cf1124";
    readyLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
}

function ready() {
    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#f7c948";
    goLight.style.backgroundColor = "#4b5069";
}

function go() {
    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#199473";
}