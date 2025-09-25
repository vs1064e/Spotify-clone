/*
console.log("Hello world");

async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/spotify%20clone/Songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerhtml = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++){
        const element = as[index];
        if(element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    return songs
}
async function main() {
    let songs = await getsongs()
    console.log(songs)
    var audio = new Audio(songs[0]);
    audio.play();  
} 
main()
*/

console.log("Spotify Clone Loaded");

// Song list (map banners to files)
let songs = [
    { name: "Balam Pichkaari", src: "Songs/Balam Pichkari Full Song Video Yeh Jawaani Hai Deewani  PRITAM  Ranbir Kapoor, Deepika Padukone - T-Series.mp3" },
    { name: "For a reason", src: "Songs/For A Reason (Official Video) Karan Aujla  Tania   Ikky  Latest Punjabi Songs 2025 - Rehaan Records.mp3" },
    { name: "Apna Bana Le", src: "Songs/Apna Bana Le - Bhediya  Varun Dhawan, Kriti Sanon Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya - Zee Music Company.mp3" },
    { name: "Aaj se Teri", src: "Songs/Aaj Se Teri - Lyrical  Padman  Akshay Kumar & Radhika Apte  Arijit Singh  Amit Trivedi - Zee Music Company.mp3" },
    { name: "Cheques", src: "Songs/Shubh - Cheques (Official Music Video) - SHUBH.mp3" }
];

let currentSongIndex = 0;
let audio = new Audio();

// Elements
let banners = document.querySelectorAll(".bete");
let playbarName = document.querySelector(".songname");
let playbarTime = document.querySelector(".songtime");
let prevBtn = document.querySelector(".icons img:nth-child(1)");
let playBtn = document.querySelector(".icons img:nth-child(2)");
let nextBtn = document.querySelector(".icons img:nth-child(3)");
let line = document.querySelector(".line");
let point = document.querySelector(".point");

// Add a volume bar dynamically next to nextBtn
let volumeBar = document.createElement("input");
volumeBar.type = "range";
volumeBar.min = 0;
volumeBar.max = 1;
volumeBar.step = 0.01;
volumeBar.value = 1;
volumeBar.style.marginLeft = "15px";
nextBtn.parentElement.appendChild(volumeBar);

// Load a song
function loadSong(index) {
    currentSongIndex = index;
    audio.src = songs[currentSongIndex].src;
    playbarName.innerText = songs[currentSongIndex].name;
    audio.play();
    playBtn.src = "pause_circle_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"; // switch to pause icon
}

// Play/Pause toggle
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.src = "pause_circle_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
    } else {
        audio.pause();
        playBtn.src = "play_circle_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
    }
});

// Previous button
prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

// Next button
nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Clicking banners
banners.forEach((banner, index) => {
    banner.addEventListener("click", () => {
        loadSong(index);
    });
});

// Update playbar progress + time
audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
        let progress = (audio.currentTime / audio.duration) * 100;
        point.style.left = progress + "%";

        playbarTime.innerText = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
});

// Seek by clicking the line
line.addEventListener("click", (e) => {
    let rect = line.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let percent = offsetX / rect.width;
    audio.currentTime = percent * audio.duration;
});

// Volume control
volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value;
});

// Helper to format mm:ss
function formatTime(sec) {
    if (isNaN(sec)) return "0:00";
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
}
document.querySelector(".log").addEventListener("click", ()=>(
    document.querySelector
))
/*
const songs = [
    {
        name: "Balam Pichkaari",
        artist: "Yeh jawani hai deewani",
        src: "Songs/Balam Pichkari Full Song Video Yeh Jawaani Hai Deewani  PRITAM  Ranbir Kapoor, Deepika Padukone - T-Series.mp3"
    },
    {
        name: "For a reason", 
        artist: "Karan Aujla",
        src: "Songs/For A Reason (Official Video) Karan Aujla  Tania   Ikky  Latest Punjabi Songs 2025 - Rehaan Records.mp3"
    },
    {
        name: "Apna bana le",
        artist: "Arijit Singh", 
        src: "Songs/Apna Bana Le - Bhediya  Varun Dhawan, Kriti Sanon Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya - Zee Music Company.mp3"
    },
    {
        name: "Aaj se Teri",
        artist: "Arijit Singh",
        src: "Songs/Aaj Se Teri - Lyrical  Padman  Akshay Kumar & Radhika Apte  Arijit Singh  Amit Trivedi - Zee Music Company.mp3"
    },
    {
        name: "Cheques",
        artist: "Shubh",
        src: "Songs/Shubh - Cheques (Official Music Video) - SHUBH.mp3"
    }
];

// Player state variables
let currentSongIndex = 0;
let isPlaying = false;
let currentAudio = new Audio();

// DOM elements
const songNameDisplay = document.querySelector('.songname');
const songTimeDisplay = document.querySelector('.songtime');
const playPauseBtn = document.querySelector('.icons img:nth-child(2)');
const prevBtn = document.querySelector('.icons img:nth-child(1)');
const nextBtn = document.querySelector('.icons img:nth-child(3)');
const progressLine = document.querySelector('.line');
const progressPoint = document.querySelector('.point');
const songElements = document.querySelectorAll('.bete');

// Initialize player
function initPlayer() {
    loadCurrentSong();
    updateSongDisplay();
    setupEventListeners();
}

// Load current song
function loadCurrentSong() {
    const currentSong = songs[currentSongIndex];
    currentAudio.src = currentSong.src;
    updateSongDisplay();
}

// Update song name and artist display
function updateSongDisplay() {
    const currentSong = songs[currentSongIndex];
    songNameDisplay.innerHTML = `
        <div style="display: flex; flex-direction: column;">
            <span style="font-weight: 600; font-size: 14px;">${currentSong.name}</span>
            <span style="color: #b3b3b3; font-size: 12px;">${currentSong.artist}</span>
        </div>
    `;
}

// Update time display
function updateTimeDisplay() {
    const currentTime = formatTime(currentAudio.currentTime);
    const duration = formatTime(currentAudio.duration || 0);
    songTimeDisplay.textContent = `${currentTime} / ${duration}`;
}

// Format time in mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Update progress bar
function updateProgressBar() {
    if (currentAudio.duration) {
        const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressLine.style.width = `${progress}%`;
        progressPoint.style.left = `${progress}%`;
    }
}

// Play current song
function playSong() {
    currentAudio.play();
    isPlaying = true;
    playPauseBtn.src = "pause_circle_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
}

// Pause current song
function pauseSong() {
    currentAudio.pause();
    isPlaying = false;
    playPauseBtn.src = "play_circle_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
}

// Toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// Play next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadCurrentSong();
    if (isPlaying) {
        playSong();
    }
}

// Play previous song
function prevSong() {
    currentSongIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    loadCurrentSong();
    if (isPlaying) {
        playSong();
    }
}

// Play song by index (when clicking on song banners)
function playSongByIndex(index) {
    currentSongIndex = index;
    loadCurrentSong();
    playSong();
}

// Setup all event listeners
function setupEventListeners() {
    // Play/Pause button
    playPauseBtn.addEventListener('click', togglePlayPause);
    
    // Previous button
    prevBtn.addEventListener('click', prevSong);
    
    // Next button  
    nextBtn.addEventListener('click', nextSong);
    
    // Song banner clicks
    songElements.forEach((songElement, index) => {
        songElement.addEventListener('click', () => {
            playSongByIndex(index);
        });
        
        // Add hover effect for better UX
        songElement.addEventListener('mouseenter', () => {
            songElement.style.backgroundColor = '#2a2a2a';
            songElement.style.cursor = 'pointer';
        });
        
        songElement.addEventListener('mouseleave', () => {
            songElement.style.backgroundColor = 'transparent';
        });
    });
    
    // Audio event listeners
    currentAudio.addEventListener('timeupdate', () => {
        updateTimeDisplay();
        updateProgressBar();
    });
    
    currentAudio.addEventListener('loadedmetadata', () => {
        updateTimeDisplay();
    });
    
    currentAudio.addEventListener('ended', () => {
        nextSong();
    });
    
    // Progress bar click (optional - click to seek)
    const playbar = document.querySelector('.playbar');
    playbar.addEventListener('click', (e) => {
        const rect = playbar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const playbarWidth = rect.width;
        const clickProgress = (clickX / playbarWidth);
        
        if (currentAudio.duration) {
            currentAudio.currentTime = clickProgress * currentAudio.duration;
        }
    });
}

// Add volume control (you can add a volume slider to your HTML if needed)
function setVolume(volume) {
    currentAudio.volume = Math.max(0, Math.min(1, volume));
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initPlayer);

// Optional: Add keyboard controls
document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'ArrowLeft':
            prevSong();
            break;
        case 'ArrowRight':
            nextSong();
            break;
    }
});

// Export functions for potential external use
window.spotifyPlayer = {
    play: playSong,
    pause: pauseSong,
    next: nextSong,
    prev: prevSong,
    setVolume: setVolume,
    getCurrentSong: () => songs[currentSongIndex]
};
*/