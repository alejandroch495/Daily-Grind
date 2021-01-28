let myDay = "";
let today = "";
let music = "";
let myDate = new Date();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);



if (urlParams.has('day')) {
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);

} else {
    myDay = myDate.getDay();

}

switch (myDay) {

    case 1:
        today = "Monday";

        music = {
            bgc: "black",
            color: "pink",
            songname: " Tropical Evening ",
            artist: " Vlad Gluschenko ",
            link: "https://www.youtube.com/watch?v=T5usbtpaVd8",
            linkColor: "gold",
            pic: "images/Tropical-Evening.png",
            alt: "A pic of cover",
            day: "Monday",
            desc: 'Vlog music No copyright',
            audio: "music/TropicalEvening.mp3"
        };

        break;

    case 2:
        today = "Tuesday";

        music = {
            bgc: "black",
            color: "lightblue",
            songname: " City ",
            artist: " MorningLightMusic ",
            link: "https://www.youtube.com/watch?v=kvsFXQFCYbY",
            linkColor: "gold",
            pic: "images/City.png",
            alt: "A pic of cover",
            day: "Tuesday",
            desc: 'MorningLightMusic',
            audio: "music/City.mp3"
        };

        break;


    case 3:
        today = "Wednesday";

        music = {
            bgc: "black",
            color: "pink",
            songname: " Golden Wind OST ",
            artist: " Yugo Kanno ",
            link: "https://www.youtube.com/watch?v=MOHPyHEW1Us&t=829s",
            linkColor: "gold",
            pic: "images/GoldenWindpng.png",
            alt: "A pic of cover",
            day: "Wednesday",
            desc: 'David Production',
            audio: "music/Jojo.mp3"
        };

        break;

    case 4:
        today = "Thursday";

        music = {
            bgc: "black",
            color: "pink",
            songname: " Spectre ",
            artist: " Alan Walker ",
            link: "https://www.youtube.com/watch?v=AOeY-nDp7hI",
            linkColor: "gold",
            pic: "images/Spectre.png",
            alt: "A pic of cover",
            day: "Thursday",
            desc: 'Vlog music No copyright',
            audio: "music/Spectre.mp3"

        };

        break;


    case 5:
        today = "Friday";

        music = {
            bgc: "black",
            color: "deepPink",
            songname: " Astronomia 2K19 - Coffin Dance ",
            artist: " Stephan F ",
            link: "https://www.youtube.com/watch?v=Rk01_D006_Q",
            linkColor: "gold",
            pic: "images/Astronomia-2K19-Coffin-Dance.png",
            alt: "A pic of cover",
            day: "Friday",
            desc: '8D WAYS',
            audio: "music/Coffin.mp3"

        };

        break;


    case 6:
        today = "Saturday";

        music = {
            bgc: "black",
            color: "lightgreen",
            songname: " The Beginning of Time ",
            artist: " DJ Nate ",
            link: "https://www.youtube.com/watch?v=zSts-P2HN04",
            linkColor: "gold",
            pic: "images/The-Beginning-of-Timepng.png",
            alt: "A pic of cover",
            day: "Saturday",
            desc: 'Newgrounds',
            audio: "music/Time.mp3"


        };

        break;


    case 0:
        today = "Sunday";

        music = {
            bgc: "black",
            color: "pink",
            songname: " K A R L S O N V I B ",
            artist: " Evan King  ",
            link: "https://www.youtube.com/watch?v=FtE6SV_1wu4",
            linkColor: "gold",
            pic: "images/KARLSONVIBE.png",
            alt: "A pic of cover",
            day: "Sunday",
            desc: 'Dani2',
            audio: "music/Karlson.mp3"
        };

        break;



}
function musicTemplate(music) {
    let myReturn = "";

    myReturn = `
    
    <img src="${music.pic}" alt="Our ${music.alt}" id="music">
    <p id="music-higlight">
    <strong class="feature" id="feature">${music.day}'s music Special:</strong><strong>${music.songname}</strong> by, <strong>${music.artist}, </strong><strong>link: </strong><a id="link"href="${music.link}">Youtube</a><strong> brought to you by: </strong>${music.desc}
    </p>
    
        `;

    return myReturn;
}
let audio = document.querySelector('audio');
audio.src = music.audio;
audio.volume = .25;
audio.loop = true;
audio.controls = true;
audio.style.background = music.color;

setTimeout(() => {
    audio.play();
}, 4000);






console.log(queryString);

document.getElementById("music-output").innerHTML = musicTemplate(music);

document.getElementsByTagName("HTML")[0].style.backgroundColor = music.color;

document.getElementById("music-higlight").style.color = music.color;

document.getElementById("music-higlight").style.boxShadow = music.color;

document.getElementById("link").style.color = music.linkColor;

document.getElementById("cardback").style.backgroundColor = music.bgc;

document.getElementById("feature").style.color = music.linkColor;


