let songTitle = document.getElementById("songTitle");
let songTime = document.getElementById("songFinish-time");
let songProgress = document.getElementById("songDuration");
let currentSongProgress = document.getElementById("currentSong-time");
let playPause = document.getElementById("playPause");
let nowPlaying = document.querySelector(".text");
let dot = document.querySelector(".dot");
let songSound = document.getElementById("songSound");
let nextBtn = document.getElementById("nxtBtn");
let prevBtn = document.getElementById("prevBtn");
let songs = [];
let currentSong = new Audio();
let isPlaying = false;

async function getSongs() {
    try {
        let response = await fetch('/songs/');;
        let htmlString = await response.text();

        let div = document.createElement("div");
        div.innerHTML = htmlString;

        let songsLink = div.querySelectorAll('a');

        for (let song of songsLink) {
            let urlParts = song.href.split('/');
            let fileName = urlParts[urlParts.length - 1];
            let songName = fileName.split('_-_')[0].replace(/\.mp3$/, '').trim();
            let songUrl = song.href;

            let audio = new Audio(songUrl);
            audio.onloadedmetadata = function() {
                let duration = audio.duration;
                songs.push({ name: songName, url: songUrl, duration: duration });
                updatePlaylist();
            };
        }
    } catch (error) {
        console.error('Error fetching songs ', error);
    }
};

function updatePlaylist() {
    let songContainer = document.querySelector('.songlist');
    songContainer.innerHTML = "";
    songs.forEach(song => {
        let songItem = document.createElement('div');
        songItem.classList.add('songName');

        songItem.innerHTML = `
            <div class="songleft">
                <img src="Vector.png">
                <img src="song.jpg">
                <h2>${decodeURIComponent(song.name)}</h2>
            </div>
            <p>${formatTime(song.duration)}</p>`;

        songItem.addEventListener("click", () => {
            playSong(song);
        });

        songContainer.appendChild(songItem);
    });

    playPause.onclick = () => {
        if (!isPlaying) {
            playSong(songs[0])
        } else {
            playnPauseToggle();
        }
    }
}

function playSong(song) {
    let currentPlayingSong = document.querySelector(".songName.playing");

    if (currentPlayingSong) {
        currentPlayingSong.classList.remove('playing');
    }

    let songItems = document.querySelectorAll('.songName');
    songItems.forEach(item => {
        if (item.querySelector('h2').innerText === decodeURIComponent(song.name)) {
            item.classList.add('playing');
        }
    });

    currentSong.src = song.url;
    currentSong.play();
    songTitle.innerText = decodeURIComponent(song.name);
    songTime.innerText = formatTime(song.duration);
    playPause.src = "/icons/pause.png";

    currentSong.ontimeupdate = () => {
        songProgress.value = currentSong.currentTime;
        songProgress.max = song.duration;
        currentSongProgress.innerText = formatTime(currentSong.currentTime);

        updateSongProgressBackground();
    };

    nowPlaying.innerHTML = "Now Playing";
    isPlaying = true;
}

async function displayAlbums(){
    let a = await fetch(`http://127.0.0.1:3001/songs/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;

    let anchors = div.getElementsByTagName("a");
    let albumlist = document.querySelector(".albumlist");
    let array = Array.from(anchors);

    for(let index = 0;index < array.length;index++){
        const e = array[index];

        if(e.href.includes("/songs")){
            let folder = e.href.split("/").slice(-2)[0];

            let a = await fetch(`http://127.0.0.1:3001/songs/${folder}/info.json`);
            let response = await a.json();

            albumlist.innerHTML = albumlist.innerHTML +
            `<div data-folder="${folder}" class="album">
                        <img src="/songs/${folder}/cover.jpg">
                        <h6>${response.title}</h6>
                        <p>${response.discription}</p>
                    </div>`
        }
    }
    Array.from(document.getElementsByClassName("album")).forEach((e) => {
        e.addEventListener("click", async (item) => {
          songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
        });
      });
}

function playnPauseToggle() {
    if (currentSong.paused) {
        currentSong.play();
        playPause.src = "/icons/pause.png";
        nowPlaying.innerHTML = "Now Playing";

        let currentPlayingSong = document.querySelector('.songName.playing');
        if (currentPlayingSong) {
            currentPlayingSong.classList.add('playing');
        }
    } else {
        currentSong.pause();
        playPause.src = "/icons/play button.png";
        nowPlaying.innerHTML = "Song Paused";
    }
}

playPause.onclick = playnPauseToggle;
songProgress.oninput = function () {
    currentSong.currentTime = songProgress.value;
    updateSongProgressBackground();
};

function updateSongProgressBackground() {
    const value = (songProgress.value - songProgress.min) / (songProgress.max - songProgress.min) * 100;
    songProgress.style.background = `linear-gradient(to right, #27AE60 0%, #27AE60 ${value}%, rgba(0, 0, 0, 0.25) ${value}%, rgba(0, 0, 0, 0.25) 100%)`;
}

if (!currentSong.paused) {
    let currentPlayingSong = document.querySelector('.songName.playing');
    if (currentPlayingSong) {
        currentPlayingSong.classList.add('playing');
    }
}

function showDot() {
    let dotCount = 1;

    function displayDot() {
        const message = `Now Playing ${'.'.repeat(dotCount)}`;
        dot.textContent = message;

        dotCount = (dotCount % 3) + 1;
    }

    displayDot();

    setInterval(displayDot, 1000);
}

function volume() {
    songSound.addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;
        const value = (songSound.value - songSound.min) / (songSound.max - songSound.min) * 100;
        songSound.style.background = `linear-gradient(to right, #27AE60 0%, #27AE60 ${value}%, rgba(0, 0, 0, 0.25) ${value}%, rgba(0, 0, 0, 0.25) 100%)`;
    })
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function main() {
    displayAlbums();
    getSongs();
    volume();

    currentSong.ontimeupdate = () => {
        if (isPlaying) {
            updateSongProgressBackground();
        }
    };

    nextBtn.addEventListener("click", e => {
        let index = songs.findIndex(song => song.url === currentSong.src);
        if (index !== -1 && index + 1 < songs.length) {
            playSong(songs[index + 1]);
        } else {
            playSong(songs[0]);
        }
    });

    prevBtn.addEventListener("click", e => {
        let index = songs.findIndex(song => song.url === currentSong.src);
        if (index !== -1) {
            let prevIndex = (index - 1 + songs.length) % songs.length;
            playSong(songs[prevIndex]);
        } else {
            playSong(songs[songs.length - 1]);
        }
    });

    currentSong.addEventListener('ended', () => {
        nowPlaying.innerHTML = "Currently Not Playing";
        playPause.src = "/icons/play button.png";
    });

    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".boxLeft").style.left = 0;
    });

    document.querySelector(".cross").addEventListener("click",()=>{
        document.querySelector(".boxLeft").style.left = "-120%";
    });

    document.querySelector(".up").addEventListener("click",()=>{
        document.querySelector(".boxCenter").style.height = "100vh";
        document.querySelector(".songInfo img").style.display = "block";
        document.querySelector(".songSound").style.display = "block";
        document.querySelector(".text").style.display = "block";
        document.querySelector(".songTime").style.marginTop = 0;
        document.querySelector(".songCtrl").style.marginTop = 0;
        document.querySelector(".up").style.display = "none";
        document.querySelector(".down").style.display = "block";
    });

    document.querySelector(".down").addEventListener("click",()=>{
        document.querySelector(".boxCenter").style.height = "200px";
        document.querySelector(".songInfo img").style.display = "none";
        document.querySelector(".songSound").style.display = "none";
        document.querySelector(".text").style.display = "none";
        document.querySelector(".songTime").style.marginTop = "-450px";
        document.querySelector(".songCtrl").style.marginTop = "-120px";
        document.querySelector(".up").style.display = "block";
        document.querySelector(".down").style.display = "none";
    });
}

// Initialize the music player when the DOM content is loaded
document.addEventListener('DOMContentLoaded', main);
