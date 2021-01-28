let audio = document.querySelector('audio');
audio.src = music.audio;
audio.volume = volIn.value / 100;
audio.loop = true;
/* audio.controls = false;
audio.style.background = music.color; */
let button = document.querySelector('button');
let updateInterval = 150;
let time = document.getElementById("time");
button.style.backgroundColor = music.color;

function update() {

    setTimeout(() => {
        let position = audio.currentTime / audio.duration * 100;
        time.value = audio.currentTime;
        time.max = audio.duration;



        document.getElementById("time").style.background = "rgba(0, 0, 0, 0) linear-gradient(to right, rgb(153, 72, 72) " + (position) + "%, white " + (position += .5) + "%) repeat scroll 0% 0%";

    }, updateInterval);
    setTimeout(() => {
        update();
    }, updateInterval);

}
function updateVol() {
    audio.volume = volIn.value / 100;
    volInn.value = volIn.value;

}
function updateVol1() {
    volIn.value = volInn.value;
    audio.volume = volInn.value / 100;
}
function playPause() {
    if (isPlaying == false) {
        time.max = audio.duration;
        time.min = 0;
        updateInterval = 300;
        isPlaying = true; audio.play();
        button.innerText = "pause";
        update();

    }
    else if (isPlaying == true) {
        updateInterval = 10000;
        isPlaying = false; audio.pause();
        button.innerText = "play";
    }

}