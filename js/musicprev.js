// window.onload = function () {
    
//     const music = document.createElement("audio");
//     music.src = "bgmusic.mpeg"; 
//     music.loop = true;
//     music.autoplay = true; 

//     document.body.appendChild(music);

    
//     let playPromise = music.play();

//     if (playPromise !== undefined) {
//         playPromise.then(() => {
//             console.log("Music is playing...");
//         }).catch((error) => {
//             console.log("Autoplay blocked! Waiting for user interaction.");
//             document.addEventListener("click", () => {
//                 music.play();
//             }, { once: true }); 
//         });
//     }
// };
document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("bgMusic");

    if (!music) {
        music = document.createElement("audio");
        music.id = "bgMusic";
        music.src = "js/bgmusic.mpeg"; // Adjust path
        music.loop = true;
        music.volume = 0.2;
        document.body.appendChild(music);
    }

    function playMusic() {
        music.play().then(() => {
            console.log("Music started playing.");
            sessionStorage.setItem("musicPlayed", "true");
        }).catch(() => {
            console.log("Autoplay blocked!");
        });
    }

    // Resume music if already played
    if (sessionStorage.getItem("musicPlayed")) {
        playMusic();
    } else {
        document.addEventListener("click", playMusic, { once: true }); // First click starts music
        document.querySelector('.rightbtn').click();
        console.log('clicked');
    }
});


function setFavicon(url) {
    let link = document.querySelector("link[rel~='icon']");
    
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
    }
    
    link.href = url;
}

// Example usage: Set a new favicon
setFavicon("images/logo.jpg.jpg");
// setInterval(()=>{
//     document.querySelector('.rightbtn').click();
// }, 1000);
