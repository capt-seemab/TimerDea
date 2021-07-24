var s = skrollr.init()

// parallax effect 
var text = document.getElementById('text');
var parallaxInstance = new Parallax(text);


// watch 
const deg = 6
const hours = document.querySelector("#hour")
const mins = document.querySelector("#min")
const secs = document.querySelector("#sec")
setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hours.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
    mins.style.transform = `rotateZ(${(mm)}deg)`
    secs.style.transform = `rotateZ(${(ss)}deg)`
})

// stopwatch 

let stopWatchSeconds = 0
let stopWatchMinutes = 0
let stopWatchHours = 0

//var for adding a prezero for less than 10 

let displayStopWatchSeconds = 0
let displayStopWatchMinutes = 0
let displayStopWatchHours = 0

let interval = null
let status = "stopped"

function stopWatch() {
    stopWatchSeconds++;
    if (stopWatchSeconds / 60 === 1) {
        stopWatchSeconds = 0
        stopWatchMinutes++

        if (stopWatchMinutes / 60 === 1) {
            stopWatchMinutes = 0
            stopWatchHours++
        }
    }

    if (stopWatchSeconds < 10) {
        displayStopWatchSeconds = "0" + stopWatchSeconds.toString()
    }
    else {
        displayStopWatchSeconds = stopWatchSeconds
    }
    if (stopWatchMinutes < 10) {
        displayStopWatchMinutes = "0" + stopWatchMinutes.toString()
    }
    else {
        displayStopWatchMinutes = stopWatchMinutes
    }
    if (stopWatchHours < 10) {
        displayStopWatchHours = "0" + stopWatchHours.toString()
    }
    else {
        displayStopWatchHours = stopWatchHours
    }

    document.getElementById("displayScreen").innerHTML =
        displayStopWatchHours + " : " + displayStopWatchMinutes + " : " + displayStopWatchSeconds

}
function startAndStop() {
    if (status === "stopped") {
        interval = window.setInterval(stopWatch, 1000)
        document.getElementById("startStop").innerHTML = "Stop"
        status = "Started"
    }
    else {
        window.clearInterval(interval)
        document.getElementById("startStop").innerHTML = "Start"
        status = "stopped"
    }
}
function reset() {
    window.clearInterval(interval)
    stopWatchSeconds = 0
    stopWatchMinutes = 0
    stopWatchHours = 0
    document.getElementById("displayScreen").innerHTML = "00 : 00 : 00"
    document.getElementById("startStop").innerHTML = "Start"
}
